const Discord = require("discord.js");
var request = require('request');
const client = new Discord.Client();
const auth = require('./auth.json');
const prefix = new String("?");

client.on("ready", () => {
  console.log("Connected");
  console.log("Logged in as: ");
  console.log(client.user.username + ' - (' + client.user.id + ')\n\n'); 
});

client.on("message", (message) => {
//meme retorts
	var lwCaseMsg = message.cleanContent.toLowerCase();
	if (lwCaseMsg.indexOf("omae wa") >= 0){
		message.channel.send("Nani?!");
	}
	if(message.author.bot === true){}
	else{
		if (lwCaseMsg.indexOf(":rainboawoo:") >= 0){
			const emoji = client.emojis.find("name", "rainboawoo");
			message.channel.send(emoji.toString());
		}
	}
	
//bot commands
	if (message.content.startsWith(prefix)){
	var msgArr = message.content.substring(1).split(" ");
	switch(msgArr[0]){//message.content.substring(1)
		case "help":
			message.channel.send({embed: {
			color: 3447003,
			title: "**__Help Commands__**",
			fields: [{
				name: "?help",
				value: "List of commands"
				},{
				name: "?ping",
				value: "Pong!"
				}],
			timestamp: new Date()
			}})
		break;
		case "ping":
			message.channel.send("Pong!");
		break;
		case "weapon":
		try{
			var wpnPlate;
			request(auth.pso2URL + msgArr[1],
			function (error, response, body) {
				//console.log('error:', error); // Print the error if one occurred
				//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
				//console.log('body:', body); // Print the HTML for the Google homepage.
				//wpnPlate = body.toString();
				wpnPlate = (body.toString()).substring(body.indexOf("{{Weapon"), body.indexOf("}}")+2);
				console.log(wpnPlate);
				var pgArr = wpnPlate.toString().split("|");
				console.log("\n\n" + pgArr);
							message.channel.send("Weapon! ");
			message.channel.send({embed: {
			color: 3447003,
			title: "Testing myaa.",
			description: "Weapon Test!",
			timestamp: new Date(),
			fields: [{
				name: "JP Name",
				value: pgArr[1]
				},{
				name: "?ping",
				value: "Pong!"
				},{
				name: "?test",
				value: "Test a rich embed."
				}],
			}});
			});
		}
		catch (e){
			console.error(e, e.stack);
		}
		break;
		default:
	}}
});

client.login(auth.token);

