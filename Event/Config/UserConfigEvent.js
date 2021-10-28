



const fs = require("fs");
const mt_rand = require("../../add-on/mt_rand");
const Config = require("../../Config/player.json");
const DORID = require("../../Config/DOR_ID.json");
const setting = require("../../Config/autosave.json");
// mt_rand
module.exports = class UserConfigEvent{
    constructor(value = 1){
        if (value !== 1) {
            this.AutoSave();
            console.log("[Auto Save] Players Config start.");
            console.log("[Auto Save] DOR_ID Config start.");
        }
    }
    reset(){
      var Config = Array();
      var DORID = Object();

      console.log(
        Config,
        DORID,
        "User , DORID"
      );

      fs.writeFile("./Config/player.json", JSON.stringify(Config,null,4), (err) => {
        if (err) console.error(err)
         });
         fs.writeFile("./Config/DOR_ID.json", JSON.stringify(DORID,null,4), (err) => {
           if (err) console.error(err)
            });
    }
    New(id,job,name,DOR_id){
        var conn = {
            "id": id,
            "DOR_id": DOR_id,
            "class": job,
            "name": name,
            "lv": 1,
            "Exp": 0,
            "MaxExp": 100,
            "HP": 100,
            "MaxHP": 100
        }

        Config.push(conn);
        console.log(Config);
    }
    addEXP(id,value){
      for (let i = 0; i < Config.length; i++) {
        if (Config[i]["id"] === id) {

          Config[i]["Exp"] = Config[i]["Exp"] + value;
          if (Config[i]["Exp"] >= Config[i]["MaxExp"]) {
            Config[i]["Exp"] = 0;
            Config[i]["MaxExp"] = Config[i]["MaxExp"] * 1.3;
            Config[i]["lv"] = Config[i]["lv"] + 1;
          }
        }
        }
    }

    getDMG(id){
      return 10;
    }
    getExp(id){
      for (let i = 0; i < Config.length; i++) {
        if (Config[i]["id"] === id) {
          return Config[i]["Exp"];
        }
        }
        return false;
    }
    getMaxExp(id){
      for (let i = 0; i < Config.length; i++) {
        if (Config[i]["id"] === id) {
          return Config[i]["MaxExp"];
        }
        }
        return false;
    }
    getHP(id){
      for (let i = 0; i < Config.length; i++) {
        if (Config[i]["id"] === id) {
          return Config[i]["HP"];
        }
        }
        return false;
    }
    getMaxHP(id){
      for (let i = 0; i < Config.length; i++) {
        if (Config[i]["id"] === id) {
          return Config[i]["MaxHP"];
        }
        }
        return false;
    }
    getDOR_ID(id){
      for (let i = 0; i < Config.length; i++) {
      if (Config[i]["id"] === id) {
        return Config[i]["DOR_id"];
      }
      }
      return false;
    }
    getDOR_IdbyID(id){
      for (let value in DORID) {
       if (DORID[value] === id) {
         return value;
       }
      }
      return false;
    }
    getIDByDOR_ID(id){
      if (typeof DORID[id] === 'undefined') {
        return false;
      }
      return DORID[id];
    }
    genDOR_ID(id){
     var gen = mt_rand(100000,999999);
     if (typeof DORID[gen] === 'undefined') {
       DORID[gen] = id;
       return gen;
     }
     this.genDOR_ID(id);
    }
    getName(id){
        for (let i = 0; i < Config.length; i++) {
        if (Config[i]["id"] === id) {
          return Config[i]["name"];
        }
        }
      }
    getJob(id){
        for (let i = 0; i < Config.length; i++) {
        if (Config[i]["id"] === id) {
          return Config[i]["class"];
        }
        }
      }
    getLevel(id){
        for (let i = 0; i < Config.length; i++) {
        if (Config[i]["id"] === id) {
          return Config[i]["lv"];
        }
        }
      }
    save() {
        console.log("[Auto Save] Players Config is saved.");
        console.log("[Auto Save] DOR_ID Config is saved.");
         fs.writeFile("./Config/player.json", JSON.stringify(Config), (err) => {
           if (err) console.error(err)
            });
            fs.writeFile("./Config/DOR_ID.json", JSON.stringify(DORID), (err) => {
              if (err) console.error(err)
               });
       }
    AutoSave(){
        setInterval(() => {
          this.save();
        }, setting.UserConfig * 1000);
    }

}