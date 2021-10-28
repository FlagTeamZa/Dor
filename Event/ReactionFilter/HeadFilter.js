const CreateImg_embed = require("../../GUI/CreateImg_embed");
const CreateCharacterConfig = require("../Config/CreateCharacterConfig");
const CCc = new CreateCharacterConfig();
// CreateCharacterConfig

module.exports = (message) =>{
    var embed = CreateImg_embed.get();
    var user = message.author.id;
    message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
    .then(messages => {
      
      messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []})

    });
}