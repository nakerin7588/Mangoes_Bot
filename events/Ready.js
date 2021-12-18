const { types } = require("util")
const client = require("../index")

client.on('ready', async () => {
    console.log(`${client.user.tag} is now online!`)
    client.user.setActivity("Mangoes", {type : "PLAYING"} )    
})