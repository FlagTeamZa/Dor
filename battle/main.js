const CreatePartyConfig = require("../Event/Config/CreatePartyConfig");
const UserConfigEvent = require("../Event/Config/UserConfigEvent");
// UserEconomyConfig
const battle = require("../GUI/Battle/battle");
const Party = new CreatePartyConfig();
const arg =[];
const Users = new UserConfigEvent();
const fs = require("fs");
const jobs = [];
const monsters = [];
const map = require("../Config/map.json");
const mt_rand = require("../add-on/mt_rand");
const battleupdatemsg = require("./add-on/battleupdatemsg");
const ITEM = require("../Items/Item");
const UserEconomyConfig = require("../Event/Config/UserEconomyConfig");
const Inventory = require("../Items/Event/Inventory");
const Economy = new UserEconomyConfig();
const Inv = new Inventory();

// Item
fs.readdirSync("./battle/Class_Skill")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		const job = require(`./Class_Skill/${file}`);
		jobs[job.class] = job;
});
fs.readdirSync("./battle/monster")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		const monster = require(`./monster/${file}`);
		monsters[monster.class] = monster;
});
// const swordman = require("../battle/Class_Skill/swordman");
// const c = []
module.exports = class Main {
    constructor(party = 0,id = 0){
        if (party !== 0 && id !== 0) {
            this.New(party,id);
        }
   
    }

     New(party,id){
        var member = [];
        // var userID = id;
        var id = party.id;
       for (let i = 0; i < party.member.length; i++) {
        var ob = {
            "ID": party.member[i],
            "HP": Users.getHP(party.member[i]),
            "MaxHP": Users.getMaxHP(party.member[i]),
            "username": Users.getName(party.member[i]),
            "job": Users.getJob(party.member[i]),
            "Dmg": Users.getDMG(party.member[i]),
            "Buff": [],
            "msg": "",
            "useSkill": false,
            "cooldownSkill": [
                0,
                0,
                0
            ]
        }
        member.push(ob);
       }
       var a = {
        "id": id,
        "member": member,
        "turn": 0,
        "seesion": 0,
        "Maxseesion": member.length,
        "PM": "",
        "MM": "",
        "status": 0,
        "monster": {
            "name": map[party.map].monster[party.select].name,
            "Lv": map[party.map].monster[party.select].lv,
            "HP": map[party.map].monster[party.select].HP,
            "MaxHP": map[party.map].monster[party.select].HP,
            "Buff": []
        }
        }
        arg.push(a);
        // console.log(arg);
        // this.getRoom(userID);
    }
    getRoom(id){
        let username = Users.getName(id);
        for (let i = 0; i < arg.length; i++) {
            var v = arg[i] ? true : false;
            if (v) {
            for (let a = 0; a < arg[i].member.length; a++) {
                if (arg[i].member[a].username === username) {
                    // console.log(arg[i]);
                    return arg[i];
                }
            }
        }
    }
    }
    PlayerEmbed(id){
        let room = this.getRoom(id);
        return battle.player(room);
    }
    
    EnemyEmbed(id){
        let room = this.getRoom(id);
        return battle.enemy(room);
    }

    DoneEmbed(id,drop){
        let room = this.getRoom(id);
        return battle.done(room,drop);
    }
    DropItem(i,id,message){
        var drops = [];
        for (let a = 0; a < arg[i].member.length; a++) {
            var random = mt_rand(0,100);
            var monster = monsters[arg[i].monster.name];
            var C_Uncommon = monster.Drop["Uncommon"] ? true : false;
            var C_Common = monster.Drop["Common"] ? true : false;
            var C_Rare = monster.Drop["Rare"] ? true : false;
            var C_Epic = monster.Drop["Epic"] ? true : false;
            var C_Legenary = monster.Drop["Legenary"] ? true : false;
            var Legenary = C_Legenary ? random <= monster.Drop["Legenary"].rate ? [monster.Drop["Legenary"].Item, monster.Drop["Legenary"].min, monster.Drop["Legenary"].max] : false : false;
            var Epic = C_Epic ? random <= monster.Drop["Epic"].rate ? [monster.Drop["Epic"].Item, monster.Drop["Epic"].min, monster.Drop["Epic"].max] : false : false;
            var Rare = C_Rare ? random <= monster.Drop["Rare"].rate ? [monster.Drop["Rare"].Item, monster.Drop["Rare"].min, monster.Drop["Rare"].max] : false : false;
            var Common = C_Common ? random <= monster.Drop["Common"].rate ? [monster.Drop["Common"].Item, monster.Drop["Common"].min, monster.Drop["Common"].max] : false : false;
            var Uncommon = C_Uncommon ? random <= monster.Drop["Uncommon"].rate ? [monster.Drop["Uncommon"].Item, monster.Drop["Uncommon"].min, monster.Drop["Uncommon"].max] : false : false;

            console.log(
                random,
                Uncommon,
                Common,
                Rare,
                Epic,
                Legenary
            );
            var Item = Legenary ? Legenary : Epic ? Epic : Rare ? Rare : Common ? Common : Uncommon ? Uncommon : false;
            //  Uncommon ? Uncommon ? Uncommon : Common ? Common : Rare ? Rare : Epic ? Epic : Legenary ? Legenary : false : false;
            console.log(Item);
            var exp = mt_rand(monster.Drop.EXP.min,monster.Drop.EXP.max);
            var money = mt_rand(monster.Drop.Money.min,monster.Drop.Money.max);
            var item = new ITEM(Item[0]);
            var count = mt_rand(Item[1],Item[2]);

            Users.addEXP(arg[i].member[a].ID,exp);
            Economy.addMoney(arg[i].member[a].ID,money);
            Inv.addItem(arg[i].member[a].ID,Item[0],count);


            
            var ob = {
                "exp": exp,
                "Item": item.getName(),
                "count": count,
                "player": arg[i].member[a].username,
                "money": money
            }
            drops.push(ob);
        }
      
        battleupdatemsg.done(message,id,this.DoneEmbed(id,drops));
      
    }

    addTurn(id){
     
        for (let i = 0; i < arg.length; i++) {
            var v = arg[i] ? true : false;
            if (v) {
           if (arg[i].id === id) {
            arg[i].turn = arg[i].turn + 1;
            for (let a = 0; a < arg[i].member.length; a++) {
                arg[i].member[a].useSkill = false;
                // console.log(arg[i].member[a]);
                    for (let m = 0; m < arg[i].member[a].cooldownSkill.length; m++) {
                        if (arg[i].member[a].cooldownSkill[m] > 0) {
                         arg[i].member[a].cooldownSkill[m] = arg[i].member[a].cooldownSkill[m] - 1;
                        }
                     }
                    }
            }
           }
        }
       
    }
    isUse(id){
        let username = Users.getName(id);
        for (let i = 0; i < arg.length; i++) {
            var v = arg[i] ? true : false;
            if (v) {
            for (let a = 0; a < arg[i].member.length; a++) {
                if (arg[i].member[a].username === username) {
                    return arg[i].member[a].useSkill;
                }
            }
        }
    }
    }

    RemovePlayerBuff(i){
        for (let a = 0; a < arg[i].member.length; a++) {
           for (let n = 0; n < arg[i].member[a].Buff.length; n++) {
               if (arg[i].member[a].Buff[n].turn > 0) {
                arg[i].member[a].Buff[n].turn = arg[i].member[a].Buff[n].turn - 1;
                if (arg[i].member[a].Buff[n].turn === 0) {
                    arg[i].member[a].Buff.splice(n,n);
                }
               }   
           }
        }
    }

    async PlayerSkill(value,i,m){
        console.log(value);
        // return;
       switch (value.type) {
            case "buff":
            var ob = {
                "name": value.name,
                "turn": value.turn
            }
            arg[i].member[m].Buff.push(ob);
            arg[i].member[m].msg = this.msg(value.msg,arg[i].member[m]);
            break;
       
            case "atk":
            arg[i].monster.HP = arg[i].monster.HP - value.dmg;
            arg[i].member[m].msg = this.msg(value.msg,arg[i].member[m]);
            break;
       }
    }
    
    msg(value,player){
        value.replace("%user%", `${player.username}`);
        return value;
    }

    async MonsterSkill(value,i,m){
        console.log(value);
        // return;
       switch (value.type) {
            case "buff":
            var ob = {
                "name": value.name,
                "turn": value.turn
            }
            arg[i].member[m].Buff.push(ob);
            arg[i].member[m].msg = this.msg(value.msg,arg[i].member[m]);
            break;
       
            case "atk":
            arg[i].monster.HP = arg[i].monster.HP - value.dmg;
            arg[i].member[m].msg = this.msg(value.msg,arg[i].member[m]);
            break;
       }
    }
    async PlayerATK(id,skill,message){
        let username = Users.getName(id);
        let job = Users.getJob(id);
        for (let i = 0; i < arg.length; i++) {
            var v = arg[i] ? true : false;
            if (v) {
            for (let a = 0; a < arg[i].member.length; a++) {
                if (arg[i].member[a].username === username) {
                    arg[i].member[a].useSkill = true;
                    arg[i].member[a].cooldownSkill[skill] = jobs[job].Skill[skill].cooldown;
                    await this.PlayerSkill(
                        jobs[job].run(
                            skill,
                            arg[i].member[a]
                        ),
                        i,
                        a
                        );

                    // return;
                    arg[i].seesion = arg[i].seesion+1;
                    let pm = "";
                    for (let g = 0; g < arg[i].member.length; g++) {
                        pm += arg[i].member[g].msg;
                        
                    }
                    arg[i].PM = pm;
                    

                    if (arg[i].monster.HP <= 0) {
                        this.DropItem(i,id,message);
                        delete arg[i];
                        return;
                    }
                    if (arg[i].seesion === arg[i].Maxseesion) {
                        arg[i].seesion = 0;
                        
                        this.EntityATK(i,id,message);
                        return;
                    }
                    battleupdatemsg.player(message,id,this.PlayerEmbed(id));
                    // return ;
                }
            }
        }
    }
    }
    
    EntityATK(i,id,message){
        var msg = "";
        let s = monsters[arg[i].monster.name].Skill[mt_rand(0,2)];
        let r = mt_rand(0,arg[i].member.length) - 1;
        let p = r < 0 ? 0 : r;
        this.RemovePlayerBuff(i);
        switch (s.type.split("-")[0]) {
            case "atk":
                switch (s.type.split("-")[1]) {
                    case "basic":
                    var dmg = s.dmg;
                    break;               
                }
            break;

            case "miss":
                var ob = {
                    "type": "miss",
                    "turn": s.turn
                    }
                arg[i].monster.Buff.push(ob);
                var dmg = 0;
                arg[i].MM =`${arg[i].monster.name} : บัฟหลบการโจมตีให้ตัวเอง\n`;
            break;
                }

            if (arg[i].member[p].Buff.length > 0) {

            for (let k = 0; k < arg[i].member[p].Buff.length; k++) {
                switch (arg[i].member[p].Buff[k].type.split("-")[0]) {
                    case "def":
                        var dmg = dmg - (dmg * Number(`0.${arg[i].member[p].Buff[k].type.split("-")[1]}`));
                    break;
                                   
             }
            } 

            }
            this.addTurn(arg[i].id);
            arg[i].member[p].HP = arg[i].member[p].HP - dmg;
            if (dmg > 0) {
                arg[i].MM =`${arg[i].monster.name} : สร้างความเสียหาย ${dmg}! ให้กับ ${arg[i].member[p].username}\n`;
            }

            battleupdatemsg.enemy(message,id,this.EnemyEmbed(id));
            setTimeout(() => {
                battleupdatemsg.player(message,id,this.PlayerEmbed(id));  
            }, 5000);
    }

    isCooldown(id,skill){
        let username = Users.getName(id);
        for (let i = 0; i < arg.length; i++) {
            var v = arg[i] ? true : false;
            if (v) {
            for (let a = 0; a < arg[i].member.length; a++) {
                if (arg[i].member[a].username === username) {
                   if (arg[i].member[a].cooldownSkill[skill] > 0) {
                    return true;
                   }
                   return false;        
            }
        }
            }
        }
    }
    UseSkill(id,skill){
        let username = Users.getName(id);
        let job = Users.getJob(id);
        // let PM = "";
        for (let i = 0; i < arg.length; i++) {
            for (let a = 0; a < arg[i].member.length; a++) {
                if (arg[i].member[a].username === username) {
                    arg[i].member[a].useSkill = true;
                    arg[i].member[a].cooldownSkill[skill] = jobs[job].Skill[skill].cooldown;
                    
                    console.log(jobs[job].Skill[skill].type.split("-"));
                    //getSkill
                    
                    



                    // arg[i].member[a].cooldownSkill[skill]
                    
                    // console.log(dmg);

                    


                    


                    if (arg[i].seesion === arg[i].Maxseesion) {
                        arg[i].seesion = 0;
                        //enemy turn
                        
                        //
                        console.log(this.getRoom(id));
                        return this.EnemyEmbed(id);
                    }
                        console.log(this.getRoom(id));
                        return this.PlayerEmbed(id);
                    // console.log(arg[i]);
                    // return arg[i];
                }
            }
        }
    }

}