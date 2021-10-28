
const InventoryClass = require("../../add-on/InventoryClass");
const conn = require("../../config.json");
const configParty = require("../../Event/Config/CreatePartyConfig");
const configFriend = require("../../Event/Config/FriendConfigEvent");
const configUser = require("../../Event/Config/UserConfigEvent");
const configEco = require("../../Event/Config/UserEconomyConfig");
const configSet = require("../../Event/Config/UserSettingConfig");
const ConfigUniform = require("../../Event/Config/UserUniformEvent");
const CreateImg_embed = require("../../GUI/CreateImg_embed");

const Party = new configParty();
const Friend = new configFriend();
const User = new configUser();
const Eco = new configEco();
const set = new configSet();
const Uniform = new ConfigUniform();

const value = `${conn.prefix}inv`;
module.exports = {
command: value,
connect_msg: `[System] Command ${value} connect.`,
run: (message) => {

    if (!User.getDOR_IdbyID(message.author.id)) {
        message.channel.send({content: `<@${message.author.id}>`, embeds: [CreateImg_embed.non()],components: []});
        return;
      }
      message.delete();
      new InventoryClass(message,message.author.id);

}
}