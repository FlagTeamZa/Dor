
const color = require("../../Config/colors.json");
const config = require("../../config.json");
const { MessageEmbed, User } = require("discord.js");

const UserInventoryConfig = require("../../Items/Event/Inventory");
const UserEconomyConfig = require("../../Event/Config/UserEconomyConfig");
const Inv = new UserInventoryConfig();
const economy = new UserEconomyConfig();
module.exports = {
    Inv(user){
      // console.log(Party.getParty(user));
      // var party = Party.getParty(user) ? `Leader : ${Users.getName(Party.getParty(user).head)}` : "ไม่มี";
      var L_hand = Inv.getLeftHand(user) ? Inv.getLeftHand(user): "ไม่มี";
      var R_hand = Inv.getRightHand(user) ? Inv.getRightHand(user): "ไม่มี";
      var head = Inv.getHead(user) ? Inv.getHead(user): "ไม่มี";
      var chest = Inv.getChest(user) ? Inv.getChest(user): "ไม่มี";
      var legs = Inv.getLegs(user) ? Inv.getLegs(user): "ไม่มี";
      var feet = Inv.getFeet(user) ? Inv.getFeet(user): "ไม่มี";
      var pack = Inv.getInventory(user).length;
      var max = Inv.getSlot(user);

      var weapon = "";
      var w = [
         `↬ มือซ้าย: ${L_hand}`,
         `↬ มือขวา: ${R_hand}`,
         `↬ หมวก: ${head}`,
         `↬ เสื้อ: ${chest}`,
         `↬ กางเกง: ${legs}`,
         `↬ รองเท้า: ${feet}`
      ]
      for (let i = 0; i < w.length; i++) {
       weapon += w[i]+"\n";
      }
      // console.log(party);
      var f = [
        { 
          name: "◈ อาวุธและชุดเกราะ ₊˚", 
          value: weapon, 
          inline: true 
        },
        {
          name: "◈ กระเป๋า ₊˚",
          value: `↬ กระเป๋า : ${pack}/${max}\n↬ เงิน : ${economy.getFormatMoney(user)}`,
          inline: true
        }
      ];

      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle('✧. Inventory･｡ﾟ')
      // .setURL('https://discord.js.org/')
      // .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
      .setDescription('b.profile เพื่อดูโปรไฟล์ของคุณ')
      // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .addFields(f)
      // .addField('Inline field title', 'Some value here', true)
      // .setImage(`attachment://${a.name}`)
      .setTimestamp()
      .setFooter(config.Game_name);


      return exampleEmbed;
    // message.channel.send({ embeds: [exampleEmbed] });
    }
}