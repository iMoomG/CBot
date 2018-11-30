const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on("ready", () => { // ßæÏ ÑíäÈæ
  function lol() {
    client.guilds.get('448097257284304897').roles.find("name", "「  OWNER  」").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});




client.login(process.env.BOT_TOKEN);
