
const config = require("../config.json");

module.exports = {
    get(a){
            var exampleEmbed = {
            color: 0xd42dd8,
            title: "SETTING",
            description: `กำลังสลับโหมดเป็น ${a}`,
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