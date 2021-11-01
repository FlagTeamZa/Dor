
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const Map = require("../../Config/map.json");
const name = "SelectDropdown";
module.exports = {
    get(value){
        var f = [];
        for (let i = 0; i < Map[value].monster.length; i++) {
           var ob = {
            label: `${Map[value].monster[i].name}`,
            description: `${Map[value].monster[i].HP}`,
            value: ''+i
        }
        f.push(ob);
        }

        var row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId(name)
                .setPlaceholder('เลือกมอนเตอร์')
                .addOptions(f),
        );
        return row;
    }
}
		