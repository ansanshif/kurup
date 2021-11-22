const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://wallpapercave.com/uwp/uwp1656018.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*KURUP bot created by Ans Anshif*
*Creator number : wa.me/918594013710?text=Hi%20ANSHIF.%20*

*Bot Support Group: https://youtu.be/_D4ZYuUSXjs*

*Githublink (Setup)  :    https://github.com/ansanshif/kurup*

*Audio commads :   https://github.com/ansanshif/kurup/tree/master/uploads*

*Sticker commads : https://github.com/ansanshif/kurup/tree/master/uploads*

*Video For Setting Bot : https://youtu.be/_D4ZYuUSXjs* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
