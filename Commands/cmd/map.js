
const PartyClass = require("../../add-on/PartyClass");
const SelectClass = require("../../add-on/SelectClass");
const UpdateMsgClass = require("../../add-on/UpdateMsgClass");
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const FriendConfigEvent = require("../../Event/Config/FriendConfigEvent");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
const UserSettingConfig = require("../../Event/Config/UserSettingConfig");
const CreateImg_embed = require("../../GUI/CreateImg_embed");
const map = require("../../Config/map.json");
const party_embed = require("../../GUI/party/party_embed");
const isNumber = require("../../add-on/isNumber");
const CCc = new CreateCharacterConfig();
const config = new UserConfigEvent();
const Party = new CreatePartyConfig();
const Friend = new FriendConfigEvent();
const setting = new UserSettingConfig();
const array = [];
const value = `${conn.prefix}map`;
module.exports = {
command: value,
muit: true,
connect_msg: `[System] Command ${value} connect.`,
run: async (message) =>{

        if (!config.getDOR_IdbyID(message.author.id)) {
          message.channel.send({content: `<@${message.author.id}>`, embeds: [CreateImg_embed.non()],components: []});
          return;
        }

        var value = message.content.split(" ");

        if (typeof value[1] === 'undefined') {
          message.channel.send({content: `<@${message.author.id}> b.map <map id>`});
          return;
        }

        var party = Party.getParty(message.author.id);
        if (!party) {
          message.channel.send("คุณไม่มีปาร์ตี้");
          return;
        }
        if (party.head !== message.author.id) {
          message.channel.send("คุณไม่ใช่หัวหน้าปาร์ตี้");
          return;
        }
        // console.log(value[1]);
        if (!isNumber(value[1])) {
          message.channel.send("กรุณากรอกตัวเลข");
          return;
        }
        // isNumber
        if (Number(value[1]) > map.length-1) {
          message.channel.send("ไม่มีแมพนี้");
          return;
        }
        // console.log(b);
        new SelectClass(message,message.author.id,Number(value[1]));
        Party.set(
          message.author.id,
          "map",
          Number(value[1])
        );
        message.delete();
      }
}