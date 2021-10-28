

const { MessageActionRow, MessageButton} = require("discord.js");
const Skill1 = require("./sub_buttons/Skill1");
const Skill2 = require("./sub_buttons/Skill2");
const Skill3 = require("./sub_buttons/Skill3");
const Skill4 = require("./sub_buttons/Skill4");



module.exports = {

	get(){
	 const row = new MessageActionRow()
		.addComponents(
            Skill1.get(),
            Skill2.get(),
            Skill3.get(),
            Skill4.get()
		);
		return row;
	}
       
};