
const color = require("../../Config/colors.json");
const config = require("../../config.json");
const { MessageEmbed, User } = require("discord.js");

const UserInventoryConfig = require("../../Items/Event/Inventory");
const UserEconomyConfig = require("../../Event/Config/UserEconomyConfig");
const Inv = new UserInventoryConfig();
const economy = new UserEconomyConfig();
module.exports = {
    Inv(user){

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
      .setDescription('b.profile เพื่อดูโปรไฟล์ของคุณ')
      .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);


      return exampleEmbed;
    },
    Weapon(user){

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

      var f = [
        { 
          name: "↬ มือซ้าย ₊˚", 
          value: `${L_hand}`, 
          inline: true 
        },
        {
          name: "↬ มือขวา ₊˚",
          value: `${R_hand}`,
          inline: true
        },
        {
          name: "↬ หมวก ₊˚",
          value: `${head}`,
          inline: true
        },
        {
          name: "↬ เสื้อ ₊˚",
          value: `${chest}`,
          inline: true
        },
        {
          name: "↬ กางเกง ₊˚",
          value: `${legs}`,
          inline: true
        },   
        {
          name: "↬ รองเท้า ₊˚",
          value: `${feet}`,
          inline: true
        },
        {
          name: "↬ ไอเทมที่สวมใส่ได้ ₊˚",
          value: `ไม่มี`,
          inline: false
        }
      ];

      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle('◈ อาวุธและชุดเกราะ ₊˚')
      .setDescription('b.profile เพื่อดูโปรไฟล์ของคุณ')
      .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);


      return exampleEmbed;
    },
    backpack(user){

      var pack = Inv.getInventory(user);
      var max = Inv.getSlot(user);
      var slot = "";
      var f = [];
      for (let i = 0; i < pack.length; i++) {
        slot += `${i+1}). ${pack[i].item} ${pack[i].count} ea \n`;
      }

      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle(`◈ กระเป๋า ${Inv.getInventory(user).length} / ${max}₊˚`)
      .setDescription(slot)
      // .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);


      return exampleEmbed;
    }
}