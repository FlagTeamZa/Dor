const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const CreateImgButton1 = require("../GUI/Buttons/CreateImgButton1");
const CreateImgButton2 = require("../GUI/Buttons/CreateImgButton2");
const CreateImgButton3 = require("../GUI/Buttons/CreateImgButton3");
const CreateImg1_embed = require("../GUI/CreateImg1_embed");
const CCc = new CreateCharacterConfig();
module.exports = class ButtonsClass{
    constructor(message,attachment,user){
        this.Create(message,attachment,user);
    }
   
    async Create(message,attachment,user){
        var embed = CreateImg1_embed.get(attachment);
        var row1 = CreateImgButton1.get();
        var row2 = CreateImgButton2.get();
        var row3 = CreateImgButton3.get();
        message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
        .then(messages => {
          
          messages.first().edit({content: `<@${message.author.id}>`,files: [attachment],components: [row1,row2,row3], embeds: [embed]}).then(msg =>{
              
          });

        });

    }
}