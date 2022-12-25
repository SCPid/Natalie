const { Events, CommandInteraction } = require('discord.js');
const client = require('../index');

module.exports = {
   name: Events.InteractionCreate,

   execute(interaction, client) {
      if(!interaction.isChatInputCommand()) return;

      const command = interaction.client.commands.get(interaction.commandName);
      if(!command) return;

      command.execute(interaction, client);
   }
}