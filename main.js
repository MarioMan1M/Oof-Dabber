const Discord = require('discord.js');
const {prefix, token} = require('./config.json') 
const client = new Discord.Client();

const prefix = 'plz ';

//---------configuations---------
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('Oof Dabber just slid into the server');
});

const login = ['']
const player = {
    balance: 0,
    bank: 0,
    bankspace: 100,
    commandNum: 0
}

//---------Redirect to files-----------
client.on ('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'login') {
        login.push(message.author);
        message.channel.send('You have successfully logged in. :D');
    } else if (!login.includes(message.author)) {
        client.commands.get('login').execute(message, args);
    } else if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } 
});

client.login(token);