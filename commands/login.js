module.exports = {
    name: 'login',
    description: "Sends login message",
    execute(message, args) {
        message.channel.send('You need to make an account using `plz login`');
    }
}
