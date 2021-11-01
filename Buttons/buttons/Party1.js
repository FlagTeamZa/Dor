
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const Party = new CreatePartyConfig();
module.exports = {
name: "Party1",
run: async (i) => {
    var user = i.user.id;
    var p = Party.getParty(user);
    if (p.msgID === i.message.id) {
 
      
    }
}
}