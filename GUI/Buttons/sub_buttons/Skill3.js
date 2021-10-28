
const {MessageButton} = require("discord.js");
const name = "Skill3";
module.exports = {
    get(value = 0){
        var button = new MessageButton()
        .setCustomId(name)
        .setLabel("สกิล 3")
        .setStyle('PRIMARY')
        if (value === 1) {
        button.setDisabled(true);
        }else{
        button.setDisabled(false);
        }
        

        return button;
    }
}