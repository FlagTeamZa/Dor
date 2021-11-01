
const Main = require("../../battle/main");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const SkillButtons = require("../../GUI/Buttons/SkillButtons");
const Party = new CreatePartyConfig();
// SkillButtons
// Main
module.exports = {
name: "Party1",
run: async (i) => {
    var user = i.user.id;
    var p = Party.getParty(user);
    if (p.msgID === i.message.id) {

        new Main(p,user);
        let a = new Main();
        var p = Party.getParty(user);
        var me = "";
        for (let i = 0; i < p.member.length; i++) {
         me+=`<@${p.member[i]}>`;
        }
        var row = SkillButtons.get();
        i.message.channel.send({content: `${me}`,files: [], components: [row],attachments: [], embeds: [a.PlayerEmbed(user)]}).then(msg => {
          Party.set(
            user,
            "msgID",
            msg.id
          );
        });

        i.message.delete();
      
    }
}
}