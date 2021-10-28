const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const createimg = require("../Event/createimg");
const ProfileClass = require("./ProfileClass");
const CCc = new CreateCharacterConfig();
const setting = new UserSettingConfig();
const Mail_embed = require("../GUI/Mail_embed");
module.exports = class MailClass{
    constructor(message,attachment = null,user,type = null){
        this.Create(message,attachment,user,type);
    }

    async Create(message,attachment,user,type){
        var userSetting = setting.get(user);
        var embed = Mail_embed.get(user);
        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {
          messages.first().edit({content: `<@${user}>`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();
          });

        });

    }

}