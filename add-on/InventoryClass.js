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
const Inventory_embed = require("../GUI/Items/Inventory_embed");
const main_ = new main();

module.exports = class InventoryClass{
    constructor(message,user){
        this.Create(message,user);
    }

    async Create(message,user){
        
        var userSetting = setting.get(user);
        var embed = Inventory_embed.Inv(user);
        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {

          messages.first().edit({content: `<@${user}>`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();
           
      
          });

        });
     




  }
}