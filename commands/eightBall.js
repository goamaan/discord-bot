const eightBall = [
  "As I see it, yes.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don’t count on it.",
  "It is certain.",
  "It is decidedly so.",
  "Most likely.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Outlook good.",
  "Reply hazy, try again.",
  "Signs point to yes.",
  "Very doubtful.",
  "Without a doubt.",
  "Yes.",
  "Yes – definitely.",
  "You may rely on it."
];

module.exports = {
  name: "8ball",
  description: "Eight ball answers",
  async execute(message, args) {
    if (!args.length) return;
    const i = Math.floor(Math.random() * eightBall.length);
    const reply = eightBall[i];
    await message.channel.send(`${message.author} ${reply} 🦉`);
  }
};
