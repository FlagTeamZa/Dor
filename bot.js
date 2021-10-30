const Discord = require("discord.js");
const { Intents, MessageAttachment} = require("discord.js");
// const Command = require("./Command.js");
const cmd = require("./Commands/cmds");
// Event
// Event
// CreatePartyConfig
const intents = new Discord.Intents();
intents.add(Intents.FLAGS.GUILDS);
intents.add(Intents.FLAGS.GUILD_MESSAGES);
intents.add(Intents.FLAGS.GUILD_INTEGRATIONS);
intents.add(Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS);
intents.add(Intents.FLAGS.GUILD_MESSAGE_REACTIONS);
intents.add(Intents.FLAGS.DIRECT_MESSAGES);
// intents.add(Intents.FLAGS.);
// intents.add(Intents.FLAGS.GUILD_PRESENCES);
const client = new Discord.Client({ intents: intents});
const config = require("./config.json");
const CreatePartyConfig = require("./Event/Config/CreatePartyConfig");
const FriendConfigEvent = require("./Event/Config/FriendConfigEvent");
const UserConfigEvent = require("./Event/Config/UserConfigEvent");
const UserUniformEvent = require("./Event/Config/UserUniformEvent");
const Event = require("./Event/Event");
const timer = require("./timer/timer");
// timer
const fs = require("fs");
const UserSettingConfig = require("./Event/Config/UserSettingConfig");
const UserEconomyConfig = require("./Event/Config/UserEconomyConfig");
const UserInventory = require("./Items/Event/Inventory");
const button = require("./Buttons/button");
const dropdown = require("./Dropdowns/Dropdown");
config.varsion = config.varsion+1;
fs.writeFile("./config.json", JSON.stringify(config,null,4), (err) => {
    if (err) console.error(err)
 });
 Event(client);
 new UserInventory(0);
 new CreatePartyConfig(0);
 new UserConfigEvent(0);
 new UserUniformEvent(0);
 new FriendConfigEvent(0);
 new UserSettingConfig(0);
 new UserEconomyConfig(0);
 cmd(client);
 button(client);
 dropdown(client);
client.on('ready', ()=>{
    console.log("[System] BOT is ready.");


    client.user.setPresence(
        { 
            activities: [
                { 
                name: "v.5.3 BUILD "+config.varsion,
                type: "STREAMING",
                url: "https://www.youtube.com"
                }
            ], 
            status: 'online' 
        }
            );
            new timer();
    }); 
// client.on("messageCreate", async message => {
//     // message.author.bot
// });

client.login(config.token);