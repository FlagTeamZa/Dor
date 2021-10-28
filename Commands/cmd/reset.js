
const conn = require("../../config.json");
const configParty = require("../../Event/Config/CreatePartyConfig");
const configFriend = require("../../Event/Config/FriendConfigEvent");
const configUser = require("../../Event/Config/UserConfigEvent");
const configEco = require("../../Event/Config/UserEconomyConfig");
const configSet = require("../../Event/Config/UserSettingConfig");
const ConfigUniform = require("../../Event/Config/UserUniformEvent");

const Party = new configParty();
const Friend = new configFriend();
const User = new configUser();
const Eco = new configEco();
const set = new configSet();
const Uniform = new ConfigUniform();

const value = `${conn.prefix}reset`;
module.exports = {
command: value,
connect_msg: `[System] Command ${value} connect.`,
run: (message) => {

    if (conn.admin.includes(message.author.id)) {
        Party.reset();
        Friend.reset();
        User.reset();
        Eco.reset();
        set.reset();
        Uniform.reset();
        message.channel.send("ระบบได้ลบทุกอย่างแล้ว");
        message.delete();


    }

}
}