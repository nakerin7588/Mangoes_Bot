module.exports = {
    name: 'test',
    aliases: 'hi',
    description: "just a test command",

    execute (client, message, cmd, args, Discord) {

        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("HEY!")

        message.reply({ embeds: [ embed ] });
        
    }
}