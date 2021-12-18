module.exports = {
    name: "setup",
    aliases: ["set"],
    description: "Clears the mentioned number of messages(Max. 100)",
    usage: "!set",
    UserPerms: ["ADMINISTRATOR"],
    cooldown: 5,

    async execute(client, message, cmd, args, Discord) {

        //if guild has no choice

        let choice = args[0];

        const toggleEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription("!! - Please provide a valid option between 'enable' or 'disable'!")

        const noChoiceEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("No Choice Selected")
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription("TEST")
            .addField('\u200B', "__General__")
            .addField("Welcome Channel", "Selection: `welcome`", true)
            .addField("Leave Channel", "Selection: `leave`", true)

        if (!choice) return message.reply({ embeds: [noChoiceEmbed] })

        //Getting the welcome Channel Status

        const getWelcomeChannel = await quickmongo.get(`welcome - ${message.guild.id}`)
        const welcomeChannelCheck = await quickmongo.fetch(`welcome - ${message.guild.id}`)

        let welcomeChannelStatus

        if (welcomeChannelCheck) {

            welcomeChannelStatus = `<#${getWelcomeChannel}`

        } else welcomeChannelStatus = 'No channel Set'

        const getLeaveChannel = await quickmongo.get(`leave - ${message.guild.id}`)
        const leaveChannelCheck = await quickmongo.fetch(`leave - ${message.guild.id}`)

        let leaveChannelStatus

        if (leaveChannelCheck) {

            leaveChannelStatus = `<#${getLeaveChannel}`

        } else leaveChannelStatus = 'No channel Set'

        //Getting Sever's Config

        if (choice === 'config') {

            const configEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${message.guild.name} Server's Configurtion`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription("TEST")
                .addField('\u200B', "__General__")
                .addField("Welcome Channel", `${welcomeChannelStatus}`, true)
                .addField("Leave Channel", `${leaveChannelStatus}`, true)
            message.reply({ embeds : [configEmbed]})

        }
    }
}