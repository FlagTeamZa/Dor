


const Config = require("../../Config/uniform.json");
const fs = require("fs");
const setting = require("../../Config/autosave.json");


module.exports = class UserUniformEvent{
  constructor(value = 1){
    if (value !== 1) {
        this.AutoSave();
        console.log("[Auto Save] Uniform Config start.");
    }
}
reset(){
  var Config = Array();
  console.log(
    Config,
    "Uniform"
  );
  fs.writeFile("./Config/uniform.json", JSON.stringify(Config), (err) => {
    if (err) console.error(err)
     });
}
getHead(id){
    for (let i = 0; i < Config.length; i++) {
    if (Config[i]["id"] === id) {
      return Config[i]["head"];
    }
    }
  }

getEyes(id){
    for (let i = 0; i < Config.length; i++) {
    if (Config[i]["id"] === id) {
      return Config[i]["eyes"];
    }
    }
  }

  getMouth(id){
    for (let i = 0; i < Config.length; i++) {
    if (Config[i]["id"] === id) {
      return Config[i]["mouth"];
    }
    }
  }

  getShirt(id){
    for (let i = 0; i < Config.length; i++) {
    if (Config[i]["id"] === id) {
      return Config[i]["shirt"];
    }
    }
  }

  getTrousers(id){
    for (let i = 0; i < Config.length; i++) {
    if (Config[i]["id"] === id) {
      return Config[i]["trousers"];
    }
    }
  }

  getShoe(id){
    for (let i = 0; i < Config.length; i++) {
    if (Config[i]["id"] === id) {
      return Config[i]["shoe"];
    }
    }
  }

  getColor(id){
    for (let i = 0; i < Config.length; i++) {
    if (Config[i]["id"] === id) {
      return Config[i]["color"];
    }
    }
  }

  getGender(id){
    for (let i = 0; i < Config.length; i++) {
    if (Config[i]["id"] === id) {
      return Config[i]["gender"];
    }
    }
  }
    New(id,head = 0,shirt = 0,trousers = 0,shoe = 0,color = 0,gender = "", eyes = 0, mouth = 0){
        var conn = {
            "id": id,
            "head": head,
            "eyes": eyes,
            "mouth": mouth,
            "shirt": shirt,
            "trousers": trousers,
            "shoe": shoe,
            "color": color,
            "gender": gender
        }

        Config.push(conn);

        console.log(Config);
    }
    save() {
        console.log("[Auto Save] uniform Config is saved.");
         fs.writeFile("./Config/uniform.json", JSON.stringify(Config), (err) => {
           if (err) console.error(err)
            });
       }
    AutoSave(){
        setInterval(() => {
          this.save();
        }, setting.UniformConfig * 1000);
    }

}