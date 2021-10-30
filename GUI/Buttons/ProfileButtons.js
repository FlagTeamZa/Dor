

const { MessageActionRow} = require("discord.js");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const Profile1 = require("./sub_buttons/Profile1");
const Profile2 = require("./sub_buttons/Profile2");
const Profile3 = require("./sub_buttons/Profile3");
const Party = new CreatePartyConfig();


module.exports = {

	get(user = null){
		var p = Party.getParty(user) ? Profile3.get() : Profile1.get();
	 const row = new MessageActionRow()
		.addComponents(
			p,
			Profile2.get()
		);
		return row;
	}
       
};