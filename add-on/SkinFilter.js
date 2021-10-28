

const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");

const createimg = require("../Event/createimg");
const CreateImg_embed = require("../GUI/CreateImg_embed");
const ReactionClass = require("./ReactionClass");

const CCc = new CreateCharacterConfig();


module.exports = class SkinFilter{
    constructor(message){
        this.get(message);
    }

    async get(message){
        var embed = CreateImg_embed.get();
        var user = message.author.id;
        message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
        .then(messages => {
          
          messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []})
    
        //   createimg
        // ReactionCmd
          if (CCc.get("gender",user) === "b") {
            CCc.set("gender",user,"g");
          }else{
            CCc.set("gender",user,"b");
          }
          setTimeout(async() => {
            // console.log();
            var attachment = await createimg.create(
                                            CCc.get("head",user),
                                            CCc.get("shirt",user),
                                            CCc.get("trousers",user),
                                            CCc.get("shoe",user),
                                            CCc.get("color",user),
                                            CCc.get("eyes",user),
                                            CCc.get("mouth",user),
                                            CCc.get("gender",user),
                                            user
                                            );
            // console.log(CCc.get("msg",message.author.id));
    
            new ReactionClass(message,attachment,user);
          }, 1000);
        });
        
    }
}