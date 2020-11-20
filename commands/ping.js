module.exports = {
    name: 'ping',
    discription: "this is ping command!",
    execute(message, args) {
        message.channel.send('pong!');
    }
}