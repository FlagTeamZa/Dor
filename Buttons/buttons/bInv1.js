
// const ProfileClass = require("../../add-on/ProfileClass");
const InventoryClass = require("../../add-on/InventoryClass");
const userconfig = require("../../Event/Config/UserSettingConfig");
const setting = new userconfig();

module.exports = {
name: "bInv1",
run: (i) => {
    var user = i.user.id;
    var userSetting = setting.get(user);
    if (userSetting.pageID === i.message.id) {
    //    new ProfileClass(i.message,user);
    new InventoryClass().Weapon(i.message,user);
    }
}
}