
const PartyClass = require("../../add-on/PartyClass");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const userconfig = require("../../Event/Config/UserSettingConfig");
const setting = new userconfig();
// const InvClass = require("../../add-on/InventoryClass");
const Party = new CreatePartyConfig();
module.exports = {
name: "Profile3",
run: async (i) => {
    var user = i.user.id;
    var userSetting = setting.get(user);
    if (userSetting.pageID === i.message.id) {
        Party.set(
            user,
            "msgID",
            i.message.id
        );
        new PartyClass(
            i.message,
            user
        );
    }
}
}