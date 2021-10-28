
const config = require("../config.json");
const CreateCharacterConfig = require("../Event/Config/CreateCharacterConfig");
// const user = 
// CreateCharacterConfig
const CCc = new CreateCharacterConfig();


module.exports = {
     get(user,name,id){
            var exampleEmbed = {
            color: 0xd42dd8,
            title: "กำลังสร้างตัวละคร",
            description: `รายละเอียดตัวละคร`,
            fields: [
              {
                name: '👒: ทรงผม',
                value: ""+CCc.get("head",user),
                inline: true,
              },
              {
                name: '👀: ตา',
                value: ""+CCc.get("eyes",user),
                inline: true,
              },
              {
                name: '👄: ปาก',
                value: ""+CCc.get("mouth",user),
                inline: true,
              },
              {
                name: '👕: เสื้อ',
                value: ""+CCc.get("shirt",user),
                inline: true,
              },
              {
                name: '👖: กางเกง',
                value: ""+CCc.get("trousers",user),
                inline: true,
              },
              {
                name: '👟: รองเท้า',
                value: ""+CCc.get("shoe",user),
                inline: true,
              },
              {
                name: '👥: สีผิว',
                value: ""+CCc.get("color",user),
                inline: true,
              },
              {
                name: '🧑‍🤝‍🧑: เพศ',
                value: "ยังทำไม่เสด",
                inline: true,
              },
              {
                name: 'ชื่อของคุณใน DOR คือ',
                value: name,
                inline: true,
              },
              {
                name: 'ID คุณใน DOR คือ',
                value: ""+id,
                inline: true,
              },
            ],
            timestamp: new Date(),
            image: {
                // url: `attachment://${a.name}`,
            },
            footer: {
              text: config.Game_name,
            }
          }
          return exampleEmbed;
    }

}