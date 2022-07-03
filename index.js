const { Client, Collection, Intents } = require('discord.js');
const { readFile, appendFile } = require('fs');

const blacklist = readFile(blacklist.txt).split;
const cmdPfx = '.';
const token = "OTI2MjUwMTUxMDAwMDM5NDI1.GygWxH.4PR-iIcdiTVlmXbHt-rWv0It612L_LOfffj6Cg";
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'], 
    });


bot.on('ready', () => {
    console.log('logged in')
});



bot.on('message', msg => { //console yells at you for using message event, but messageCreate has longer response time bot work for ping pong however
    if (msg.author.bot) {
        return
    }

    let message = msg.content.split(' ');
    for (var i = 0; i < message.length; i++) {
        if (message[i] === 'malding' || message[i] === 'mald') {
            msg.channel.send("don't mald, you've always been this bad, you're just having a bad day.");
        };
        
        if (message[0] === (cmdPfx + 'blacklist')) {
            console.log('blacklist command detected');
            console.log('adding ' + message[1] + ' to blacklist');
            appendFile(blacklist.txt, message[1]);
        }
    };

    for (var i = 0; i < blacklist.length; i++) {
        if (msg.author.username === blacklist[i]) {
            msg.channel.send('Please... stop messaging');
        }
    }

    if (msg.author.id === '323277455706161152') {
        msg.channel.send('Jace... Just don\'t');
    }
    
    if (msg.content === 'ping') {
        console.log('message recieved from ' + msg.author.username + msg.author.tag); //username is the, you guessed it, username, and the tag is the numbers after the user's name
        msg.channel.send('pong');
    }

    if (msg.content === 'pong') {
        msg.channel.send('ping');
    }

    if (msg.content === (cmdPfx + 'test')) {
        msg.channel.send('JS bot is responsive');
    }

});

bot.login(token);