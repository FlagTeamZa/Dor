
const ProfileClass = require("../../add-on/ProfileClass");
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const FriendConfigEvent = require("../../Event/Config/FriendConfigEvent");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
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
// UserConfigEvent
const value = `${conn.prefix}delete`;

module.exports = {
command: value,
connect_msg: `[System] Sub_Command ${value} connect.`,
run: (message) => {

        if (!config.getDOR_IdbyID(message.author.id)) {
          message.channel.send({content: `<@${message.author.id}>`, embeds: [CreateImg_embed.non()],components: []});
          return;
        }
        
        var value = message.content.split(" ");
        if (typeof value[1] === 'undefined') {
          message.channel.send({content: `<@${message.author.id}> b.delete <id>`});
          return;
        }
        var a = value[1];
        var b = config.getIDByDOR_ID(a);
        if (!b) {
          message.channel.send("ไม่มีผู้เล่นไอดีนี้");
          return;
        }

        if (!friend.getFriend(message.author.id,b)) {
          message.channel.send({content: `<@${message.author.id}> คุณยังไม่มีมีผู้เล่น ${config.getName(b)} เป็นเพื่อน`});
          return;
        }

        var embed = friend_embed.delete(b);
        var userSetting = setting.get(message.author.id);
      
        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {
 
          messages.first().edit({content: `<@${message.author.id}>`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();
            friend.deleteFriend(message.author.id,b);
            message.delete();
          });
 
        });
        return;

   
       }
}