const chalk = require('chalk').default;
const { readdirSync } = require('fs');
const { DateTime } = require('luxon');
const path = require('path');

function commandHandler(client) {
   const commands = [];
   const commandFolder = readdirSync(path.join(__dirname, '..', 'commands')).filter((file) => file.endsWith('.js'));

   for(const file of commandFolder) {
      const command = require(path.join(__dirname, '..', 'commands', file));

      client.commands.set(command.data.name, command);

      commands.push(command.data.toJSON());
      continue;
   }

   client.application.commands.set(commands);

   const nowTime = DateTime
      .now()
      .setLocale('id-ID')
      .setZone('Asia/Jakarta')
      .toFormat('HH:mm:ss');

   const logCtx = `${chalk.bold.green(`[${nowTime}]`)} ${chalk.green('Berhasil mendaftarkan perintah!')}`;
   return console.log(logCtx);
}

module.exports = { commandHandler };