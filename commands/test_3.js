const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('2b_test_3')
        .setDescription('三号测试命令'),
    async execute(interaction) {
        await interaction.reply('ok_3')
    },
}