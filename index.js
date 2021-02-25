//seedyBot
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

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
                msg.reply("!quote - Creates and saves a quote, or shows a saved quote!\n     Type a phrase after the \"!quote\" command to save it!\n     Type a number after the \"!quote\" command to show a saved quote!");
                break;
            case 'quote':
                if (!isNaN(args[1])){
                    //Print a quote
                    if (fs.existsSync(args[1] + ".txt")){
                        msg.reply(fs.readFileSync(args[1] + ".txt", 'utf8'));
                    }
                    else {
                        msg.reply("Sorry, this quote doesn't exist!");
                    }
                } else{
                    //Make a quote
                    i = 0;
                    test = 1;
                    while (test == 1){
                        if (fs.existsSync(i + ".txt")){
                            i = i + 1;
                        }
                        else {
                            test = 0;
                        }
                    }
                    fileNum = i;
                    fileName = fileNum + ".txt";
                    fileText = ""
                    //Take all "arguments" left in the command string and convert them to text for the file.
                    for (chk = 1; args[chk] != undefined; chk++){
                        fileText = fileText + args[chk] + " ";
                    }
                    if(fileText.length < 6){
                        msg.reply("Sorry, message too short!");
                    } else{
                        msg.reply("Saved as quote #" + i);
                        fs.writeFileSync(fileName, fileText);
                    }
                }               
        }
    }
});

bot.login(token);