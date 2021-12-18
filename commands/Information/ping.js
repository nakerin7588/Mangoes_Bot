module.exports = {
    name: 'ping',
    aliases: ['latency', 'lat'],
    description: "Sends the bot current ping",
    usage: "!ping",
    cooldown: 10,
    UserPerms: ["MANAGE_MESSAGES"],
    BotPerms: ["MANAGE_MESSAGES"],      

    //To convert it into hours, use 1* 60 *60 --> 1 hour    

    execute(client, message, cmd, args, Discord) {

        message.reply("Calculating bot's ping...").then((msg) => {

            const ping = msg.createTimestamp = message.createTimestamp  

            const pingEmbed = new Discord.MessageEmbed()    
                .setColor("RED")
                .setTitle("🕐 Pong!")
                .addFields([
                    { name: "Bot Latency 🤖:", value: `${ping}` },
                    { name: "API Latency 💪:", value: `${client.ws.ping}` }
                ])
                .setTimestamp();
            msg.edit({ content: "✅ - Well, this is the current ping!", embeds: [pingEmbed] })
        })
    }
}