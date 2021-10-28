


const Config = require("../../Config/economy.json");
const fs = require("fs");
const setting = require("../../Config/autosave.json");


module.exports = class UserEconomyConfig{
  constructor(value = 1){
    if (value !== 1) {
        this.AutoSave();
        console.log("[Auto Save] Economy Config start.");
    }
}
    reset(){
     var Config = Object();
      console.log(
        Config,
        "Economy"
      );
      fs.writeFile("./Config/economy.json", JSON.stringify(Config,null,4), (err) => {
        if (err) console.error(err)
         });
    }

    addMoney(id,value){
      Config[id].money = Config[id].money + value;
    }
    getFormatMoney(id){
      return this.formatMoney(Config[id].money);
    }

    formatMoney(inum){
      var s_inum=new String(inum);
      var num2=s_inum.split(".");
      var n_inum="";  
      if(num2[0]!=undefined){
          var l_inum=num2[0].length;  
          for(let i=0;i<l_inum;i++){  
              if(parseInt(l_inum-i)%3==0){  
                  if(i==0){  
                      n_inum+=s_inum.charAt(i);         
                  }else{  
                      n_inum+=","+s_inum.charAt(i);         
                  }     
              }else{  
                  n_inum+=s_inum.charAt(i);  
              }  
          }  
      }else{
          n_inum=inum;
      }
      if(num2[1]!=undefined){
          n_inum+="."+num2[1];
      }
      return n_inum;
  }
   
    New(id){
      Config[id] = {
        "money": 0,
        "cash": 0,
        "bank": 0
      }
    }
    save() {
        console.log("[Auto Save] economy Config is saved.");
         fs.writeFile("./Config/economy.json", JSON.stringify(Config,null,4), (err) => {
           if (err) console.error(err)
            });
       }
    AutoSave(){
        setInterval(() => {
          this.save();
        }, setting.EconomyConfig * 1000);
    }

}