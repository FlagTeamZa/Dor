

const { MessageActionRow} = require("discord.js");
const Inv1 = require("./sub_buttons/Inv1");
const Inv2 = require("./sub_buttons/Inv2");



module.exports = {

	get(){
	 const row = new MessageActionRow()
		.addComponents(
			Inv1.get(),
			Inv2.get()
		);
		return row;
	}
       
};