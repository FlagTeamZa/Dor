
const config = require("../config.json");
const color = require("../Config/colors.json");
module.exports = {
 async s(){
    var exampleEmbed = {
    color: 0xd42dd8,
    title: "ค้นหาตัวละคร",
    description: `กำลังค้นหาตัวละคร กรุณารอสักครู่...`,
    timestamp: new Date(),
    image: {
        url: ``,
    },
    footer: {
      text: config.Game_name,
    }
  }
  return exampleEmbed;
},
    get(){
            var exampleEmbed = {
            color: 0xd42dd8,
            title: "แก้ไขรูปร่างตัวละคร",
            description: `กำลังแต่งหน้าให้ตัวละคร กรุณารอสักครู่...`,
            timestamp: new Date(),
            image: {
                url: ``,
            },
            footer: {
              text: config.Game_name,
            }
          }
          return exampleEmbed;
    },
    id(){
      var exampleEmbed = {
      color: 0xd42dd8,
      title: "ERROR",
      description: `คุณมีตัวละครอยู่แล้วกรุณาพิมพ์ b.profile หรือ b.p เพื่อเข้าหน้า profile`,
      timestamp: new Date(),
      image: {
          url: ``,
      },
      footer: {
        text: config.Game_name,
      }
    }
    return exampleEmbed;
},

non(){
  var exampleEmbed = {
  color: `0x${color.red}`,
  title: "ERROR",
  description: `คุณยังไม่มีตัวละครกรุณาสร้างตัวละครก่อน b.create`,
  timestamp: new Date(),
  image: {
      url: ``,
  },
  footer: {
    text: config.Game_name,
  }
}
return exampleEmbed;
}
}