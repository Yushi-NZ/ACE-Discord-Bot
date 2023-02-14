const token = "NDAwNTc1ODkyMjEwMDU3MjM4.GJM9Ij.x8mHANoaJLxx7IUQyJwDmLsTKjWMjDLiLRl21o";
const {Client, GatewayIntentBits} = require("discord.js");
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.on("ready", () =>{
    console.log("The bot is online."); //message when bot is online
});

client.login(token);