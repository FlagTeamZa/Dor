

const { MessageActionRow} = require("discord.js");
const bInv1 = require("./sub_buttons/bInv1");
const bInv2 = require("./sub_buttons/bInv2");





module.exports = {

	get(){
	 const row = new MessageActionRow()
		.addComponents(
			bInv1.get(),
			bInv2.get()
		);
		return row;
	}
       
};