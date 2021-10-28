
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
const main = require("../../battle/main");
const BattleClass = require("../../add-on/BattleClass");
const PlayerBattleClass = require("../../add-on/PlayerBattleClass");
// const m = new main();
const CCc = new CreateCharacterConfig();
const config = new UserConfigEvent();
const Party = new CreatePartyConfig();
const Friend = new FriendConfigEvent();
const setting = new UserSettingConfig();
const button = require("../../GUI/Buttons/SkillButtons");
const array = [];
const value = `${conn.prefix}start`;
module.exports = {
command: value,
muit: true,
connect_msg: `[System] Command ${value} connect.`,
run: async (message) =>{

        if (!config.getDOR_IdbyID(message.author.id)) {
          message.channel.send({content: `<@${message.author.id}>`, embeds: [CreateImg_embed.non()],components: []});
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

        if (typeof party.select !== 'number') {
          message.channel.send("คุณยังไม่ได้เลือกมอนเตอร์ b.select <monster id>");
          return;
        }

        new main(party,message.author.id);
        let a = new main();
        var p = Party.getParty(message.author.id);
        var me = "";
        for (let i = 0; i < p.member.length; i++) {
         me+=`<@${p.member[i]}>`;
        }
        var row = button.get();
        message.channel.send({content: `${me}`,files: [], components: [row],attachments: [], embeds: [a.PlayerEmbed(message.author.id)]}).then(msg => {
          Party.set(
            message.author.id,
            "msgID",
            msg.id
          );
        });

        message.delete();
      }
}