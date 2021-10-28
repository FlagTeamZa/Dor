
const name = "CreatePartyConfig";
console.log(`[System] Event/Config/${name} connect.`);
const party = [];
const mt_rand = require("../../add-on/mt_rand");
const PARTID = require("../../Config/PARTYID.json");
// mt_rand
const seesion = [];
const fs = require("fs");
const setting = require("../../Config/autosave.json");

module.exports = class CreatePartyConfig{
  constructor(value = 1){
    if (value !== 1) {
        this.AutoSave();
        console.log("[Auto Save] PARTID Config start.");
    }
}
    reset(){
      var PARTID = Object();
      console.log(
        PARTID,
        "Party"
        );
        fs.writeFile("./Config/PARTYID.json", JSON.stringify(PARTID,null,4), (err) => {
          if (err) console.error(err)
           });
    }
    async create(message){
        var id = this.genParty_ID();
        var head = message.author.id;
        var member = [head];

        PARTID[id] = {
          "id": id,
          "head": head,
          "member": member,
          "msgID": null,
          "map": "ยังไม่ได้เลือก",
          "select": "ยังไม่ได้เลือก",
          "target": "ยังไม่ได้เลือก"  
        };
        // console.log(PARTID[id]);
    }

    getParty(user){
        for (let value in PARTID) {
          // console.log(PARTID[value].member.length);
            if (PARTID[value].member.indexOf(user) !== -1) {
                return PARTID[value];
            }
            
        }
        return false;
    }

    set(id,value1,value2){
      for (let value in PARTID) {
        // console.log(PARTID[value].member.length);
          if (PARTID[value].head === id) {
             PARTID[value][value1] = value2;
             return true;
          }
          
      }
      return false;
  }
    getHead(user){
     var head = this.getParty(user);
     if (head.head === user) {
        return true; 
     }
     return false;
    }

    deleteParty(id){
      delete PARTID[id];
    }


    addParty(user,target){
 
      for (let value in PARTID) {
          if (PARTID[value].head === user) {
              PARTID[value].member.push(target);
              return true;
          }
      }
      return false;

    }

    leaveParty(user){
       for (let value in PARTID) {
          if (PARTID[value].head === user) {
             this.deleteParty(PARTID[value].id);
             return true;
          }
    }
  }
    genParty_ID(){
        var gen = mt_rand(100000,999999);
        if (typeof PARTID[gen] === 'undefined') {
          return gen;
        }
        this.genDOR_ID();
       }

      Seesion(user,target){
        seesion.push({"user": user,"target": target});
      }

      getSeesion(user){
        for (let i = 0; i < seesion.length; i++) {
          if (seesion[i].target === user) {
              return seesion[i].user;
          }
        }
        return false;
      }
      rmSeesion(user){
        for (let i = 0; i < seesion.length; i++) {
          if (seesion[i].target === user) {
              delete seesion[i];
              return;
          }
        }
        return false;
      }
      
      save() {
        console.log("[Auto Save] PARTID Config is saved.");
         fs.writeFile("./Config/PARTYID.json", JSON.stringify(PARTID), (err) => {
           if (err) console.error(err)
            });
       }

       AutoSave(){
         setInterval(() => {
           this.save();
         }, setting.PartyConfig * 1000);
       }

}