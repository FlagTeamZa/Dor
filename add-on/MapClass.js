const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const map_embed = require("../GUI/party/map_embed");
const CCc = new CreateCharacterConfig();
const setting = new UserSettingConfig();

module.exports = class MapClass{
    constructor(message,user){
        this.Create(message,user);
    }

    async Create(message,user){
        var embed = map_embed.get();
        var userSetting = setting.get(user);

        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {
          messages.first().edit({content: `<@${message.author.id}>`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{


          });

        });

    }
}