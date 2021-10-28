const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
const createimg = require("../Event/createimg");
// const SkinFilter = require("../Items/SkinFilter");
const CreateImg1_embed = require("../GUI/CreateImg1_embed");
const CreateImg_embed = require("../GUI/CreateImg_embed");
// createimg
// const SkinFilter = require("../Event/ReactionFilter/SkinFilter");
// Ski
// const SkinFilter = require("./SkinFilter");
// SkinFilter
// const SkinFilter = require("../Event/ReactionFilter/SkinFilter");
// SkinFilter
// SkinFilter
// CreateCharacterConfig
const CCc = new CreateCharacterConfig();
// CreateImg_embed
const set = require("../Config/set.json");
module.exports = class ReactionClass{
    constructor(message,attachment,user){
        this.Create(message,attachment,user);
    }
    async SkinFilter(message){
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
                var attachment = await createimg.create(user);
                // console.log(CCc.get("msg",message.author.id));
        
                this.Create(message,attachment,user);
              }, 1000);
            });
    }
    async ColorFilter(message){
        var embed = CreateImg_embed.get();
        var user = message.author.id;
        message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
        .then(messages => {
          
          messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []})
            
        //   createimg
        // ReactionCmd
            var maxcolor = set.maxcolor;
          if (CCc.get("color",user) !== maxcolor) {
            CCc.set("color",user,CCc.get("color",user)+1);
          }else{
            CCc.set("color",user,0);
          }
          setTimeout(async() => {
            // console.log();
            var attachment = await createimg.create(user);
            // console.log(CCc.get("msg",message.author.id));
    
            this.Create(message,attachment,user);
          }, 1000);
        });
}

async HeadFilter(message){
    var embed = CreateImg_embed.get();
    var user = message.author.id;
    message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
    .then(messages => {
      
      messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []})
        
    //   createimg
    // ReactionCmd
        var maxhead = set.maxhead;
      if (CCc.get("head",user) !== maxhead) {
        CCc.set("head",user,CCc.get("head",user)+1);
      }else{
        CCc.set("head",user,0);
      }
      setTimeout(async() => {
        var attachment = await createimg.create(user);

        this.Create(message,attachment,user);
      }, 1000);
    });
}

async ShirtFilter(message){
    var embed = CreateImg_embed.get();
    var user = message.author.id;
    message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
    .then(messages => {
      
      messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []})
        
    //   createimg
    // ReactionCmd
        var shirtmax = set.maxshirt;
      if (CCc.get("shirt",user) !== shirtmax) {
        CCc.set("shirt",user,CCc.get("shirt",user)+1);
      }else{
        CCc.set("shirt",user,0);
      }
      setTimeout(async() => {
        var attachment = await createimg.create(user);;

        this.Create(message,attachment,user);
      }, 1000);
    });
}

async TrousersFilter(message){
    var embed = CreateImg_embed.get();
    var user = message.author.id;
    message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
    .then(messages => {
      
      messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []})
        
    //   createimg
    // ReactionCmd
        var trousersmax = set.maxtrousers;
      if (CCc.get("trousers",user) !== trousersmax) {
        CCc.set("trousers",user,CCc.get("trousers",user)+1);
      }else{
        CCc.set("trousers",user,0);
      }
      setTimeout(async() => {
        // console.log();
        var attachment = await createimg.create(user);
        // console.log(CCc.get("msg",message.author.id));

        this.Create(message,attachment,user);
      }, 1000);
    });
}
async EyesFilter(message){
    var embed = CreateImg_embed.get();
    var user = message.author.id;
    message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
    .then(messages => {
      
      messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []})
        
    //   createimg
    // ReactionCmd
        var eyesmax = set.maxeyes;
      if (CCc.get("eyes",user) !== eyesmax) {
        CCc.set("eyes",user,CCc.get("eyes",user)+1);
      }else{
        CCc.set("eyes",user,0);
      }
      setTimeout(async() => {
        // console.log();
        var attachment = await createimg.create(user);
        // console.log(CCc.get("msg",message.author.id));

        this.Create(message,attachment,user);
      }, 1000);
    });
}

async MouthFilter(message){
    var embed = CreateImg_embed.get();
    var user = message.author.id;
    message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
    .then(messages => {
      
      messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []})
        
    //   createimg
    // ReactionCmd
        var mouthsmax = set.maxmouths;
      if (CCc.get("mouth",user) !== mouthsmax) {
        CCc.set("mouth",user,CCc.get("mouth",user)+1);
      }else{
        CCc.set("mouth",user,0);
      }
      setTimeout(async() => {
        // console.log();
        var attachment = await createimg.create(user);
        // console.log(CCc.get("msg",message.author.id));

        this.Create(message,attachment,user);
      }, 1000);
    });
}

    async Create(message,attachment,user){
        var embed = CreateImg1_embed.get(attachment);
        message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
        .then(messages => {
          
          messages.first().edit({content: `<@${message.author.id}>`,files: [attachment],components: [], embeds: [embed]}).then(msg =>{
              msg.react("👒")
              msg.react("👀");
              msg.react("👄");
              msg.react("👕");
              msg.react("👖");
              msg.react("👟");
              msg.react("👥");
              msg.react("🧑‍🤝‍🧑");
              const filter = (reaction, user) => {
                return  reaction.emoji.name === '👄' && user.id === message.author.id || reaction.emoji.name === '👀' && user.id === message.author.id || reaction.emoji.name === '👖' && user.id === message.author.id || reaction.emoji.name === '👕' && user.id === message.author.id || reaction.emoji.name === '👒' && user.id === message.author.id || reaction.emoji.name === '🧑‍🤝‍🧑' && user.id === message.author.id || reaction.emoji.name === '👥' && user.id === message.author.id;
              };
              
              const collector = msg.createReactionCollector({ filter, time: 60000 });
              
              collector.on('collect', (reaction, user) => {
                if (user.id === CCc.get("messages",user.id)) {
                    
                    if (reaction.emoji.name === "👄") {
                        this.MouthFilter(message);
                        msg.reactions.removeAll();
                        collector.stop();
                        console.log(`Collected ${reaction.emoji.name} from ${user.tag} id ${user.id}`);
                        // msg.delete();
                    }

                    if (reaction.emoji.name === "👀") {
                        this.EyesFilter(message);
                        msg.reactions.removeAll();
                        collector.stop();
                        console.log(`Collected ${reaction.emoji.name} from ${user.tag} id ${user.id}`);
                        // msg.delete();
                    }

                    if (reaction.emoji.name === "👖") {
                        this.TrousersFilter(message);
                        msg.reactions.removeAll();
                        collector.stop();
                        console.log(`Collected ${reaction.emoji.name} from ${user.tag} id ${user.id}`);
                        // msg.delete();
                    }
                    
                    if (reaction.emoji.name === "👕") {
                        this.ShirtFilter(message);
                        msg.reactions.removeAll();
                        collector.stop();
                        console.log(`Collected ${reaction.emoji.name} from ${user.tag} id ${user.id}`);
                        // msg.delete();
                    }

                    if (reaction.emoji.name === "👒") {
                        this.HeadFilter(message);
                        msg.reactions.removeAll();
                        collector.stop();
                        console.log(`Collected ${reaction.emoji.name} from ${user.tag} id ${user.id}`);
                        // msg.delete();
                    }
                    if (reaction.emoji.name === "👥") {
                        this.ColorFilter(message);
                        msg.reactions.removeAll();
                        collector.stop();
                        console.log(`Collected ${reaction.emoji.name} from ${user.tag} id ${user.id}`);
                        // msg.delete();
                    }
                    if (reaction.emoji.name === "🧑‍🤝‍🧑") {
                        this.SkinFilter(message);
                        msg.reactions.removeAll();
                        collector.stop();
                        console.log(`Collected ${reaction.emoji.name} from ${user.tag} id ${user.id}`);
                        // msg.delete();
                    }
                    
                  }
                
              });
              
              collector.on('end', collected => {
                console.log(`Collected ${collected.size} items`);
              });
            
              
          });

        });

    }
}