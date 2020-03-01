const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
  name: "meme",
  description: "Sends an epic meme",
  async execute(message, args) {
    const subReddits = ["dankmeme", "meme", "me_irl"];
    // Grab a random property from the array
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    // Get a random image from the subreddit page
    const img = await randomPuppy(random);
    const embed = new RichEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setTitle(`From /r/${random}`)
      .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
  }
};
