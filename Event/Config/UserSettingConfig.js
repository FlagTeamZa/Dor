


const Config = require("../../Config/settings.json");
const fs = require("fs");

// const seesion = [];
const setting = require("../../Config/autosave.json");
const seesion = require("../../Config/seesion.json");
const UserConfigEvent = require("./UserConfigEvent");
const FriendConfigEvent = require("./FriendConfigEvent");
const CreatePartyConfig = require("./CreatePartyConfig");
// const UpdateMsgClass = require("../../add-on/UpdateMsgClass");
const Users = new UserConfigEvent();
const Friend = new FriendConfigEvent();
const Party = new CreatePartyConfig();
module.exports = class UserSettingConfig{
  constructor(value = 1){
    if (value !== 1) {
        this.AutoSave();
        console.log("[Auto Save] settings Config start.");
        console.log("[Auto Save] seesion Config start.");
    }
}

reset(){
  var Config = Array();
  var seesion = Array();
  console.log(
    Config,
    seesion,
    "SETTING , Seesion"
  );
  fs.writeFile("./Config/settings.json", JSON.stringify(Config,null,4), (err) => {
    if (err) console.error(err)
     });
     fs.writeFile("./Config/seesion.json", JSON.stringify(seesion,null,4), (err) => {
       if (err) console.error(err)
        });
}

deleteMail(id,value){
  var date1 = Date.now();
  this.updateSeesion();
  for (let i = 0; i < Config.length; i++) {
   if (Config[i].id === id) {
    var mail = Config[i].mail;
    if (typeof mail[value] === 'undefined') {
      return 0;
    }
    
        if (mail[value].target === id) {
          for (let count = 0; count < seesion.length; count++) {
            console.log(seesion);
            if (seesion[count].target === id) {

           this.delmail(seesion[count].target,value);

            var user = seesion[count].user;
            var target = seesion[count].target;
            delete seesion[count];
            this.updateSeesion();
            this.updateMail(id);
            console.log(`deleteMail process ${(Date.now() - date1) / 1000} sec`);
            return {"value": 4,"user":user,"target":target};
            }
           
          }
          
        }

   }
    
  }
 

}

rejectMail(id,value){
  var date1 = Date.now();
  this.updateSeesion();
  for (let i = 0; i < Config.length; i++) {
   if (Config[i].id === id) {
    var mail = Config[i].mail;
    if (typeof mail[value] === 'undefined') {
      return 0;
    }
    switch (mail[value].type) {
      case "add_friend":
        if (mail[value].target === id) {
          for (let count = 0; count < seesion.length; count++) {
            console.log(seesion);
            if (seesion[count].type === "add_friend" && seesion[count].target === id) {

           this.addMail(
            seesion[count].user,
             Friend.Custom(
              seesion[count].user,
              seesion[count].target,
              "system_request_reject_friend"
             )
           );

           this.addMail(
            seesion[count].target,
             Friend.Custom(
              seesion[count].user,
              seesion[count].target,
              "system_reject_friend"
             )
           );

           this.delmail(seesion[count].target,value);

            var user = seesion[count].user;
            var target = seesion[count].target;
            delete seesion[count];
            this.updateSeesion();
            return {"value": 3,"user":user,"target":target};
            }
           
          }
          
        }
        break;

        case "party_invite":
          if (mail[value].target === id) {
            for (let count = 0; count < seesion.length; count++) {
              if (seesion[count].type === "party_invite" && seesion[count].target === id) {
  
             this.addMail(
              seesion[count].user,
               Friend.Custom(
                seesion[count].user,
                seesion[count].target,
                "system_request_reject_invite_party"
               )
             );

             this.addMail(
              seesion[count].target,
               Friend.Custom(
                seesion[count].user,
                seesion[count].target,
                "system_reject_invite_party"
               )
             );

             this.delmail(seesion[count].target,value);

              var user = seesion[count].user;
              var target = seesion[count].target;
              delete seesion[count];
              this.updateSeesion();
              return {"value": 2,"user":user,"target":target};
              }
              
            }
            
          }
          break;
    
      default:
      return 1;
    }

   }
    
  }
  console.log(`rejectMail process ${(Date.now() - date1) / 1000} sec`);

}

    acceptMail(id,value){
      var date1 = Date.now();
      this.updateSeesion();
      for (let i = 0; i < Config.length; i++) {
       if (Config[i].id === id) {
        var mail = Config[i].mail;
        if (typeof mail[value] === 'undefined') {
          return 0;
        }
        switch (mail[value].type) {
          case "add_friend":
            if (mail[value].target === id) {
              for (let count = 0; count < seesion.length; count++) {
                if (seesion[count].type === "add_friend" && seesion[count].target === id) {
               Friend.addFriend(
                seesion[count].user,
                seesion[count].target
               );

               this.addMail(
                seesion[count].user,
                 Friend.Custom(
                  seesion[count].user,
                  seesion[count].target,
                  "system_request_accept_friend"
                 )
               );

               this.addMail(
                seesion[count].target,
                 Friend.Custom(
                  seesion[count].user,
                  seesion[count].target,
                  "system_accept_friend"
                 )
               );

               this.delmail(seesion[count].target,value);

                var user = seesion[count].user;
                var target = seesion[count].target;
                delete seesion[count];
                this.updateSeesion();
                return {"value": 2,"user":user,"target":target};
                }
              }
              
            }
            break;

            case "party_invite":
              if (mail[value].target === id) {
                for (let count = 0; count < seesion.length; count++) {
  
                  if (seesion[count].type == 'party_invite' && seesion[count].target === id) {
                    console.log("true");
                    if (Party.getParty(id)) {
                          return 5;
                     }
                   Party.addParty(
                    seesion[count].user,
                    seesion[count].target
                   );

                 this.addMail(
                  seesion[count].user,
                   Friend.Custom(
                    seesion[count].user,
                    seesion[count].target,
                    "system_request_accept_invite_party"
                   )
                 );


                 this.addMail(
                  seesion[count].target,
                   Friend.Custom(
                    seesion[count].user,
                    seesion[count].target,
                    "system_accept_invite_party"
                   )
                 );

                 this.delmail(seesion[count].target,value);

                  var user = seesion[count].user;
                  var target = seesion[count].target;
                  delete seesion[count];
                  this.updateSeesion();

                  return {"value": 2,"user":user,"target":target};
                  }
                }
                
              }
              break;
        
          default:
          return 1;
        }

       }
        
      }
      console.log(`acceptMail process ${(Date.now() - date1) / 1000} sec`);

    }
    updateSeesion(){
      var date1 = Date.now();
      var newSeesion = [];
      var newSeesionCount = 0;
      for (let i = 0; i < seesion.length; i++) {
        var value = seesion[i] ? true : false;
        if (value) {
          newSeesion[newSeesionCount] = seesion[i];
          newSeesionCount++;
      } 
      }
      if (newSeesion.length > 0) {
        for (let i = 0; i < newSeesion.length; i++) {
          seesion[i] = newSeesion[i];
        }
      }
      console.log(`UpdateSeesion process ${(Date.now() - date1) / 1000} sec`);
    }

    addSeesion(user,target,type){
      var ob = {
        "user": user,
        "target": target,
        "type": type
      }
      seesion.push(ob);
    }

    New(id,msgID){
      var ob = {
        "id": id,
        "page": "profile",
        "pageID": msgID,
        "mail": [],
        "msg": "ไม่มี",
        "Mode": "emoji"
      }
      Config.push(ob);
    }
    async setPageID(id,pageID){
      var date1 = Date.now();
      for (let i = 0; i < Config.length; i++) {
        if (Config[i].id === id) {
          Config[i].pageID = pageID;
          console.log(`setPageID process ${(Date.now() - date1) / 1000} sec`);
          return true;
        }
      }
      return false;
    }
    
    delmail(id,value){
      var date1 = Date.now();
      for (let i = 0; i < Config.length; i++) {
        if (Config[i].id === id) {
          delete Config[i].mail[value];
          this.updateMail(id);
          return;
        }
      }
    }

     updateMail(id){
      var date1 = Date.now();
      var newMail = [];
      var newMailCount = 0;
      for (let i = 0; i < Config.length; i++) {
        if (Config[i].id === id) {
          var mail = Config[i].mail;
          // console.log(mail[0]);
          for (let ma = 0; ma < mail.length; ma++) {
            let value = mail[ma] ? true : false;
            if (value) {
              console.log("ma");
              newMail[newMailCount] = mail[ma];
              newMailCount++;
            }
          }
          
          if (newMail.length > 0) {
            Config[i].mail = newMail;
            // console.log(newMail);
          }
          console.log(`UpdateMail process ${(Date.now() - date1) / 1000} sec`);
          return;
        }
      }



      
    }
    getMail(id){
      var date1 = Date.now();
      for (let i = 0; i < Config.length; i++) {
        if (Config[i].id === id) {
          var mail = Config[i].mail;
          var msg = "";
          var a = "`ตกลง`";
          var b = "`ปฏิเสธ`";
          var c = "`";
          var d = "__";
          var e = "`ลบข้อความ`";
          for (let ma = 0; ma < mail.length; ma++) {
            let l = mail[ma] ? true : false;
            if(!l){
              return "ไม่มี";
            }
            switch (mail[ma].type) {
              
              case "add_friend":
                msg+=`${ma}). ผู้เล่น ${c}${Users.getName(mail[ma].user)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].user)})${d} ได้ขอเป็นเพื่อนกับคุณ\nพิมพ์ __yes ${ma}__ เพื่อ${a} พิมพ์ __no ${ma}__ เพื่อ${b} หรือพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break; 

              case "party_invite":
                msg+=`${ma}). ผู้เล่น ${c}${Users.getName(mail[ma].user)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].user)})${d} ได้ชวนคุณเข้าปาร์ตี้\nพิมพ์ __yes ${ma}__ เพื่อ${a} พิมพ์ __no ${ma}__ เพื่อ${b} หรือพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break;

              case "system_request_invite_party":
                msg+=`${ma}). ระบบได้ส่งคำเชิญปาร์ตี้ให้ผู้เล่น ${c}${Users.getName(mail[ma].target)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].target)})${d} แล้ว\nพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break;
              
              case "system_request_friend":
                msg+=`${ma}). ระบบได้ส่งคำขอเป็นเพื่อนให้ผู้เล่น ${c}${Users.getName(mail[ma].target)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].target)})${d} แล้ว\nพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break; 

              case "system_request_accept_friend":
                msg+=`${ma}). ผู้เล่น ${c}${Users.getName(mail[ma].target)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].target)})${d} ได้รับคำขอเป็นเพื่อนของคุณแล้ว\nพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break;

              case "system_request_accept_invite_party":
                msg+=`${ma}). ผู้เล่น ${c}${Users.getName(mail[ma].target)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].target)})${d} ได้รับคำเชิญปาร์ตี้ของคุณแล้ว\nพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break;

              case "system_accept_friend":
                msg+=`${ma}). คุณได้ยอมรับคำขอเป็นเพื่อนของผู้เล่น ${c}${Users.getName(mail[ma].user)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].user)})${d} แล้ว\nพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break;

              case "system_accept_invite_party":
                msg+=`${ma}). คุณได้ยอมรับชวนปาร์ตี้ของผู้เล่น ${c}${Users.getName(mail[ma].user)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].user)})${d} แล้ว\nพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break;

              case "system_request_reject_friend":
                msg+=`${ma}). ผู้เล่น ${c}${Users.getName(mail[ma].target)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].target)})${d} ได้ปฏิเสธคำขอเป็นเพื่อนของคุณแล้ว\nพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break;

              case "system_reject_friend":
                msg+=`${ma}). คุณได้ปฏิเสธคำขอเป็นเพื่อนของผู้เล่น ${c}${Users.getName(mail[ma].user)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].user)})${d} แล้ว\nพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break;

              case "system_request_reject_invite_party":
                msg+=`${ma}). ผู้เล่น ${c}${Users.getName(mail[ma].target)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].target)})${d} ได้ปฏิเสธคำชวนเข้าปาร์ตี้ของคุณแล้ว\nพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break;

              case "system_reject_invite_party":
                msg+=`${ma}). คุณได้ปฏิเสธคำชวนปาร์ตี้ของผู้เล่น ${c}${Users.getName(mail[ma].user)}${c} ${d}(${Users.getDOR_IdbyID(mail[ma].user)})${d} แล้ว\nพิมพ์ __del ${ma}__ เพื่อ${e}\n\n`;
              break;
            }
          }
          console.log(`getMail process ${(Date.now() - date1) / 1000} sec`);
          return msg;
        }
      }
      return false;
    }
    addMail(id,mail){
      var date1 = Date.now();
      for (let i = 0; i < Config.length; i++) {
        if (Config[i].id === id) {
          console.log(`add Mail process ${(Date.now() - date1) / 1000} sec`);
          Config[i].mail.push(mail);
          // console.log(Config[i].mail);
          return;
        }
      }
      return false;
    }

    getMsg(id){
      var date1 = Date.now();
      this.updateMail(id);
      for (let i = 0; i < Config.length; i++) {
        if (Config[i].id === id) {
          var mail = Config[i].mail;
          var friend = 0;
          var system = 0;
          var party = 0;
          for (let a = 0; a < mail.length; a++) {
            // console.log(mail[a].type);
            let l = mail[a] ? true : false;
            if (!l) {
              return "ไม่มี";
            }
            switch (mail[a].type) {
              
              case "add_friend":
                friend++;
                // console.log(mail[0].type);
              break; 
              case "party_invite":
                party++;
              break;

              case "system_request_invite_party":
              case "system_request_reject_friend":
              case "system_request_accept_friend":
              case "system_accept_friend":
              case "system_request_friend":
              case "system_reject_friend":
                system++;
                // console.log(mail[0].type);
              break; 
            }
          }

          // Config[i].mail.push(mail);
          // console.log(Config);
          console.log(
            friend,
            system,
            party
          );
          var p = party > 0 ? `__คุณมี ${party} คำเชิญปาร์ตี้__` : "";
          var f = friend > 0 ? `__คุณมี ${friend} คำขอเป็นเพื่อน__` : "";
          var s = system > 0 ? `__คุณมี ${system} ข้อความระบบ__` : "";
          var msg = party+friend+system > 0 ? `${p}\n${f}\n${s}` : "ไม่มี";
          // console.log(msg);
          console.log(`get Msg process ${(Date.now() - date1) / 1000} sec`);
          return msg;
        }
      }
      return false;
    }
    get(id){
      var date1 = Date.now();
      for (let i = 0; i < Config.length; i++) {
        if (Config[i].id === id) {
          console.log(`get Settings process ${(Date.now() - date1) / 1000} sec`);
          return Config[i];
        }
      }
      return false;
    }

    save() {
        console.log("[Auto Save] settings Config is saved.");
        console.log("[Auto Save] seesion Config is saved.");
         fs.writeFile("./Config/settings.json", JSON.stringify(Config,null,4), (err) => {
           if (err) console.error(err)
            });
            fs.writeFile("./Config/seesion.json", JSON.stringify(seesion,null,4), (err) => {
              if (err) console.error(err)
               });
       }

    AutoSave(){
        setInterval(() => {
          this.save();
        }, setting.SettingConfig * 1000);
    }

}