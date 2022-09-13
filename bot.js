const { fetch, setGlobalDispatcher, Agent } = require('undici')

setGlobalDispatcher(new Agent({ connect: { timeout: 30_000 } }) )
const { token } = require('./config.json');

console.log(token);
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('twobot is ready')
})

client.on('message',msg => {
    if (msg.content == 'ping') {
        msg.reply('pong!')
    }
})

client.login(token)