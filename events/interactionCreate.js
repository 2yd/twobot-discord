module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		if (interaction.isButton()) {
			await interaction.reply('点我干嘛')
		}
	},
};
