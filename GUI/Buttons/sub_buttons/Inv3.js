
const {MessageButton} = require("discord.js");
const name = "Inv3";
module.exports = {
    get(value = 0){
        var button = new MessageButton()
        .setCustomId(name)
        .setLabel("โปรไฟล์")
        .setStyle('PRIMARY')
        // .setEmoji("⚔️");
        if (value === 1) {
        button.setDisabled(true);
        }else{
        button.setDisabled(false);
        }
        

        return button;
    }
}