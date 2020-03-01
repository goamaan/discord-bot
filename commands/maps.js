const maps = ["Mirage", "Cache", "Dust 2", "Inferno", "Overpass"];

module.exports = {
  name: "maps",
  description: "Select Maps to play",
  async execute(message, args) {
    if (!args.length) return;
    if (args > maps.length) {
      await message.channel.send("Maximum number of maps is 5!");
      return;
    }
    const i = Math.floor(Math.random() * maps.length);
    const shuffled = maps.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, args);
    await message.channel.send(selected.toLocaleString());
  }
};
