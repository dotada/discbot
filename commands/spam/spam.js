const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spam')
        .setDescription('send msg'),
    async execute(interaction) {
        const memb = client
        await interaction.reply('qj mi huq');
    },
};