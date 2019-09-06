const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
bot.user.setStatus('dnd')
  .then(console.log)
  .catch(console.error);
  
    message.delete().catch();
  (message.channel.send(`Set status to "dnd"!`).then(msg => msg.delete(5000)));
  
}

module.exports.help = {
    name: "dnd"
}
