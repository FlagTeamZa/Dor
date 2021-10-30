
const userconfig = require("../../Event/Config/UserSettingConfig");
const setting = new userconfig();
const InvClass = require("../../add-on/InventoryClass");
module.exports = {
name: "Profile2",
run: async (i) => {
    var user = i.user.id;
    var userSetting = setting.get(user);
    if (userSetting.pageID === i.message.id) {
        new InvClass(i.message,user)
        
    }
}
}