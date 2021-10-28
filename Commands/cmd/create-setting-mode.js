
const ButtonsClass = require("../../add-on/ButtonsClass");
const ReactionClass = require("../../add-on/ReactionClass");
const conn = require("../../config.json");
const CreateCharacterConfig = require("../../Event/Config/CreateCharacterConfig");
const createimg = require("../../Event/createimg");
const SwichMode_embed = require("../../GUI/SwichMode_embed");
const CCc = new CreateCharacterConfig();
// ReactionClass
// createimg
// ButtonsClass
// const ReactionCmd = require("../../add-on/ReactionFilter");
// ReactionClass
// const ReactionCmd = require("../../Event/ReactionCmd");
// ReactionCmd
// ReactionCmd
// const 
// CreateCharacterDropdown
// CreateCharacterConfig
module.exports = (client) =>{
   console.log(`[System] Command ${conn.prefix}create-setting-mode connect.`);

   client.on("messageCreate", async message => {
      if (message.content.startsWith(conn.prefix+"create-setting-mode")) {
        if (!CCc.get("msg",message.author.id)) {
          message.channel.send({content: `<@${message.author.id}> คุณยังไม่ได้ใช้คำสั่ง b.create`});
          return;
        }
        var mode = message.content.split(" ");
        // console.log(mode);
        if (typeof mode[1] === 'undefined') {
          
          message.channel.send({content: `<@${message.author.id}> คุณยังไม่ได้ระบุโหมดที่จะเปลี่ยน`});
          return;
        }
        // var mode = CCc.get("createmode",message.author.id);
        switch (mode[1]) {
          case "emoji":
            CCc.set("createmode",message.author.id,"emoji");
          break;
        
          case "buttons":
            CCc.set("createmode",message.author.id,"buttons");
          break;

          default:
            message.channel.send({content: `<@${message.author.id}> ไม่มีข้อมูลของฟังชั่น ${mode[1]}`});
          return;
        }
        var embed = SwichMode_embed.get(CCc.get("createmode",message.author.id));
        var user = message.author.id;
        message.channel.send({content: `<@${user}>`, embeds: [embed],components: []}).then(msg => {
          CCc.set("msg",user,msg.id);
          setTimeout(async() => {
            var attachment = await createimg.create(user);
            console.log(CCc.get("msg",message.author.id));
            switch (CCc.get("createmode",message.author.id)) {
              case "buttons":
                new ButtonsClass(message,attachment,user);
              break;
     
              case "emoji":
                new ReactionClass(message,attachment,user);
              break;

              default:
                msg.channel.send({content: `<@${user}> ไม่มีข้อมูลของฟังชั่น ${Cc.get("createmode",message.author.id)}`});
                break;
            }
            
          }, 1000);
        });



        // // i.deferUpdate();
 
        


       }
  });
}