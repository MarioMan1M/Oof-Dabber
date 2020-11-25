const fs = require('fs');
const player = require('../player.json');
const playerData = JSON.parse(fs.readFileSync('./player.json'))

module.exports = {
    name: 'login',
    description: "Sends login message",
    execute(message, args) {
        if (!args.length) {
            if (playerData[message.author.id]) {
                message.reply('You have already loged in');
                return;
            }

            player [message.author.id] = {
                money: 0,
                bank: 0,
                bankStorage: 100,
                messageNum: 0,
            }

            fs.writeFileSync('./player.json', JSON.stringify(player, null, 2))
            message.reply('You have logged in :D')
        }
    }
}
