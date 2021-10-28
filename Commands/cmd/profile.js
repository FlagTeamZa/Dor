
const AuthorProfileClass = require("../../add-on/AuthorProfileClass");
const ProfileClass = require("../../add-on/ProfileClass");
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
const UserSettingConfig = require("../../Event/Config/UserSettingConfig");
const createimg = require("../../Event/createimg");
const CreateImg2_embed = require("../../GUI/CreateImg2_embed");
const CreateImg_embed = require("../../GUI/CreateImg_embed");
// CreateCharacterConfig
const CCc = new CreateCharacterConfig();
const config = new UserConfigEvent();
const value = `${conn.prefix}profile`;
const setting = new UserSettingConfig();
module.exports = {
command: value,
muit: true,
connect_msg: `[System] Command ${value} connect.`,
run: async (message) => {

        if (!config.getDOR_IdbyID(message.author.id)) {
          message.channel.send({content: `<@${message.author.id}>`, embeds: [CreateImg_embed.non()],components: []});
          return;
        }
        
        var value = message.content.split(" ");
        var user = message.author.id;
        if (typeof value[1] === 'undefined') {
          var b = user;
          // console.log("a");
        }else{
          var a = value[1]; 
          var b = config.getIDByDOR_ID(a);
        }

        var userSetting = setting.get(user);

        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(async messages => {
        //   // console.log(embed);
        var embed = await CreateImg_embed.s();
        messages.first().edit({content: `<@${message.author.id}>`,files: [],attachments: [], components: [], embeds: [embed]}).then(async msg => {
          msg.reactions.removeAll();
          setTimeout(async() => {
            if (message.author.id === b) {
              new ProfileClass(message,b);
              message.delete(); 
            }else{
              new AuthorProfileClass(message,b);
              message.delete(); 
            }

          }, 100);
        });

      });
    }
}