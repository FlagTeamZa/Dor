
const ProfileClass = require("../../add-on/ProfileClass");
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
const createimg = require("../../Event/createimg");
const CreateImg_embed = require("../../GUI/CreateImg_embed");
// CreateCharacterConfig
const CCc = new CreateCharacterConfig();
const Party = new CreatePartyConfig();
const config = new UserConfigEvent();
const value = `${conn.prefix}leave`;
module.exports = {
command: value,
muit: true,
connect_msg: `[System] Command ${value} connect.`,
run: async (message) =>{

        var user = message.author.id;
        
        if (!config.getDOR_IdbyID(message.author.id)) {
          message.channel.send({content: `<@${message.author.id}>`, embeds: [CreateImg_embed.non()],components: []});
          return;
        }

        if (!Party.getParty(user)) {
          message.channel.send(`<@${user}> คุณไม่มีปาร์ตี้`);
          return;
        }

        if (Party.getHead(user)) {
          message.channel.send(`<@${user}> ระบบได้ยุบปาร์ตี้ ID ${Party.getParty(user).id} แล้ว`);
        }else{
          message.channel.send(`<@${user}> คุณได้ออกจากปาร์ตี้ ID ${Party.getParty(user).id} แล้ว`);
        }
        Party.leaveParty(user);
        return;

      }
}