
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const CCc = new CreateCharacterConfig();
const Canvas = require("canvas");
const CreateImg_embed = require("../../GUI/CreateImg_embed");
const { MessageAttachment,MessageEmbed } = require("discord.js");
const createimg = require("../../Event/createimg");
const ReactionClass = require("../../add-on/ReactionClass");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
// UserConfigEvent
const Users = new UserConfigEvent();
const value = `${conn.prefix}create`;
module.exports = {
command: value,
muit: false,
connect_msg: `[System] Command ${value} connect.`,
  run: async (message) => {

    var user = message.author.id;
    if (Users.getDOR_IdbyID(user)) {
      message.channel.send({content: `<@${user}>`, embeds: [CreateImg_embed.id()],components: []});
      return;
    }
    var embed = CreateImg_embed.get();
    
    message.channel.send({content: `<@${user}>`, embeds: [embed],components: []}).then(async msg => {
      // console.log("test");
      CCc.set("msg",user,msg.id);
      CCc.set("messages",user,user);
      CCc.set("createmode",user,"emoji");
      // console.log(CCc.get("createmode",user));
      CCc.set("head",user,0);
      CCc.set("shirt",user,0);
      CCc.set("trousers",user,0);
      CCc.set("shoe",user,0);
      CCc.set("color",user,0);
      CCc.set("eyes",user,0);
      CCc.set("mouth",user,0);
      CCc.set("gender",user,"b");
      CCc.set("job",user,"s");
      var date1 = Date.now();
      var attachment = await createimg.create(user);
      new ReactionClass(message,attachment,user);
      message.delete();
      message.channel.send(`ใช้เวลาประมวณผลทั้งหมด ${(Date.now() - date1) / 1000} วินาที`);
    });

  }
  
}