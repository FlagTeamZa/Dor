const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const CreateImg1_embed = require("../GUI/CreateImg1_embed");
const CCc = new CreateCharacterConfig();
const set = require("../Config/set.json");
const profile_embed = require("../GUI/profile_embed");
const PartyClass = require("./PartyClass");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const createimg = require("../Event/createimg");
const setting = new UserSettingConfig();
module.exports = class AuthorProfileClass{
    constructor(message,user){
        this.Create(message,user);
    }

    async Create(message,user){
        var attachment = await createimg.profile(user);
        var embed = profile_embed.author(attachment,user);
        var userSetting = setting.get(message.author.id);

        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {

          messages.first().edit({content: `<@${user}>`,files: [attachment], components: [],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();
          });

        });
     

    }
}