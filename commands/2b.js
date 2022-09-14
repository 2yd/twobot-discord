const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('2b')
        .setDescription('呼唤2b'),
    async execute(interaction) {
        if (interaction.channel.name === "发电站"){
            await interaction.reply('叫我干嘛，蕨死你')
        }
        else {
            await interaction.reply('twobot在的哦')
        }
    }
}