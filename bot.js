
const {Client, GatewayIntentBits} = require("discord.js");
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

const config = require('./config.json');
const token = config.token

client.on("ready", () =>{
    console.log("The bot is online."); //message when bot is online
});

client.login(token);