
const config = require("../config.json");
const { MessageEmbed, Collector, User } = require("discord.js");
const color = require("../Config/colors.json");
const UserConfigEvent = require("../Event/Config/UserConfigEvent");
const FriendConfigEvent = require("../Event/Config/FriendConfigEvent");
// const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
// UserConfigEvent
// UserConfigEvent
const Friend = new FriendConfigEvent();
const Users = new UserConfigEvent();
const c = "`";
module.exports = {
    list(user){
    //  var friend = Friend.Friend(user)[0] ? Friend.Friend(user) : `คุณยังไม่มีเพื่อน`;
    var friend = Friend.Friend(user);
     var f = [];
     if (typeof friend[0] === 'undefined') {
       var ob = {
        name: `คุณไม่มีเพื่อน`, 
        value: `เพิ่มเพื่อนได้โดยการพิมพ์ b.add <id>`, 
        inline: true 
       }
        f.push(ob);
     }else{
      for (let i = 0; i < friend.length; i++) {
        var ob = { 
          name: `${Users.getName(friend[i])} (ID: ${Users.getDOR_IdbyID(friend[i])})`, 
          value: `Lv: ${Users.getLevel(friend[i])}\nHP/MaxHP: ${Users.getHP(friend[i])}/${Users.getMaxHP(friend[i])}`, 
          inline: true 
        }
        f.push(ob);
      }
     }
    //  console.log(friend);
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle('FRIEND LIST')
      .setDescription(`b.delete <id> เพื่อลบเพื่อน`)
      .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    delete(target){
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.red)
      .setTitle('FRIEND DELETE')
      .setDescription(`ลบผู้เล่น ${Users.getName(target)} (${Users.getDOR_IdbyID(target)}) ออกจากดเพื่อนแล้ว`)
      // .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    reject(user,target){
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.red)
      .setTitle('FRIEND REJECT')
      .setDescription(`ผู้เล่น ${c}${Users.getName(user)}${c} ได้ปฏิเสธคำขอเป็นเพื่อนของ ${c}${Users.getName(target)}${c} แล้ว`)
      // .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    accept(user,target){
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.green)
      .setTitle('FRIEND ACCEPT')
      .setDescription(`ผู้เล่น ${c}${Users.getName(user)}${c} ได้ยอมรับคำขอเป็นเพื่อนของ ${c}${Users.getName(target)}${c} แล้ว`)
      // .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    invite(user){
      var a = "`ตกลง`";
      var b = "`ปฏิเสธ`";
      var d = "__";
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle('ADD FRIEND')
      .setDescription(`ผู้เล่น ${c}${Users.getName(user)}${c} ${d}(${Users.getDOR_IdbyID(user)})${d} ได้ขอเป็นเพื่อนกับคุณ\nพิมพ์ __Yes__ เพื่อ${a} พิมพ์ __No__ เพื่อ${b}`)
      // .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    
}