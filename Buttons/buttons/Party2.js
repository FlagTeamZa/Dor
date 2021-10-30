
const InventoryClass = require("../../add-on/InventoryClass");
const userconfig = require("../../Event/Config/UserSettingConfig");
const MapDropdown = require("../../GUI/Dropdowns/MapDropdown");
const setting = new userconfig();

module.exports = {
name: "Party2",
run: async (i) => {
    var user = i.user.id;
    var userSetting = setting.get(user);
    if (userSetting.pageID === i.message.id) {
        
        i.message.send({content: `<@${user}>`,files: [], components: [],attachments: [], embeds: []});
        i.message.delete();
    }
}
}