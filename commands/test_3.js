const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('klmno')
        .setDescription('三号测试命令'),
    async execute(interaction) {
        await interaction.reply('ok_3')
    },
}