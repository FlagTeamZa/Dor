
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
// const SelectDropdown = require("../../GUI/Dropdowns/SelectDropdown");
const map = require("../../Config/map.json");
const party_embed = require("../../GUI/party/party_embed");
const PartyButtons = require("../../GUI/Buttons/PartyButtons");
// const MapDropdown = require("../../GUI/Dropdowns/MapDropdown");
const Party = new CreatePartyConfig();
module.exports = {
name: "SelectDropdown",
run: async (i) => {
    var user = i.user.id;
    var p = Party.getParty(user);
    
    if (p.msgID === i.message.id) {
        
        // var row = SelectDropdown.get(Number(i.values[0]));
        // i.update({content: `<@${user}>`,files: [], components: [row],attachments: [], embeds: []});
        Party.set(
            user,
            "select",
            Number(i.values[0])
          );
          Party.set(
            user,
            "target",
            `Lv.${map[p.map].monster[Number(i.values[0])].lv} ${map[p.map].monster[Number(i.values[0])].name} (map ${p.map})`
          ); 

          var p = Party.getParty(user);
          var embed = party_embed.get(p);
          var me = "";
          
          for (let i = 0; i < p.member.length; i++) {
           me+=`<@${p.member[i]}>`;
          }
          var row = PartyButtons.get(user);

          i.update({content: `${me}`,files: [], components: [row],attachments: [], embeds: [embed]});
    }
}
}