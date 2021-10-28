const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const createimg = require("../Event/createimg");
const ProfileClass = require("./ProfileClass");
const CCc = new CreateCharacterConfig();
const setting = new UserSettingConfig();
// ProfileClass
module.exports = class UpdateMsgClass{
    constructor(message,user){
        this.Create(message,user); 
    }

    async Create(message,user){
        
        var userSetting = setting.get(user);

            switch (userSetting.page) {
                case "profile":
                new ProfileClass(message,user);
                break;
            
            }

    }

}