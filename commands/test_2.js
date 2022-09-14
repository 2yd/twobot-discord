const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fghij')
        .setDescription('二号测试命令'),
    async execute(interaction) {
        await interaction.reply('ok_2')
    },
}