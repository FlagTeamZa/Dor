
const config = require("../../config.json");
const color = require("../../Config/colors.json");
const { MessageEmbed } = require("discord.js");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
const Users = new UserConfigEvent();
module.exports = {
    player(room){
      let f = [];
      for (let i = 0; i < room.member.length; i++) {
      let username = room.member[i].username;
      let id = room.member[i].ID;
      let hp = room.member[i].HP;
      let maxhp = room.member[i].MaxHP;
      let skill = room.member[i].cooldownSkill;
      let ob = {
        name: `↬ ${username} - Lv.${Users.getLevel(id)} ₊˚`,
        value: `HP: ${hp}/${maxhp}💉\n• cd_s1: ${skill[0]}\n• cd_s2: ${skill[1]}\n• cd_s3: ${skill[2]}\n--------------------------------`
      }
      f.push(ob);
      }
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle(`ROOM ${room.id} (เทิร์นที่ ${room.turn})`)
      .setDescription(`รอผู้เล่นใช้สกิล ${room.seesion}/${room.Maxseesion}\nเทิร์นที่แล้ว:\n${room.MM}`)
      .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    enemy(room){
      let f = [];
      let monster = room.monster.name;
      let lv = room.monster.Lv;
      let hp = room.monster.HP;
      let maxhp = room.monster.MaxHP;
      // let skill = room.member[i].cooldownSkill;
      let ob = {
        name: `↬ ${monster} - Lv.${lv} ₊˚`,
        value: `HP: ${hp}/${maxhp}💉\n--------------------------------`
      }
      f.push(ob);
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle(`ROOM ${room.id} (เทิร์นที่ ${room.turn})`)
      .setDescription(`เทิร์นที่แล้ว:\n${room.PM}`)
      .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    done(room,drop){
      let f = [];
      let monster = room.monster.name;
      let lv = room.monster.Lv;
      let d = "";
      for (let i = 0; i < drop.length; i++) {
        d += `**₊˚ ${drop[i].player} ˚₊**\nEXP drop: ${drop[i].exp}\nItem drop: ${drop[i].Item} ${drop[i].count} ea\nMoney drop: ${drop[i].money}\n`
      }
      // let skill = room.member[i].cooldownSkill;
      let ob = {
        name: `↬ ${monster} - Lv.${lv} ₊˚`,
        value: d
      }
      f.push(ob);
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle(`ROOM ${room.id} END`)
      .setDescription(``)
      .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    }
}