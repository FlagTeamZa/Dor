
const conn = require("../../config.json");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const battle = require("../../GUI/Battle/battle");
// const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const party = new CreatePartyConfig();


const value = `${conn.prefix}test`;
module.exports = {
command: value,
connect_msg: `[System] Command ${value} connect.`,
run: (message) => {
    // console.log(message);
    message.reply({content: "test"}).then(msg => {
        console.log(msg);
    });
// var e1 = battle.player();
// var e2 = battle.enemy();
// message.channel.send({content: `<@${message.author.id}>` , embeds: [e1]});
// message.channel.send({content: `<@${message.author.id}>` , embeds: [e2]});

}
}