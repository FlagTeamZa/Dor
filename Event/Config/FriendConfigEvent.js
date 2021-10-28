


const Config = require("../../Config/friend.json");
const fs = require("fs");

const seesion = [];
const setting = require("../../Config/autosave.json");
// const Type = require("../../Config/systemType.json");
module.exports = class FriendConfigEvent{
  constructor(value = 1){
    if (value !== 1) {
        this.AutoSave();
        console.log("[Auto Save] Friends Config start.");
    }
}
    // Seesion(user,target){
    //   seesion.push({"user": user,"target": target});
    // }
    reset(){
      var Config = Array();
      console.log(
        Config,
        "Friend"
        );
        fs.writeFile("./Config/friend.json", JSON.stringify(Config,null,4), (err) => {
          if (err) console.error(err)
           });
    }

    getSeesion(user){
      for (let i = 0; i < seesion.length; i++) {
        if (seesion[i].target === user) {
            return seesion[i].user;
        }
      }
      return false;
    }

    addFriend(user,target){
    
      Config[user].friends.push(target);
      Config[target].friends.push(user);
      console.log(Config);
    }

    deleteFriend(user,target){
      
     delete Config[user].friends[Config[user].friends.indexOf(target)];
     delete Config[target].friends[Config[target].friends.indexOf(user)];
      // console.log(Config);
      this.updateFriend(user);
      this.updateFriend(target);
    }

    updateFriend(id){
      var date1 = Date.now();
      var newFriend = [];
      var newFriendCount = 0;
      let friend = Config[id].friends;
      for (let i = 0; i < friend.length; i++) {
          
            let value = friend[i] ? true : false;
            if (value) {
              newFriend[newFriendCount] = friend[i];
              newFriendCount++;
          }
          
          if (newFriend.length > 0) {
            Config[id].friends = newFriend;
          }
          console.log(`updateFriend process ${(Date.now() - date1) / 1000} sec`);
          return;
      }
    }

    getMail(user,target){
      var ob = {
        "type": "add_friend",
        "user": user,
        "target": target
      };
      seesion.push(ob);
      return ob;
    }

    getRequestAccept(user,target){
      var ob = {
        "type": "system_request_accept_friend",
        "user": user,
        "target": target
      };
      // seesion.push(ob);
      return ob;
    }
    Custom(user,target,type){
      var ob = {
        "type": type,
        "user": user,
        "target": target
      };
      return ob;
    }
    getAccept(user,target){
      var ob = {
        "type": "system_accept_friend",
        "user": user,
        "target": target
      };
      // seesion.push(ob);
      return ob;
    }

    getUserMail(user,target){
      var ob = {
        "type": "system_request_friend",
        "user": user,
        "target": target
      };
      seesion.push(ob);
      return ob;
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
    Friend(user){
      var arg = [];
      var a = 0;
     for (let i = 0; i < Config[user].friends.length; i++) {
      if (Config[user].friends[i] !== null && typeof Config[user].friends[i] !== 'undefined') {
        arg[a] = Config[user].friends[i];
        a++;
      }
     }
     Config[user].friends = arg;
     return Config[user].friends;
    }
    getFriend(user,target){
      if (Config[user].friends.indexOf(target) !== -1) {
        return Config[user].friends;
      }
      return false;
    }
    New(id){
      Config[id] = {
          "id": id,
          "friends": [],
      }
      console.log(Config);
  }

    save() {
        console.log("[Auto Save] Friends Config is saved.");
         fs.writeFile("./Config/friend.json", JSON.stringify(Config), (err) => {
           if (err) console.error(err)
            });
       }
    AutoSave(){
        setInterval(() => {
          this.save();
        }, setting.FriendConfig * 1000);
    }

}