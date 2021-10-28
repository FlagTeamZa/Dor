
const config = require("../config.json");

module.exports = {
     get(a){
      //  console.log(a);
            var exampleEmbed = {
            color: 0xd42dd8,
            title: "แก้ไขรูปร่างตัวละคร",
            description: `สลับโหมดการสร้างโดยการใช้คำสั่ง\nb.create-setting-mode emoji | buttons\n\nb.confirm เพื่อยืนยันการสร้างตัวละคร`,
            timestamp: new Date(),
            image: {
                url: `attachment://${a.name}`,
            },
            footer: {
              text: config.Game_name,
            }
          }
          return exampleEmbed;
    }

}