
const ProfileClass = require("../../add-on/ProfileClass");
const UpdateMsgClass = require("../../add-on/UpdateMsgClass");
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const FriendConfigEvent = require("../../Event/Config/FriendConfigEvent");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
const UserSettingConfig = require("../../Event/Config/UserSettingConfig");
const UserUniformEvent = require("../../Event/Config/UserUniformEvent");
const createimg = require("../../Event/createimg");
const CreateImg2_embed = require("../../GUI/CreateImg2_embed");
const CreateImg_embed = require("../../GUI/CreateImg_embed");
const friend_embed = require("../../GUI/friend_embed");
const CCc = new CreateCharacterConfig();
const Uniform = new UserUniformEvent();
const config = new UserConfigEvent();
const friend = new FriendConfigEvent();
const party = new CreatePartyConfig();
const setting = new UserSettingConfig();
// UserConfigEvent
const value = `${conn.prefix}add`;
module.exports = {
command: value,
muit: true,
connect_msg: `[System] Command ${value} connect.`,
run: async (message) =>{

        if (!config.getDOR_IdbyID(message.author.id)) {
          message.channel.send({content: `<@${message.author.id}>`, embeds: [CreateImg_embed.non()],components: []});
          return;
        }
        
        var value = message.content.split(" ");
        if (typeof value[1] === 'undefined') {
          message.channel.send({content: `<@${message.author.id}> b.add <id>`});
          return;
        }
        var a = value[1];
        var b = config.getIDByDOR_ID(a);
        if (!b) {
          message.channel.send("ไม่มีผู้เล่นไอดีนี้");
          return;
        }
        
        if (friend.getFriend(message.author.id,b)) {
          message.channel.send({content: `<@${message.author.id}> คุณมีผู้เล่น ${config.getName(b)} เป็นเพื่อนอยู่แล้ว`});
          return;
        }

        new UpdateMsgClass(message,b);
        new UpdateMsgClass(message,message.author.id);
        setting.addSeesion(
          message.author.id,
          b,
          "add_friend"
        );
        setting.addMail(b,friend.Custom(
          message.author.id,
          b,
          "add_friend"
        ));

        setting.addMail(message.author.id,friend.Custom(
          message.author.id,
          b,
          "system_request_friend"
          ));
        
          message.delete();
       }

}