


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
    client.on("interactionCreate", async i => {
        if (i.isButton()) {
		// console.log();
	
			if (!but[i.customId]) {
				return;
			}
		// }
			// console.log(cmd);
			if (but[i.customId]) {
				await but[i.customId].run(i);
			}
			

		}
	});
}