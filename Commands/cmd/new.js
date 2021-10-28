
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
const profile_embed = require("../../GUI/profile_embed");
const CCc = new CreateCharacterConfig();
const Uniform = new UserUniformEvent();
const config = new UserConfigEvent();
const friend = new FriendConfigEvent();
const party = new CreatePartyConfig();
const setting = new UserSettingConfig();
// UserConfigEvent
const value = `${conn.prefix}new`;
module.exports = {
command: value,
muit: false,
connect_msg: `[System] Command ${value} connect.`,
run: async (message) =>{

        if (!config.getDOR_IdbyID(message.author.id)) {
          message.channel.send({content: `<@${message.author.id}>`, embeds: [CreateImg_embed.non()],components: []});
          return;
        }
        var embed = await CreateImg_embed.s();
        console.log(embed);
        message.channel.send({content: `<@${message.author.id}>`, embeds: [embed],components: []}).then(async msg => {
          msg.reactions.removeAll();
          await setting.setPageID(message.author.id,msg.id);
          setTimeout(async() => {
            new ProfileClass(message,message.author.id);
            message.delete();
          }, 1000);
        });
   
       }

}