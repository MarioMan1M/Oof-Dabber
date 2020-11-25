const fs = require('fs');
const data = require('../player.json');

module.exports = {
    name: 'dab',
    description: "dabs",
    execute(message, args) {
        let randomNum = Math.floor(Math.random() * 750)
        data [message.author.id] = {
            money: data[message.author.id].money + randomNum,
            bank: data[message.author.id].bank,
            bankStorage: data[message.author.id].bankStorage,
            messageNum: data[message.author.id].messageNum,
        }
        fs.writeFileSync('./player.json', JSON.stringify(data, null, 2));
        message.reply('You got ' + randomNum + ' coins')
    }
}