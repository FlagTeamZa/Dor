
const config = require("../config.json");
const { MessageEmbed } = require("discord.js");
const color = require("../Config/colors.json");
const UserConfigEvent = require("../Event/Config/UserConfigEvent");
const FriendConfigEvent = require("../Event/Config/FriendConfigEvent");
const UserSettingConfig = require("../Event/Config/UserSettingConfig");

const Friend = new FriendConfigEvent();
const Users = new UserConfigEvent();
const c = "`";
const setting = new UserSettingConfig();
module.exports = {

    get(user){
      // console.log(setting.getFriendSeesion(user));
      var f = [];
      const exampleEmbed = new MessageEmbed()
      .setColor("#"+color.normal)
      .setTitle('Mail')
      .setDescription(setting.getMail(user))
      // .addFields(f)
      .setTimestamp()
      .setFooter(config.Game_name);
      
    return exampleEmbed;
    },
    
}