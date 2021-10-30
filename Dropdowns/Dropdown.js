


const fs = require("fs");
// const test = require("./cmd/test");
// require("./Commands");
const drps = [];


module.exports = (client) => {
	var date1 = Date.now();
fs.readdirSync("./Dropdowns/dropdowns")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		const Dropdown = require(`./dropdowns/${file}`);
		drps[Dropdown.name] = Dropdown;
		// 
});
console.log(`[System] Dropdown loaded process ${(Date.now() - date1) / 1000} sec`);
	// test.run(client);
    client.on("interactionCreate", async i => {
        if (i.isSelectMenu()) {
		// console.log();
	
			if (!drps[i.customId]) {
				return;
			}
		// }
			// console.log(cmd);
			if (drps[i.customId]) {
				await drps[i.customId].run(i);
			}
			

		}
	});
}