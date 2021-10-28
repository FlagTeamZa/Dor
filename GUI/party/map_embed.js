
const config = require("../../config.json");
const color = require("../../Config/colors.json");
const map = require("../../Config/map.json");
const { MessageEmbed, Collector, User } = require("discord.js");

module.exports = {
    get(){
        var f = [];
        for (let i = 0; i < map.length; i++) {
            var ob = { 
                name: `Map ${i}`, 
                value: `Name: ${map[i].name}\nStory: เร็วๆนี้ !`, 
                inline: true 
              }
              f.push(ob);
        }
        const exampleEmbed = new MessageEmbed()
        .setColor("#"+color.normal)
        .setTitle('MAP SELECT')
        .setDescription(`b.map <map id>`)
        .addFields(f)
        .setTimestamp()
        .setFooter(config.Game_name);
        
      return exampleEmbed;
      },
    select(m){
        var f = [];
        for (let i = 0; i < map[m].monster.length; i++) {
            var ob = { 
                name: `${i}). ${map[m].monster[i].name}`, 
                value: `Lv: ${map[m].monster[i].lv}\nHP: ${map[m].monster[i].HP}`, 
                inline: true 
              }
              f.push(ob);
        }
        const exampleEmbed = new MessageEmbed()
        .setColor("#"+color.normal)
        .setTitle('MONSTER SELECT')
        .setDescription(`b.select <monsterID>`)
        .addFields(f)
        .setTimestamp()
        .setFooter(config.Game_name);
        
      return exampleEmbed;
      }
}