

const { MessageActionRow, MessageButton} = require("discord.js");
const CreateImg1 = require("./sub_buttons/CreateImg1");
const CreateImg2 = require("./sub_buttons/CreateImg2");
const CreateImg3 = require("./sub_buttons/CreateImg3");


module.exports = {

	get(){
	 const row = new MessageActionRow()
		.addComponents(
			CreateImg1.get(),
			CreateImg2.get(),
			CreateImg3.get()
		);
		return row;
	}
       
};