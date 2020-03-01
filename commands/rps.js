module.exports = {
  name: "rps",
  description: "Rock Paper Scissors",
  async execute(message, args) {
    const choices = ["r", "p", "s"];
    if (args[0] === undefined) {
      message.reply(
        "Input either rock(r), paper(p), or scissors(s) after the command"
      );
      return;
    } else if (
      args[0].toLowerCase() === "r" ||
      args[0].toLowerCase() === "p" ||
      args[0].toLowerCase() === "s"
    ) {
      const userChoice = args[0].toLowerCase();
      const botChoice = choices[Math.floor(Math.random() * choices.length)];
      message.reply(
        `Your choice ${userChoice} Bot's choice: ${botChoice}. ${getResult(
          userChoice,
          botChoice
        )} `
      );
    } else {
      message.reply(
        "Valid inputs are rock (r) paper (p) scissor(s). Try again"
      );
      return;
    }
    function getResult(user, bot) {
      if (
        (user === "r" && bot === "s") ||
        (user === "p" && bot === "r") ||
        (user === "s" && bot === "p")
      ) {
        return "You won!";
      } else if (user === bot) {
        return "It's a tie!";
      } else {
        return "You lost!";
      }
    }
  }
};
