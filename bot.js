const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('./auth.json');
const prefix = new String("?");

client.on("ready", () => {
  console.log("Connected");
  console.log("Logged in as: ");
  console.log(client.user.username + ' - (' + client.user.id + ')'); 
});

client.on("message", (message) => {
//meme retorts
	if (message.cleanContent.indexOf("omae wa") >= 0){
		message.channel.send("Nani?!");
	}
	
//bot commands
	if (message.content.startsWith(prefix)){
	switch(message.content.substring(1)){
		
		case "ping":
			message.channel.send("Pong!");
		break;
		case "test":
			message.channel.send({embed: {
			color: 3447003,
			author: {
				name: client.user.username,
				icon_url: client.user.avatarURL
			},
			title: "Testing myaa.",
			url: "http://google.com",
			description: "Rich Embed Test!",
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL,
				text: "boo"
			}
			}});
		break;
	}}
});

client.login(auth.token);

