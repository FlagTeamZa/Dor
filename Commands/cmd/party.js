
const AuthorProfileClass = require("../../add-on/AuthorProfileClass");
const ProfileClass = require("../../add-on/ProfileClass");
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
const UserSettingConfig = require("../../Event/Config/UserSettingConfig");
const createimg = require("../../Event/createimg");
const party_embed = require("../../GUI/party/party_embed");
const CreateImg_embed = require("../../GUI/CreateImg_embed");
const PartyClass = require("../../add-on/PartyClass");
// CreateCharacterConfig
const CCc = new CreateCharacterConfig();
const config = new UserConfigEvent();
const value = `${conn.prefix}party`;
const setting = new UserSettingConfig();
const Party = new CreatePartyConfig();
module.exports = {
command: value,
muit: true,
connect_msg: `[System] Command ${value} connect.`,
run: async (message) => {

        if (!config.getDOR_IdbyID(message.author.id)) {
          message.channel.send({content: `<@${message.author.id}>`, embeds: [CreateImg_embed.non()],components: []});
          return;
        }
        
        var party = Party.getParty(message.author.id);
        if (!party) {
          message.channel.send("คุณไม่มีปาร์ตี้");
          return;
        }

        new PartyClass(message,message.author.id);
    }
}