const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const CreateImg1_embed = require("../GUI/CreateImg1_embed");
const CCc = new CreateCharacterConfig();
// CreateImg_embed
const set = require("../Config/set.json");
const party_embed = require("../GUI/party/party_embed");
const CreatePartyConfig = require("../Event/Config/CreatePartyConfig");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const MapClass = require("./MapClass");
const setting = new UserSettingConfig();
const Party = new CreatePartyConfig();
module.exports = class PartyClass{
    constructor(message,user){
        this.Create(message,user);
    }

    async Create(message,user){
      var p = Party.getParty(user);
      // console.log(p);
        if (!p) {
          Party.create(message);
        }

        var p = Party.getParty(user);
        var embed = party_embed.get(p);
        var me = "";
        
        for (let i = 0; i < p.member.length; i++) {
         me+=`<@${p.member[i]}>`;
        }
        var userSetting = setting.get(message.author.id);
        // console.log(CCc.get("msg",user));

        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {
          // attachment
          messages.first().edit({content: `${me}`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{
              msg.react("🗺️");
              const filter = (reaction, user) => {
                return reaction.emoji.name === '🗺️' && user.id === message.author.id;
              };
              
              const collector = msg.createReactionCollector({ filter, time: 60000 });
              
              collector.on('collect', (reaction, user) => {
                if (user.id === userSetting.id) {
                    
                    if (reaction.emoji.name === "🗺️") {
                        new MapClass(message,user.id);
                        msg.reactions.removeAll();
                        collector.stop();
                        console.log(`Collected ${reaction.emoji.name} from ${user.tag} id ${user.id}`);
                    }
                  }
                });                  

              
              collector.on('end', collected => {
                console.log(`Collected ${collected.size} items`);
              });

          });

        });

    }
}