const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
bot.user.setStatus('idle')
  .then(console.log)
  .catch(console.error);
 
   message.delete().catch();
  (message.channel.send(`Yeeted on your ass bro fuck`)
  (message.author.send(`Set status to "idle"!`));

}

module.exports.help = {
    name: "idle"
}
