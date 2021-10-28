const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const CreateImg1_embed = require("../GUI/CreateImg1_embed");
const CCc = new CreateCharacterConfig();
const set = require("../Config/set.json");
const SkillButtons = require("../GUI/Buttons/SkillButtons");
const PartyClass = require("./PartyClass");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const createimg = require("../Event/createimg");
const setting = new UserSettingConfig();
const CreatePartyConfig = require("../Event/Config/CreatePartyConfig");
const Party = new CreatePartyConfig();
const main = require("../battle/main");
const main_ = new main();

module.exports = class BattleClass{
    constructor(message,user,embed){
        this.Create(message,user,embed);
    }

    isParty(id,head){
      var p = Party.getParty(id);
      if (p.head === head) {
        return true;
      }
      return false;
    }
    async Create(message,user,embed){
        var p = Party.getParty(user);
        var me = "";
        for (let i = 0; i < p.member.length; i++) {
         me+=`<@${p.member[i]}>`;
        }
        
        var userSetting = setting.get(user);
        var partyPage = p.msgID ? p.msgID : userSetting.pageID;
        var row = SkillButtons.get();
        message.channel.messages.fetch({around: partyPage, limit: 1})
        .then(messages => {

          messages.first().edit({content: `${me}`,files: [], components: [row],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();
           
      
          });

        });
     

    }

    async Enemy(message,user,embed){
      var p = Party.getParty(user);
      var me = "";
      for (let i = 0; i < p.member.length; i++) {
       me+=`<@${p.member[i]}>`;
      }
      var userSetting = setting.get(user);
      var partyPage = p.msgID ? p.msgID : userSetting.pageID;
      message.channel.messages.fetch({around: partyPage, limit: 1})
      .then(messages => {

        messages.first().edit({content: `${me}`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{
          msg.reactions.removeAll();

          setTimeout(() => {
            main_.addTurn(
              user
            );
            this.Create(
              message,
              user,
              main_.PlayerEmbed(user)
              );
          }, 3000);
          // msg.react("1️⃣");
          // msg.react("2️⃣");
          // msg.react("3️⃣");
          // msg.react("🇳");
          // // :regional_indicator_n: 
          // const filter = (reaction, user) => {
          //   return  reaction.emoji.name === '1️⃣' && user.id === message.author.id ||
          //           reaction.emoji.name === '2️⃣' && user.id === message.author.id ||
          //           reaction.emoji.name === '3️⃣' && user.id === message.author.id ||                      
          //           reaction.emoji.name === '🇳' && user.id === message.author.id 
          // };

          // const collector = msg.createReactionCollector({ filter, time: 60000 });

          // collector.on('collect', (reaction, user) => {
          //   if (p.member.indexOf(user.id) !== -1) {
          //     switch (reaction.emoji.name) {
          //       case "1️⃣":
          //         main_.UseSkill(
          //           user.id,
          //           0
          //         );
          //       break;
              
          //       default:
          //         break;
          //     }
          //   }
          // });
        });

      });
   

  }
}