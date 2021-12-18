const player = require("../../client/player")
const Discord = require("discord.js")


module.exports = {
    name: "skip",
    description: "⏭ Skips the current song & disconnect",

    run: async (client, interaction, options) => {

        try {
            if (!interaction.member.voice.channel) return interaction.followUp({ content: "You have to be in the voice channel!" })

            if (interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.followUp({ content: "You have to be in the same voice channel with me!" })

            const queue = player.getQueue(interaction.guildId)

            if (!queue.playing) return interaction.followUp({ content: "No music is currently being played in the sever!" })
            //if song is being played ,it will be skipped
            queue.skip()

            interaction.followUp({ content: `The current song has been skipped ` })
        } catch (err) { 
            const errEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription("‼ - An error occured while executing the command!")

            interaction.followUp({ embeds: [errEmbed] })
            console.log(err) 
        }
    }
}