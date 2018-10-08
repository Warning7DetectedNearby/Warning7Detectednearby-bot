const Commando = require('discord.js-commando');
const discord = require('discord.js')
const TOKEN = 'NDczNDg1MzMxMjc1MDU1MTE0.Dpua9w.7hOS1N3p5hIuaZO7-JeNjrzqWew'
const bot = new Commando.Client({
    commandPrefix: "7!",
    owner: '357528519158530048',
    })

bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('misc', 'Misc');
bot.registry.registerGroup('info', 'Info');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('ready', function(){
    console.log("Online!")
    bot.user.setActivity("7!help - [V2.0]", {type: "PLAYING"})
});

bot.on('message', function(message){
    
    if(message.content == "what is my avatar")
    {
    
        var PFP = new discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(message.author.avatarURL)

        message.channel.sendEmbed(PFP);
    }
});

bot.login(TOKEN);