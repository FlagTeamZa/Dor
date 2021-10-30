

const { MessageActionRow} = require("discord.js");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const Party = new CreatePartyConfig();
const Party1 = require("../Buttons/sub_buttons/Party1");
const Party2 = require("../Buttons/sub_buttons/Party2");


module.exports = {

	get(user = null){
		var p = Party.getParty(user).target === "ยังไม่ได้เลือก" ? Party1.get(1) : Party1.get(0);
	 const row = new MessageActionRow()
		.addComponents(
			p,
			Party2.get()
		);
		return row;
	}
       
};