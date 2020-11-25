const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const data = require('./player.json');

const client = new Discord.Client();
const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('Oof Dabber just slid into the server');
});

const login = [];

//---------Redirect to files-----------
client.on ('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    } 

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'login') return client.commands.get('login').execute(message, args);
    if (!data[message.author.id]) {
        message.reply('You need to make an account using `plz login`');
    } else {
        try {
            client.commands.get(command).execute(message, args);
        } catch (err) {
            if (err) message.reply('That was not a vaild command! please type `plz help` for help.');
        }
    }
});

client.login(token);