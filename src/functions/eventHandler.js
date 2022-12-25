const { readdirSync } = require('fs');
const path = require('path');

function eventHandler(client) {
   const eventFolder = readdirSync(path.join(__dirname, '..', 'events')).filter((file) => file.endsWith('.js'));

   for(const file of eventFolder) {
      const event = require(path.join(__dirname, '..', 'events', file));
      if(event.once) {
         client.once(event.name, (...args) => event.execute(...args));
      } else {
         client.on(event.name, (...args) => event.execute(...args));
      }
   }
}

module.exports = { eventHandler };