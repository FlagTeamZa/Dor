

const { MessageActionRow, MessageButton} = require("discord.js");
const CreateImg4 = require("./sub_buttons/CreateImg4");
const CreateImg5 = require("./sub_buttons/CreateImg5");
const CreateImg6 = require("./sub_buttons/CreateImg6");



module.exports = {

	get(){
	 const row = new MessageActionRow()
		.addComponents(
			CreateImg4.get(),
			CreateImg5.get(),
			CreateImg6.get(1)
		);
		return row;
	}
       
};