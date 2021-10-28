const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const CreateImg1_embed = require("../GUI/CreateImg1_embed");
const CCc = new CreateCharacterConfig();
// CreateImg_embed
const set = require("../Config/set.json");
const profile_embed = require("../GUI/profile_embed");
const PartyClass = require("./PartyClass");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const createimg = require("../Event/createimg");
const setting = new UserSettingConfig();
module.exports = class ProfileClass{
    constructor(message,user){
        this.Create(message,user);
    }

    async Create(message,user){
        var attachment = await createimg.profile(user);
        var embed = profile_embed.get(attachment,user);
        var userSetting = setting.get(user);
        // console.log(CCc.get("msg",user));

        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {

          messages.first().edit({content: `<@${user}>`,files: [attachment], components: [],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();
            switch (userSetting.Mode) {
              case "emoji":
                msg.react("⚔️");
                
                const filter = (reaction, user) => {
                  return  reaction.emoji.name === '⚔️' && user.id === message.author.id;
                };
                
                const collector = msg.createReactionCollector({ filter, time: 60000 });
                
                collector.on('collect', (reaction, user) => {
                  if (user.id === userSetting.id) {
                      
                      if (reaction.emoji.name === "⚔️") {
                          // this.MouthFilter(message);
                          new PartyClass(message,user.id);
                          msg.reactions.removeAll();
                          collector.stop();
                          console.log(`Collected ${reaction.emoji.name} from ${user.tag} id ${user.id}`);
                          // msg.delete();
                      }
                    }
                    });
                
                collector.on('end', collected => {
                  console.log(`Collected ${collected.size} items`);
                });
              
                
              break;
            
              default:
                break;
            }
              // msg.react("⚔️");
          });

        });
     

    }
}