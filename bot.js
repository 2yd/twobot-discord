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

	if (commandName === 'ping') {
		console.log('received!')
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.login(process.env.BOT_TOKEN)


