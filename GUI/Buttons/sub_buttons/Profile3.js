
const {MessageButton} = require("discord.js");
const name = "Profile3";
module.exports = {
    get(value = 0){
        var button = new MessageButton()
        .setCustomId(name)
        .setLabel("ปาร์ตี้")
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