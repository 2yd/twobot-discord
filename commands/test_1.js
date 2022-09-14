const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('abcde')
        .setDescription('一号测试命令'),
    async execute(interaction) {
        await interaction.reply('ok_1')
    },
}