
const UpdateMsgClass = require("../../add-on/UpdateMsgClass");
const conn = require("../../config.json");
const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const UserSettingConfig = require("../../Event/Config/UserSettingConfig");
// const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const party = new CreatePartyConfig();

const setting = new UserSettingConfig();
const value = `yes`;
module.exports = {
command: value,
connect_msg: `[System] Sub_Command ${value} connect.`,
run: (message) => {
    var value = message.content.split(" ");
    // console.log(value[1]);
    if (typeof value[1] === 'undefined') {
      return;
    }
    
    var value = setting.acceptMail(message.author.id,value[1]);
    switch (value) {
        case 0:
        message.reply("ไม่มีเมลนี้");
        break;
        case 1:
        message.reply("ไม่สามารถยอมรับเมลนี้ได้");
        break;
        case 5:
        message.reply("คุณมีปาร์ตี้อยู่แล้ว ไม่สามารถตอบรับเมลนี้ได้");
        break;
        default:
        switch (value.value) {
        case 2:
        new UpdateMsgClass(message,value.user);
        new UpdateMsgClass(message,value.target);
        break;
        }
        break;
        // case 2:
        // message.reply("");
        // break;
    }
    // console.log(a);


}
}