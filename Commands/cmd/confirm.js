
const ProfileClass = require("../../add-on/ProfileClass");
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const FriendConfigEvent = require("../../Event/Config/FriendConfigEvent");
const UserConfigEvent = require("../../Event/Config/UserConfigEvent");
const UserSettingConfig = require("../../Event/Config/UserSettingConfig");
const UserUniformEvent = require("../../Event/Config/UserUniformEvent");
const UserEconomyConfig = require("../../Event/Config/UserEconomyConfig");
const createimg = require("../../Event/createimg");
const CreateImg2_embed = require("../../GUI/CreateImg2_embed");
const UserInventory = require("../../Items/Event/Inventory");
const CCc = new CreateCharacterConfig();
const Uniform = new UserUniformEvent();
const config = new UserConfigEvent();
const friend = new FriendConfigEvent();
const setting = new UserSettingConfig();
const economy = new UserEconomyConfig();
// const 
const inv = new UserInventory();
// UserConfigEvent
const value = `${conn.prefix}confirm`;
module.exports = {
command: value,
muit: false,
connect_msg: `[System] Command ${value} connect.`,
run: async (message) =>{
  if (!CCc.get("msg",message.author.id)) {
    message.channel.send({content: `<@${message.author.id}> คุณยังไม่ได้ใช้คำสั่ง b.create`});
    return;
  }
  var user = message.author.id;
  var cap = message.client.users.cache.get(message.author.id);
  var uname = cap.username.replace("`",'');
  var tag = cap.discriminator;
  var cap ="`"+uname+"#"+tag+"` \n"; 

  Uniform.New(
    user,
    CCc.get("head",user),
    CCc.get("shirt",user),
    CCc.get("trousers",user),
    CCc.get("shoe",user),
    CCc.get("color",user),
    CCc.get("gender",user),
    CCc.get("mouth",user)
  );

  config.New(
    user,
    "swordman",
    uname,
    config.genDOR_ID(user)
  );

  friend.New(user);

  setting.New(
    user,
    CCc.get("msg",user)
  );

  inv.New(user);

  economy.New(user);
  
  message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
  .then(messages => {
    var embed = CreateImg2_embed.get(user,uname,config.getDOR_ID(user));
    // console.log(embed);
    messages.first().edit({content: `<@${message.author.id}>`,files: [],attachments: [], components: [], embeds: [embed]}).then(msg =>{
      msg.reactions.removeAll();
      var date1 = Date.now();
      setTimeout(async() => {
        new ProfileClass(message,user);
        message.delete();
        message.channel.send(`ใช้เวลาประมวณผลทั้งหมด ${(Date.now() - date1) / 1000} วินาที`);
      }, 100);
    });

  });

 }
}
     