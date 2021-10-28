
const isNumber = require("../../add-on/isNumber");
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
const CCc = new CreateCharacterConfig();
const config = new UserConfigEvent();
const Party = new CreatePartyConfig();
const Friend = new FriendConfigEvent();
const setting = new UserSettingConfig();
const array = [];
const value = `${conn.prefix}select`;
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
          message.channel.send({content: `<@${message.author.id}> b.select <monster id>`});
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
        // console.log(party.map);
        if (typeof party.map !== 'number') {
          message.channel.send("คุณยังไม่ได้เลือกแมพ b.map <map id>");
          return;
        }
// isNumber
        if (!isNumber(value[1])) {
          message.channel.send("กรุณากรอกตัวเลข");
          return;
        }
        // isNumber
        if (Number(value[1]) > map[party.map].monster.length-1) {
          message.channel.send("ไม่มีแมพนี้");
          return;
        }
        // console.log(b);
        Party.set(
          message.author.id,
          "select",
          Number(value[1])
        );
        Party.set(
          message.author.id,
          "target",
          `Lv.${map[party.map].monster[Number(value[1])].lv} ${map[party.map].monster[Number(value[1])].name} (map ${party.map})`
        ); 
        new PartyClass(
          message,
          message.author.id
        );
        // new SelectClass(message,message.author.id,Number(value[1]));

        message.delete();
      }
}