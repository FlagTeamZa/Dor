
const PartyClass = require("../../add-on/PartyClass");
const UpdateMsgClass = require("../../add-on/UpdateMsgClass");
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const FriendConfigEvent = require("../../Event/Config/FriendConfigEvent");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
const UserSettingConfig = require("../../Event/Config/UserSettingConfig");
const CreateImg_embed = require("../../GUI/CreateImg_embed");
const party_embed = require("../../GUI/party/party_embed");
const CCc = new CreateCharacterConfig();
const config = new UserConfigEvent();
const Party = new CreatePartyConfig();
const Friend = new FriendConfigEvent();
const setting = new UserSettingConfig();
const array = [];
const value = `${conn.prefix}invite`;
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
          message.channel.send({content: `<@${message.author.id}> b.invite <id>`});
          return;
        }
        var a = value[1];
        var b = config.getIDByDOR_ID(a);
        var party = Party.getParty(message.author.id);
        if (!party) {
          message.channel.send("คุณไม่มีปาร์ตี้");
          return;
        }
        if (party.head !== message.author.id) {
          message.channel.send("คุณไม่ใช่หัวหน้าปาร์ตี้");
          return;
        }
        // console.log(b);
        if (!b) {
          message.channel.send("ไม่มีผู้เล่นไอดีนี้");
          return;
        }
          // UpdateMsgClass
          console.log(
            b,
            message.author.id
          );
        new UpdateMsgClass(message,b);
        new UpdateMsgClass(message,message.author.id);

        setting.addSeesion(
          message.author.id,
          b,
          "party_invite"
        );

        setting.addMail(b,Friend.Custom(
          message.author.id,
          b,
          "party_invite"
        ));

        setting.addMail(message.author.id,Friend.Custom(
          message.author.id,
          b,
          "system_request_invite_party"
          ));
        
          message.delete();

      }
}