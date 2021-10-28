const conn = require("../../config.json");
const UserSettingConfig = require("../../Event/Config/UserSettingConfig");
const friend_embed = require("../../GUI/friend_embed");
const setting = new UserSettingConfig();
const value = `${conn.prefix}list`;
module.exports = {
command: value,
muit: true,
connect_msg: `[System] Command ${value} connect.`,
run: async (message) =>{
       var embed = friend_embed.list(message.author.id);
       var userSetting = setting.get(message.author.id);
     
       message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
       .then(messages => {

         messages.first().edit({content: `<@${message.author.id}>`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{
           msg.reactions.removeAll();
           message.delete();
             // msg.react("⚔️");
         });

       });
       return;
       }
}