
const InventoryClass = require("../../add-on/InventoryClass");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const userconfig = require("../../Event/Config/UserSettingConfig");
const MapDropdown = require("../../GUI/Dropdowns/MapDropdown");
const setting = new userconfig();
const Party = new CreatePartyConfig();
module.exports = {
name: "Party2",
run: async (i) => {
    var user = i.user.id;
    // var userSetting = setting.get(user);
    var p = Party.getParty(user);
    var row = MapDropdown.get();
    if (p.msgID === i.message.id) {
 
        i.message.channel.send({content: `<@${user}>`,files: [], components: [row],attachments: [], embeds: []}).then(msg => {
        Party.set(
            user,
            "msgID",
            msg.id
        );
        });
        i.message.delete();
    }
}
}