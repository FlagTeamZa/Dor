
const {MessageButton} = require("discord.js");
const name = "CreateImg2";
module.exports = {
    get(value = 0){
        var button = new MessageButton()
        .setCustomId(name)
        .setLabel("แก้ไขตา")
        .setStyle('PRIMARY')
        if (value === 1) {
        button.setDisabled(true);
        }else{
        button.setDisabled(false);
        }
        

        return button;
    }
}