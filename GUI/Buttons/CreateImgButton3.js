

const { MessageActionRow, MessageButton} = require("discord.js");
const CreateImg7 = require("./sub_buttons/CreateImg7");
const CreateImg8 = require("./sub_buttons/CreateImg8");


module.exports = {

	get(){
	 const row = new MessageActionRow()
		.addComponents(
			CreateImg7.get(),
			CreateImg8.get()
		);
		return row;
	}
       
};