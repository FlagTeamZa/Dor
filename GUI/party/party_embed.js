
const config = require("../../config.json");
const { MessageEmbed, Collector, User } = require("discord.js");
const color = require("../../Config/colors.json");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
// UserConfigEvent
const Users = new UserConfigEvent();
module.exports = {
  
    reject(user,target){
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.red)
      .setTitle('PARTY REJECT')
      .setDescription(`ผู้เล่น ${Users.getName(user)} ได้ปฏิเสธปาร์ตี้ของ ${Users.getName(target)} แล้ว`)
      // .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    accept(user,target){
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.green)
      .setTitle('PARTY ACCEPT')
      .setDescription(`ผู้เล่น ${Users.getName(user)} ได้ยอมรับปาร์ตี้ของ ${Users.getName(target)} แล้ว`)
      // .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    invite(user){
      var a = "`ตกลง`";
      var b = "`ปฏิเสธ`";
      var c = "`";
      var d = "__";
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle('PARTY REQUEST')
      .setDescription(`ผู้เล่น ${c}${Users.getName(user)}${c} ${d}(${Users.getDOR_IdbyID(user)})${d} ได้ชวนคุณเข้าปาร์ตี้\nพิมพ์ __Yes__ เพื่อ${a} พิมพ์ __No__ เพื่อ${b}`)
      // .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    get(party){
      console.log(
        party,
        "aaa"
        );
      var leader = party.head;
      var f = [];
      for (let i = 0; i < party.member.length; i++) {
        let l = leader === party.member[i] ? ":medal:" : "";
        var ob = { 
          name: `ผู้เล่นที่ ${Number(i+1)} ${l}`, 
          value: `Name: ${Users.getName(party.member[i])}\nHP/MaxHP: ${Users.getHP(party.member[i])}/${Users.getMaxHP(party.member[i])}`, 
          inline: true 
        }
        f.push(ob);
      }
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle('PARTY INFO')
      // .setURL('https://discord.js.org/')
      // .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
      .setDescription(`ปาร์ตี้ ${party.id} \nVS\n ${party.target}\n\nb.invite [id] เพื่อชวนผู้เล่นอื่น\nb.leave ออกจากปาร์ตี้(ถ้าคุณเป็นหัวตี้ปาร์ตี้จะถูกยุบ)\nb.map [id map] เพื่อเลือกแมพ\nb.select [id map]\nb.start เพื่อต่อสู้ \n\nb.party-setting-mode emoji | text\n\n`)
      // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .addFields(f)
      // .addField('Inline field title', 'Some value here', true)
      // .setImage('https://i.imgur.com/AfFp7pu.png')
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    }
}