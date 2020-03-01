module.exports = {
  name: "list",
  description: "List All Commands",
  async execute(message, args) {
    message.reply(
      `List of All Commands: 🦉
!ping: Bot says pong
!meme: Random Meme
!maps 'n': Returns n random csgo maps to choose
!8ball 'something here': Magic 8 ball messages, ask it a question!
!rps 'x': Rock Paper Scissor - use 'r' 's' or 'p' instead of x`
    );
  }
};
