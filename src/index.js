const { Client, Collection, Partials } = require('discord.js');
const { commandHandler } = require('./functions/commandHandler');
const { eventHandler } = require('./functions/eventHandler');

const client = new Client({
   intents: 131071,
   partials: [
      Partials.Channel,
      Partials.GuildMember,
      Partials.GuildScheduledEvent,
      Partials.Message,
      Partials.Reaction,
      Partials.ThreadMember,
      Partials.User
   ]
});

client.bot = require('./config/bot.json');
client.commands = new Collection();

client.login(client.bot.TOKEN).then(() => {
   commandHandler(client);
   eventHandler(client);
});