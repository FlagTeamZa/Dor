


const fs = require("fs");
// const test = require("./cmd/test");
// require("./Commands");
const but = [];


module.exports = (client) => {
	var date1 = Date.now();
fs.readdirSync("./Buttons/buttons")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		const Button = require(`./buttons/${file}`);
		but[Button.name] = Button;
		// 
});
console.log(`[System] Buttons loaded process ${(Date.now() - date1) / 1000} sec`);
	// test.run(client);
client.on("messageCreate", async message => {
		if (message.author.bot) {
			return;
		}
		// console.log();
		var msg = message.content.split(" ");
			if (!cmd[msg[0]]) {
				return;
			}
		// }
			// console.log(cmd);
			if (cmd[msg[0]]) {
				cmd[msg[0]].run(message);
			}
			
			console.log(cmd[msg[0]].connect_msg);

		// console.log(`[System] Command ${file} loaded`);
        // command(client);
		// client.commands.set(command.name, command);
	

});
}