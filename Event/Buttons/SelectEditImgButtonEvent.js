const ButtonsClass = require("../../add-on/ButtonsClass");
const CreateImg_embed = require("../../GUI/CreateImg_embed");
const CreateCharacterConfig = require("../Config/CreateCharacterConfig");
const createimg = require("../createimg");
// ButtonsClass
// createimg
// CreateCharacterConfig
const CCc = new CreateCharacterConfig();
// const UUe = new UserUniformEvent();
// UserUniformEvent
const name = "SelectEditImgButtonEvent";
const set = require("../../Config/set.json");
module.exports = (client) => {
    console.log(`[System] Event/Buttons/${name} connect.`);
    client.on("interactionCreate", async i => {
        if (i.isButton()) {
            switch (i.customId) {
                case "CreateImg1":
                    if (i.user.id === CCc.get("messages",i.user.id)) {
                        i.deferUpdate();
                        var embed = CreateImg_embed.get();
                        var user = i.user.id;
                        var maxhead = set.maxhead;
                        if (CCc.get("head",user) !== maxhead) {
                          CCc.set("head",user,CCc.get("head",user)+1);
                        }else{
                          CCc.set("head",user,0);
                        }
                        i.message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
                        .then(messages => {
                          
                          messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []});

                          setTimeout(async() => {
                            var attachment = await createimg.create(user);
                            new ButtonsClass(i.message,attachment,user);
                          }, 1000);
                          
                        });
                    }
                break;
               
                case "CreateImg2":
                    if (i.user.id === CCc.get("messages",i.user.id)) {
                        i.deferUpdate();
                        var embed = CreateImg_embed.get();
                        var user = i.user.id;
                        var eyesmax = set.maxeyes;
                        if (CCc.get("eyes",user) !== eyesmax) {
                          CCc.set("eyes",user,CCc.get("eyes",user)+1);
                        }else{
                          CCc.set("eyes",user,0);
                        }
                        i.message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
                        .then(messages => {
                          
                          messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []});

                          setTimeout(async() => {
                            var attachment = await createimg.create(user);
                            new ButtonsClass(i.message,attachment,user);
                          }, 1000);
                          
                        });
                    }
                break;

                case "CreateImg3":
                    if (i.user.id === CCc.get("messages",i.user.id)) {
                        i.deferUpdate();
                        var embed = CreateImg_embed.get();
                        var user = i.user.id;
                        var mouthsmax = set.maxmouths;
                        if (CCc.get("mouth",user) !== mouthsmax) {
                          CCc.set("mouth",user,CCc.get("mouth",user)+1);
                        }else{
                          CCc.set("mouth",user,0);
                        }
                        i.message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
                        .then(messages => {
                          
                          messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []});

                          setTimeout(async() => {
                            var attachment = await createimg.create(user);
                            new ButtonsClass(i.message,attachment,user);
                          }, 1000);
                          
                        });
                    }
                break;    
                
                case "CreateImg4":
                    if (i.user.id === CCc.get("messages",i.user.id)) {
                        i.deferUpdate();
                        var embed = CreateImg_embed.get();
                        var user = i.user.id;
                        var shirtmax = set.maxshirt;
                        if (CCc.get("shirt",user) !== shirtmax) {
                          CCc.set("shirt",user,CCc.get("shirt",user)+1);
                        }else{
                          CCc.set("shirt",user,0);
                        }
                        i.message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
                        .then(messages => {
                          
                          messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []});

                          setTimeout(async() => {
                            var attachment = await createimg.create(user);
                            new ButtonsClass(i.message,attachment,user);
                          }, 1000);
                          
                        });
                    }
                break;                 

                case "CreateImg5":
                    if (i.user.id === CCc.get("messages",i.user.id)) {
                        i.deferUpdate();
                        var embed = CreateImg_embed.get();
                        var user = i.user.id;
                        var trousersmax = set.maxtrousers;
                        if (CCc.get("trousers",user) !== trousersmax) {
                          CCc.set("trousers",user,CCc.get("trousers",user)+1);
                        }else{
                          CCc.set("trousers",user,0);
                        }
                        i.message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
                        .then(messages => {
                          
                          messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []});

                          setTimeout(async() => {
                            var attachment = await createimg.create(user);
                            new ButtonsClass(i.message,attachment,user);
                          }, 1000);
                          
                        });
                    }
                break;         

                case "CreateImg7":
                    if (i.user.id === CCc.get("messages",i.user.id)) {
                        i.deferUpdate();
                        var embed = CreateImg_embed.get();
                        var user = i.user.id;
                        if (CCc.get("gender",user) === "b") {
                            CCc.set("gender",user,"g");
                          }else{
                            CCc.set("gender",user,"b");
                          }
                        i.message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
                        .then(messages => {
                          
                          messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []});

                          setTimeout(async() => {
                            var attachment = await createimg.create(user);
                            new ButtonsClass(i.message,attachment,user);
                          }, 1000);
                          
                        });
                    }
                break;     

                case "CreateImg8":
                    if (i.user.id === CCc.get("messages",i.user.id)) {
                        i.deferUpdate();
                        var embed = CreateImg_embed.get();
                        var user = i.user.id;
                        var maxcolor = set.maxcolor;
                        if (CCc.get("color",user) !== maxcolor) {
                          CCc.set("color",user,CCc.get("color",user)+1);
                        }else{
                          CCc.set("color",user,0);
                        }
                        i.message.channel.messages.fetch({around: CCc.get("msg",user), limit: 1})
                        .then(messages => {
                          
                          messages.first().edit({content: `<@${user}>`,files: [],components: [], embeds: [embed],attachments: []});

                          setTimeout(async() => {
                            var attachment = await createimg.create(user);
                            new ButtonsClass(i.message,attachment,user);
                          }, 1000);
                          
                        });
                    }
                break;                   
            }
        }
    });
}