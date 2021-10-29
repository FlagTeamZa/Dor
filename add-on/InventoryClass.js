
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const InventoryButtons = require("../GUI/Buttons/InventoryButtons");
const setting = new UserSettingConfig();
const Inventory_embed = require("../GUI/Items/Inventory_embed");

module.exports = class InventoryClass{
    constructor(message,user){
        this.Create(message,user);
    }

    async Create(message,user){
        
        var userSetting = setting.get(user);
        var embed = Inventory_embed.Inv(user);
        var row = InventoryButtons.get();
        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {

          messages.first().edit({content: `<@${user}>`,files: [], components: [row],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();
           
      
          });

        });
     




  }
}