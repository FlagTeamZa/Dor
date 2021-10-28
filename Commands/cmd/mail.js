
const MailClass = require("../../add-on/MailClass");
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
const CreateImg_embed = require("../../GUI/CreateImg_embed");
const Mail_embed = require("../../GUI/Mail_embed");
const CCc = new CreateCharacterConfig();
const config = new UserConfigEvent();
// UserConfigEvent
const value = `${conn.prefix}mail`;
module.exports = {
command: value,
connect_msg: `[System] Command ${value} connect.`,
run: async (message) =>{

        if (!config.getDOR_IdbyID(message.author.id)) {
          message.channel.send({content: `<@${message.author.id}>`, embeds: [CreateImg_embed.non()],components: []});
          return;
        }
        
        new MailClass(
          message,
          null,
          message.author.id
        );
        // Mail_embed.get(message.author.id);

       }
}