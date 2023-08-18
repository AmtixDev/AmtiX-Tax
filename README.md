<div align="center">
    <br />
    <p>
        <a href="https://amtix-tax.repl.co/"><img src="https://amtix-tax.repl.co/img/web_banner.png" width="546" alt="Amtix-Tax" /></a>
    </p>
    <p>
    <a href="https://discord.gg/amtix-1k-1097821881245126768"><img src="https://img.shields.io/discord/1097821881245126768?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/amtix-tax"><img src="https://img.shields.io/npm/v/amtix-tax?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/amtix-tax"><img src="https://img.shields.io/npm/dt/amtix-tax?maxAge=3600" alt="NPM downloads" /></a>
    </p>
  <p>
        <a href="https://amtixdev.xyz"><img src="https://media.discordapp.net/attachments/1132015920815014082/1133285475164094605/Powered_By_AmtiXDev_With_Color.png?width=159&height=33" alt="AmtiXDev" /></a>
    </p>

</div>


# Examples/How Package AmtiX-Tax Work?

## How To Install Package?

```js
npm install amtix-tax
```

## Example How Package Work For Discord.js Version v12?

```js
// Discord Package
const Discord = require('discord.js');
const client = new Discord.Client();

// AmtiX-Tax Package
const amtixtax = require('amtix-tax');

// Bot Prefix
const prefix = "Your Bot Prefix Here";

// Code
client.on("message", message => {
  if(message.content.startsWith(prefix + "tax")) {
    let amount = message.content.split(" ").slice(1).join(" ");
    if(!amount) return message.channel.send("Amount Cannot Be Empty")
    let taxs = amtixtax.tax(amount,true) // true will accept amount like this 1.7m or 100k
    if(!taxs)return message.channel.send("**Put A Valid Number**")
    const embed = new Discord.MessageEmbed()
    .addField("**The bot will take**",`**${taxs.difference}**`)
    .addField("**The amount you need to transfer**",`**${taxs.tax}**`)
    message.channel.send(embed);
  }});

// Client Login
client.login("your token here");
```

## Example How Package Work For Discord.js Version v13/v14?

```js
// Discord Package
const { Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, Message, MessageEmbed } = require('discord.js');
const client = new Client({
	intents: 131071, // Intents Calculator : https://ziad87.net/intents/
	partials: ['CHANNEL'],
  });

// AmtiX-Tax Package
const amtixtax = require('amtix-tax');

// Bot Prefix
const prefix = "Your Bot Prefix Here";

// Code 
client.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "tax")) {
    let amount = message.content.split(" ").slice(1).join(" ");
    if(!amount) return message.channel.send("Amount Cannot Be Empty")
    let taxs = amtixtax.tax(amount,true) // true will accept amount like this 1.7m or 100k
    if(!taxs)return message.channel.send("**Put A Valid Number**")
    var embed = new Discord.MessageEmbed()
    .setTitle("Probot Tax")
    .addField("**The bot will take**",`**${taxs.difference}**`)
    .addField("**The amount you need to transfer**",`**${taxs.tax}**`)
    message.channel.send({embeds: [embed]});
  }});

// Client Login
client.login("your token here");
```

## Example How Package Work For Discord.js Version v13 Handler?

```js
const { MessageEmbed, Permissions } = require("discord.js");
const amtixtax = require('amtix-tax');

module.exports = {
    name: 'tax',
    desription: 'Probot tax',
    permission: ["SEND_MESSAGES"],
    async execute(client, message, args){
    let amount = message.content.split(" ").slice(1).join(" ");
    if(!amount) return message.channel.send("Amount cannot be empty")
    let taxs = amtixtax.tax(amount,true) // true will accept amount like this 1.7m or 100k
    if(!taxs)return message.channel.send("Put a valid number")

    const taxembed = new MessageEmbed()
    .addField("- **The bot will take**",`**${taxs.difference}**`)
    .addField("- **The amount you need to transfer**",`**${taxs.tax}**`)
    .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL({dynamic: true})}`)
    .setTimestamp()
   await message.reply({embeds: [taxembed]})
     }
}
```

# By [AmtiXDev](https://www.youtube.com/@xUnDarkArTz)

![Image](https://user-images.githubusercontent.com/107303548/248915710-9dd3b4cf-5eb0-4e44-b5bd-20306947a715.png)

If You Need Help About How The Npm Package Work? Contant Me [HERE](https://discord.gg/amtix-1k-1097821881245126768)
