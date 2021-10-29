

const { MessageActionRow} = require("discord.js");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const Profile1 = require("./sub_buttons/Profile1");
const Profile2 = require("./sub_buttons/Profile2");
const Party = new CreatePartyConfig();


module.exports = {

	get(user = null){
		var p = Party.getParty(user) ? Profile1.get(0) : Profile2.get(1);
	 const row = new MessageActionRow()
		.addComponents(
			p,
			Profile2.get()
		);
		return row;
	}
       
};