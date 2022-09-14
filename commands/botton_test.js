const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('2b_button_test')
        .setDescription('按钮测试'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary_1')
					.setLabel('点我')
					.setStyle(ButtonStyle.Primary),
			);
		await interaction.reply({ content: '快点我', components: [row] });

		const collector = interaction.channel.createMessageCollector({ componentType: ComponentType.Button,time:15000})

		collector.on('collect', i => {
			if (i.user.id === interaction.user.id) {
				i.reply(`${i.user.id} 点击了${i.customeID}按钮`)
			} else {
				i.reply({content:`这个按钮不是给你的捏`,ephemeral:True})
			}
		})
		
		collector.on('end',collected => {
			console.log(`收集到${collected.size}个交互`)
		})
    }
}