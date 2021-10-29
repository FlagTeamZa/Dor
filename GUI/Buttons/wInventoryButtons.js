

const { MessageActionRow} = require("discord.js");
const wInv1 = require("./sub_buttons/wInv1");
const wInv2 = require("./sub_buttons/wInv2");




module.exports = {

	get(){
	 const row = new MessageActionRow()
		.addComponents(
			wInv1.get(),
			wInv2.get()
		);
		return row;
	}
       
};