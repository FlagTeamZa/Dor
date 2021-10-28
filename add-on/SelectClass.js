const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const map_embed = require("../GUI/party/map_embed");
const CCc = new CreateCharacterConfig();
// UserSettingConfig
const setting = new UserSettingConfig();

module.exports = class SelectClass{
    constructor(message,user,map){
        this.Create(message,user,map);
    }

    async Create(message,user,map){
        var embed = map_embed.select(map);
        var userSetting = setting.get(user);

        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {
          messages.first().edit({content: `<@${message.author.id}>`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{


          });

        });

    }
}