const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();
const { RichEmbed } = require("discord.js");

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Hoodini!");
  client.user
    .setActivity("with myself", { type: "PLAYING" })
    .then(presence =>
      console.log(
        `Activity set to ${presence.game ? presence.game.name : "none"}`
      )
    )
    .catch(console.error);
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }

  // if (command === "maps") {
  //   client.commands.get("maps").execute(message, args);
  // }
  // if (message.content.startsWith(`${prefix}kick`)) {
  //   let member = message.mentions.members.first();
  //   member.kick().then(member => {
  //     message.channel.send("👋 " + member.displayName);
  //   });
  // }
  // if (message.content.startsWith(`${prefix}ban`)) {
  //   let member = message.mentions.members.first();
  //   member.ban().then(member => {
  //     message.channel.send("👋 " + member.displayName);
  //   });
  // }
});

client.login(token);
