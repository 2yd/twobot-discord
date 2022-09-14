const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('2b_button_test')
        .setDescription('按钮测试'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('点我')
					.setStyle(ButtonStyle.Primary),
			);
		await interaction.reply({ content: '快点我', components: [row] });
    }
}