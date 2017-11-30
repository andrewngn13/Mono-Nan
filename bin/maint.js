const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('./auth.json');

client.on("ready", () => {
  console.log("Connected");
  console.log("Logged in as: ");
  console.log(client.user.username + ' - (' + client.user.id + ')\n\n'); 
  client.user.setPresence({ status: "idle", game: { name: "maint" } });
});


client.login(auth.token);