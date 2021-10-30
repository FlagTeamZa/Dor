
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const Map = require("../../Config/map.json");
const name = "MapDropdown";
module.exports = {
    get(){
        var f = [];
        for (let i = 0; i < Map.length; i++) {
           var ob = {
            label: Map[i].name,
            description: Map[i].story,
            value: ''+i
        }
        f.push(ob);
        }

        var row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId(name)
                .setPlaceholder('เลือกแมพ')
                .addOptions(f),
        );
        return row;
    }
}
		