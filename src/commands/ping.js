const { CommandInteraction, EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { DateTime } = require('luxon');

module.exports = {
   data: new SlashCommandBuilder()
      .setName('ping')
      .setDescription("Mengecek apakah bot masih bekerja atau tidak"),

   /**
    * @param {CommandInteraction} interaction 
    */

   async execute(interaction) {
      await interaction.reply({ content: '**Ya!** Saya masih hidup kok <:choo:863430823465713684>', ephemeral: true });
   }
}