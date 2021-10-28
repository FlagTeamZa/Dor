const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const CreateImg1_embed = require("../GUI/CreateImg1_embed");
const CCc = new CreateCharacterConfig();
// CreateImg_embed
const set = require("../Config/set.json");
const SkillButtons = require("../GUI/Buttons/SkillButtons");
const PartyClass = require("./PartyClass");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const createimg = require("../Event/createimg");
const setting = new UserSettingConfig();
const CreatePartyConfig = require("../Event/Config/CreatePartyConfig");
const Party = new CreatePartyConfig();
const main = require("../battle/main");
const PlayerBattleClass = require("./PlayerBattleClass");
const main_ = new main();

module.exports = class EnemyBattleClass{
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

          messages.first().edit({content: `${me}`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();

            // setTimeout(() => {
            //   new PlayerBattleClass(
            //     message,
            //     user,
            //     main_.PlayerEmbed(user)
            //   );
            // }, 5000);
      
          });

        });
     

    }

  

   

  }