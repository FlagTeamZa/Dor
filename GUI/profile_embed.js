
const color = require("../Config/colors.json");
const config = require("../config.json");
const { MessageEmbed, User } = require("discord.js");
const UserConfigEvent = require("../Event/Config/UserConfigEvent");
const CreatePartyConfig = require("../Event/Config/CreatePartyConfig");

const UserSettingConfig = require("../Event/Config/UserSettingConfig");
const UserEconomyConfig = require("../Event/Config/UserEconomyConfig");
const Users = new UserConfigEvent();
// UserConfigEvent
// const color = require("../../Config/colors.json");
// CreatePartyConfig
const Party = new CreatePartyConfig();
const setting = new UserSettingConfig();
const economy = new UserEconomyConfig();
module.exports = {
    get(a,user){
      // console.log(Party.getParty(user));
      var party = Party.getParty(user) ? `Leader : ${Users.getName(Party.getParty(user).head)}` : "ไม่มี";
      // console.log(party);
      var f = [
        { 
          name: ":globe_with_meridians:: Player Name/ID", 
          value: `${Users.getName(user)}\nID: ${Users.getDOR_ID(user)}`, 
          inline: true 
        },
        { 
          name: "❤️: HP/MaxHP", 
          value: `${Users.getHP(user)}/${Users.getMaxHP(user)}`, 
          inline: true 
        },
        { 
          name: `:crossed_swords:: Lv.${Users.getLevel(user)}`, 
          value: `exp: ${Users.getExp(user)}/${Users.getMaxExp(user)}`, 
          inline: true 
        },
        { 
          name: "🧬: อาชีพ", 
          value: `${Users.getJob(user)}`, 
          inline: true 
        },
        { 
          name: "💸: เงิน", 
          value: `${economy.getFormatMoney(user)} $`,
          inline: true 
        },
        { 
          name: ":family_mwg:: ปาร์ตี้", 
          value: party,
          inline: true 
        },
        { 
          name: "📜: แจ้งเตือน", 
          value: setting.getMsg(user),
          inline: false 
        }
      ];
      // var member = ob.member;
      // for (let i = 0; i < member.length; i++) {
      //  var sb = { 
      //     name: member[i], 
      //     value: 'Some value here', 
      //     inline: true 
      //   }
      //   f.push(sb);
      // }

      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle('MY PROFILE')
      // .setURL('https://discord.js.org/')
      // .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
      .setDescription('b.inv เพื่อดูกระเป๋า\nb.store | b.shop เพื่อเข้าร้านค้า\nb.item <name> เพื่อเช็คข้อมูลไอเทม\nb.add <id> เพื่อเพิ่มเพื่อน\nb.list เพื่อดูรายชื่อเพื่อน\nb.button-mode emoji | buttons เพื่อเปลี่ยนปุ่มกด')
      // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .addFields(f)
      // .addField('Inline field title', 'Some value here', true)
      .setImage(`attachment://${a.name}`)
      .setTimestamp()
      .setFooter(config.Game_name);


      return exampleEmbed;
    // message.channel.send({ embeds: [exampleEmbed] });
    },
    author(a,user){
      // console.log(Party.getParty(user));
      var party = Party.getParty(user) ? `Leader : ${Users.getName(Party.getParty(user).head)}` : "ไม่มี";
      // console.log(party);
      var f = [
        { 
          name: ":globe_with_meridians:: Player Name/ID", 
          value: `${Users.getName(user)}\nID: ${Users.getDOR_ID(user)}`, 
          inline: true 
        },
        { 
          name: "❤️: HP/MaxHP", 
          value: `${Users.getHP(user)}/${Users.getMaxHP(user)}`, 
          inline: true 
        },
        { 
          name: `:crossed_swords:: Lv.${Users.getLevel(user)}`, 
          value: `exp: ${Users.getExp(user)}/${Users.getMaxExp(user)}`, 
          inline: true 
        },
        { 
          name: "🧬: อาชีพ", 
          value: `${Users.getJob(user)}`, 
          inline: true 
        },
        { 
          name: ":family_mwg:: ปาร์ตี้", 
          value: party,
          inline: true 
        },
        { 
          name: ":notepad_spiral:: ข้อความต้อนรับ", 
          value: "เร็วๆนี้ !",
          inline: false 
        }
      ];
      // var member = ob.member;
      // for (let i = 0; i < member.length; i++) {
      //  var sb = { 
      //     name: member[i], 
      //     value: 'Some value here', 
      //     inline: true 
      //   }
      //   f.push(sb);
      // }

      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle(`${Users.getName(user)} Profile`)
      // .setURL('https://discord.js.org/')
      // .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
      .setDescription('b.profile เพื่อกลับสู่หน้าโปรไฟล์ของคุณ')
      // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .addFields(f)
      // .addField('Inline field title', 'Some value here', true)
      .setImage(`attachment://${a.name}`)
      .setTimestamp()
      .setFooter(config.Game_name);


      return exampleEmbed;
    // message.channel.send({ embeds: [exampleEmbed] });
    }
}