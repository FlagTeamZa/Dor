
// const conn = require("../../config.json");
const CreateCharacterConfig = require("./Config/CreateCharacterConfig");
const HeadFilter = require("./ReactionFilter/HeadFilter");
const SkinFilter = require("./ReactionFilter/SkinFilter");
const CCc = new CreateCharacterConfig();


module.exports = {
  async get(message,attachment,user){
    message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
        .then(messages => {
          
          messages.first().edit({content: `<@${message.author.id}>`,files: [attachment],components: [], embeds: []}).then(msg =>{
              msg.react("👒")
              msg.react("👀");
              msg.react("👄");
              msg.react("👕");
              msg.react("👖");
              msg.react("👟");
              msg.react("👥");
              msg.react("🧑‍🤝‍🧑");
              const filter = (reaction, user) => {
                return reaction.emoji.name === '🧑‍🤝‍🧑' && user.id === message.author.id || reaction.emoji.name === '👀' && user.id === message.author.id;
              };
              
              const collector = msg.createReactionCollector({ filter, time: 60000 });
              
              collector.on('collect', (reaction, user) => {
                if (user.id === CCc.get("messages",user.id)) {
                    if (reaction.emoji.name === "🧑‍🤝‍🧑") {
                        SkinFilter(message);
                        msg.reactions.removeAll();
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