const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const CreateImg1_embed = require("../GUI/CreateImg1_embed");
const CCc = new CreateCharacterConfig();
// CreateImg_embed
const set = require("../Config/set.json");
const profile_embed = require("../GUI/profile_embed");
const PartyClass = require("./PartyClass");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const createimg = require("../Event/createimg");
const buttons = require("../GUI/Buttons/ProfileButtons");
const setting = new UserSettingConfig();

module.exports = class ProfileClass{
    constructor(message,user){
        this.Create(message,user);
    }

    async Create(message,user){
        var attachment = await createimg.profile(user);
        var embed = profile_embed.get(attachment,user);
        var userSetting = setting.get(user);
        // console.log(CCc.get("msg",user));
        var row = buttons.get(user);
        message.channel.messages.fetch({around: userSetting.pageID, limit: 1})
        .then(messages => {

          messages.first().edit({content: `<@${user}>`,files: [attachment], components: [row],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();
          });

        });
     

    }
}