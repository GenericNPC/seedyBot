//seedyBot
const Discord = require('discord.js');
const bot = new Discord.Client();
i = 0;

const token = "";
const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Hoping to grow into some nice bread someday...\nType \"!help\" for commands!');
    setInterval(() => {
        bot.user.setActivity('Hoping to grow into some nice bread someday...\nType \"!help\" for commands!');
    }, 5000000);
});

bot.on('message', msg => {
    if (msg.content[0] == '!') {
        let args = msg.content.substring(PREFIX.length).split(" ");
        switch (args[0]) {
            case 'help':
                msg.reply("Sorry, I don't do anything yet, but my creator will patch something in soon!");
        }
    }
});

bot.login(token);