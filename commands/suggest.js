const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

 let embed = new Discord.RichEmbed()

        var command = args[0];
        var suggestion = args.slice(1).join(" ");

        embed.setTitle('Upvote | Downvote')
        embed.setColor("F08080")
        embed.setDescription('Suggest features to our discord server with `.suggest <suggestion>`')
        embed.setThumbnail(`${message.author.avatarURL}`)
        embed.addBlankField(true)
        embed.addField('Suggestion',
        `${suggestion}`)
        embed.addField('Suggestion By',
        `<@${message.author.id}>`)

        if (message.guild.id === '580906154461495347')
        bot.channels.get('622845390429093909').send(embed).then(x=> x.react('👍').then(x.react('👎')))
        message.delete()
    }
   
   module.exports.help = {
    name: "test"
}
