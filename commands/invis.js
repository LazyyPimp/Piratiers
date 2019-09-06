const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
bot.user.setStatus('invisible')
  .then(console.log)
  .catch(console.error);
    message.delete().catch();
    (message.author.send(`Set status to "invisible"!`));

}

module.exports.help = {
    name: "invis"
}
