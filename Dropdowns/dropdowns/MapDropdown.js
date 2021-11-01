
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const SelectDropdown = require("../../GUI/Dropdowns/SelectDropdown");
// const MapDropdown = require("../../GUI/Dropdowns/MapDropdown");
const Party = new CreatePartyConfig();
module.exports = {
name: "MapDropdown",
run: async (i) => {
    var user = i.user.id;
    var p = Party.getParty(user);
    
    if (p.msgID === i.message.id) {
        
        var row = SelectDropdown.get(Number(i.values[0]));
        var me = "";
          
        for (let i = 0; i < p.member.length; i++) {
         me+=`<@${p.member[i]}>`;
        }
        Party.set(
            user,
            "map",
            Number(i.values[0])
          );
        i.update({content: `${me}`,files: [], components: [row],attachments: [], embeds: []});

    }
}
}