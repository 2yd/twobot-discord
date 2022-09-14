require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
	intents: [GatewayIntentBits.Guilds,GatewayIntentBits.MessageContent,GatewayIntentBits.DirectMessages],
	partials: ['MESSAGE','CHANNEL']
});

client.once('ready', () => {
    console.log('twobot is ready')
})

client.on('messageCreate',async (msg) => {
	console.log(msg)
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === '2b') {
		await interaction.reply('我测你们码');
	}
});

client.login(process.env.BOT_TOKEN)


