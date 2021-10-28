


const fs = require("fs");
// require("./Commands");
module.exports = (client) => {
// fs.readdirSync("./Event/Dropdown")
// 	.filter(file => file.endsWith(".js"))
// 	.forEach(file => {
// 		const Dropdown = require(`./Dropdown/${file}`);
// 		console.log(`[System] Event/Dropdown/${file} loaded`);
//         Dropdown(client);
// 		// client.commands.set(command.name, command);
// 	});
	fs.readdirSync("./Event/Buttons")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		const Buttons = require(`./Buttons/${file}`);
		console.log(`[System] Event/Buttons/${file} loaded`);
        Buttons(client);
	});
    // fs.readdirSync("./Event/Config")
	// .filter(file => file.endsWith(".js"))
	// .forEach(file => {
	// 	const conn = require(`./Config/${file}`);
	// 	console.log(`[System] Event/Config/${file} loaded`);
    //     new conn(client);
	// 	// client.commands.set(command.name, command);
	// });    
}