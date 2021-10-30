const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const CreateImg1_embed = require("../GUI/CreateImg1_embed");
const CCc = new CreateCharacterConfig();
const set = require("../Config/set.json");
const party_embed = require("../GUI/party/party_embed");
const CreatePartyConfig = require("../Event/Config/CreatePartyConfig");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const MapClass = require("./MapClass");
const PartyButtons = require("../GUI/Buttons/PartyButtons");
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
          Party.create(user);
        }

        var p = Party.getParty(user);
        var embed = party_embed.get(p);
        var me = "";
        
        for (let i = 0; i < p.member.length; i++) {
         me+=`<@${p.member[i]}>`;
        }
        var userSetting = setting.get(user);
        var row = PartyButtons.get(user);

        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {
          // attachment
          messages.first().edit({content: `${me}`,files: [], components: [row],attachments: [], embeds: [embed]}).then(msg =>{
  
        });
      });
    }
}