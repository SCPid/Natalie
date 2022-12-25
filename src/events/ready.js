const { Events } = require('discord.js');
const chalk = require('chalk').default;
const { DateTime } = require('luxon');

module.exports = {
   name: Events.ClientReady,
   once: true,

   execute(client) {
      const nowTime = DateTime
         .now()
         .setLocale('id-ID')
         .setZone('Asia/Jakarta')
         .toFormat('HH:mm:ss');

      const logCtx = `${chalk.bold.blue(`[${nowTime}]`)} ${chalk.blue(`${client.user.tag} siap bekerja!`)}`;
      console.log(logCtx);
   }
}