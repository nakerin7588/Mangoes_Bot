module.exports = {
    name: "clear",
    description: "Clears the mentioned number of messages(Max. 100)",
    usage: "!clear <number>",
    UserPerms: ["MANAGE_MESSAGES"],
    BotPerms: ["MANAGE_MESSAGES"],
    cooldown: 5,

    async execute(client, message, cmd, args, Discord) {

            if (!args[0]) return message.reply("Enter the number of messages that you want to clear")

            if (isNaN(args[0])) return message.reply("The message deletion number should be in an integer")

            if (args[0] > 100) return message.reply("You can't clear more than 100 messages")

            if (args[0] < 1) return message.reply("You can't clear less than 1 message")

            const messages = args[0]

            let clearEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(`✅ - Mangoes is going to clear message \`${messages}\``)

            await message.reply({ embeds: [clearEmbed] })
            await message.channel.bulkDelete(1, true).catch(err => {

                if (err.code !== 10008) return console.log(err)
            })

            await message.channel.bulkDelete(messages, true).catch(err => {

                if (err.code !== 10008) return console.log(err)
            })

            //discord doesn't allow bot to clear messages older than 14 days, so by writing `true` , its gonna bypass messages older than 14 days
    }
}

