const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/ztqsuL3.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: `*FAROOKSER*
 

        *Github link        _https://github.com/farookser-v1/ammu-mol*
 
       *Bot Making Video    _https://youtu.be/WrwRWAdw_hY_*

       *Audio commads-1     _https://github.com/farookser-v1/ammu-mol/tree/master/upload_*
 

       *Audio commads-2     _https://github.com/farookser-v1/ammu-mol/tree/master/uploads_*
  
  
      *Sticker commads      _https://github.com/farookser-v1/ammu-mol/tree/master/stickers_*
`}) 

})); 
