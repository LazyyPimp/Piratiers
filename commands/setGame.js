module.exports.run = (bot, message, args, discord) => {
 var game = args.join(' ')
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
   if (!game) {
    message.channel.send(`:ok_hand: Okay, I will set my activity back to normal!`)
    bot.user.setActivity(`.help | ${bot.guilds.size} servers`, {type: "WATCHING"})
  } else {
    bot.user.setActivity(`${game}`, {type: "PLAYING"})
    message.channel.send(`:ok_hand: Okay, I will set my activity to '${game}'!`)
  }
  } else {
     message.channel.send("Nope!")
  } 
}

module.exports.help = {
  name: "setGame"
  }
