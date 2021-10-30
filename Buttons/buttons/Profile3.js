
const PartyClass = require("../../add-on/PartyClass");
const userconfig = require("../../Event/Config/UserSettingConfig");
const setting = new userconfig();
// const InvClass = require("../../add-on/InventoryClass");
module.exports = {
name: "Profile3",
run: (i) => {
    var user = i.user.id;
    var userSetting = setting.get(user);
    if (userSetting.pageID === i.message.id) {
        new PartyClass(
            i.message,
            user
        );
    }
}
}