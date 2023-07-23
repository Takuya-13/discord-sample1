require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent // MEMO:こいつがないとチャットの値取得できない
	],
	partials: [Partials.Channel]
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
	if (message.content === 'ping') {
		message.reply('pong!');
	}
});

client.login(process.env.TOKEN);

//comment
