
const userconfig = require("../../Event/Config/UserSettingConfig");
const setting = new userconfig();

module.exports = {
name: "Profile1",
run: (i) => {
    var user = i.user.id;
    var userSetting = setting.get(user);
    if (userSetting.pageID === i.message.id) {
     
        
    }
}
}