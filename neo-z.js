/*──────────────────────────────────────────────────────────
 *  🧩 NeoBot - Powered by NeoShiroko Labs
 *────────────────────────────────────────────────────────────
 *  🌐 Website  : https://www.neolabsofficial.my.id
 *  💬 WhatsApp : https://s.id/contact-zass
 *  📺 YouTube  : https://www.youtube.com/@ZassOnee
 *  🧠 GitHub   : github.com/zassonee/neobot
 *
 *  [ ! ] Jangan Hapus Wm Bggg
 *──────────── © 2025 Zass Onee. All rights reserved.───────────────────
 */

const { default:
makeWASocket,
fetchLatestBaileysVersion, 
downloadContentFromMessage,
useMultiFileAuthState,
BufferJSON,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
proto, generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
areJidsSameUser,
getContentType
} = require('@whiskeysockets/baileys')

const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const ytdl = require("@vreden/youtube_scraper")
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const pinterest = require('./library/sc/pinterest')
const { remini } = require('./library/sc/remini');
const readline = require("readline");
const crypto = require('crypto');
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./library/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./library/myfunc')
let afk = require("./library/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./library/premiun')
const NodeCache = require('node-cache');
const { buffer } = require('stream/consumers')

let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//——————————[ TIME ]——————————//

const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var neoytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var neoytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var neoytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var neoytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var neoytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var neoytimewisher = `Good Morning 🌄`
 } 
module.exports = neo = async (neo, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
 
//——————————[ CONST PELER = DIA ]——————————//
        const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '.'
const budy = (typeof m.text == 'string' ? m.text : '.')
        const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await neo.decodeJid(neo.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.key.fromMe ? (neo.user.id.split(':')[0]+'@s.whatsapp.net' || neo.user.id) : (m.key.participant || m.key.remoteJid)
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = isGroup 
  ? await neo.groupMetadata(m.chat).catch(() => ({})) 
  : {};
const groupName = groupMetadata.subject || '';
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const groupOwner = groupMetadata.owner || '';
const groupMembers = groupMetadata.participants || [];
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false


        const neoId = neo.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? neo.user.id.split(':')[0] + "@s.whatsapp.net" || neo.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = neoId.includes(senderId);
        expiredCheck(neo, m, premium);
        
        
//——————————[ DATABASE ]——————————//

const senderNumber = sender.split('@')[0]
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
const OWNER_FILE = path.join(__dirname, 'database', 'owner.json');
const isCreator = ownerNumber.includes(senderNumber) || isBot || senderNumber === ownernumber;
const swebnumber = JSON.parse(fs.readFileSync("./database/sellerweb.json"))

const isSellerWeb = swebnumber.includes(senderNumber) || isBot
const sscnumber = JSON.parse(fs.readFileSync("./database/sellersc.json"))
const sellerpanel = JSON.parse(fs.readFileSync("./database/panelseller.json"))
const isGcPanel = sellerpanel.includes(m.chat)
const sellerpanel2 = JSON.parse(fs.readFileSync("./database/panelseller2.json"))
const isGcPanel2 = sellerpanel2.includes(m.chat)
const sellerpanel3 = JSON.parse(fs.readFileSync("./database/panelseller3.json"))
const isGcPanel3 = sellerpanel3.includes(m.chat)
let db = JSON.parse(fs.readFileSync('./database/set.json'));
const isSellerSc = sscnumber.includes(senderNumber) || isBot

//——————————[ PRESET QUOTED ]——————————//

const qwb = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: `628555`, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: `${pushname}-sann 💬` } }, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "INR" }}}}

const qneo = { key:{ remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message:{ newsletterAdminInviteMessage: { newsletterJid: global.idSaluran, newsletterName: global.namach, caption: `${botname} Verified By ${ownername}`, inviteExpiration: 0}}}

const qwa = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: global.idSaluran,
    newsletterName: global.botname,
    caption: body
}}
}

//——————————[ FUNCTION ]——————————//

        async function balas(teks) {
            const po = {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.botname,
                            body: 'Version 2.0.0',
                            thumbnailUrl: global.imgmenu,
                            sourceUrl: '',
                            mediaType: 1,
                            renderLargerThumbnail: false
                    }
                },
                text: teks
            };
            return neo.sendMessage(m.chat, po, { quoted: qwa }
            );
        };
        
        async function reply(teks) {
        const mek = { text: teks };
        return neo.sendMessage(m.chat, mek, { quoted: m }
        );
        };

        neo.sendPresenceUpdate('uavailable', from)
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await neo.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await neo.getName(i)}\nFN:${await neo.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	function saveDb() {
    fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
}
let ownerList = [];
if (fs.existsSync(OWNER_FILE)) {
    try {
        ownerList = JSON.parse(fs.readFileSync(OWNER_FILE));
    } catch (e) {
        console.error("Gagal membaca owner.json:", e);
        ownerList = [];
    }
} else {
    fs.writeFileSync(OWNER_FILE, JSON.stringify([], null, 2));
}
async function saveOwnerList() {
    fs.writeFileSync(OWNER_FILE, JSON.stringify(ownerList, null, 2));
}
        const func = {
  capital: (text) => {
    return text ? text.replace(/\b\w/g, l => l.toUpperCase()) : '';
  }
};
const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}
const axios = require("axios");

neo.sendButtonDocThumbnail = async (chat, judul, teks, thumbUrl, button, quot) => {
  
  let getThumb = await axios.get(thumbUrl, { responseType: "arraybuffer" });
  let thumbBuffer = Buffer.from(getThumb.data, "binary");

  let msg = await generateWAMessageFromContent(chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: ments(teks),
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: global.idSaluran,
              serverMessageId: null,
              newsletterName: `${namach}`
            },
            externalAdReply: {
              showAdAttribution: true,
              containsAutoReply: true,
              title: `WABOT Artificial Intelligence`, 
              body: `Version ${versi}`,
              thumbnailUrl: global.imgthumb,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
            }
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: foot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: judul,
            subtitle: global.ownername,
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({
              document: fs.readFileSync("./package.json"),
              mimetype: "application/pdf",
              fileLength: 10000000000,
              jpegThumbnail: await reSize(await getBuffer(thumbUrl), 200, 200),
              fileName: `Studio Server Developer`
            }, { upload: await neo.waUploadToServer }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: button
          })
        })
      }
    }
  }, { quoted: quot });

  await neo.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
};
const font = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
        const separator = chalk.hex("#00ffd5")("\n<================= WABOT LOGGER =================>\n")
        const neoLabel = chalk.hex("#ff00c8")("[ WABOT MSG ]")
        const neoTime = chalk.hex("#00ffff")(new Date().toLocaleString())

if (m.message && m.isGroup && m.text.startsWith('.')) {
     console.log(separator)
     console.log(chalk.hex("#00ff88")(">> Group Detected"))
     console.log(
        neoLabel, chalk.bgHex("#101010").white(neoTime),
        chalk.bgHex("#0055ff").white(` ${budy || m.mtype} `)
    )
    console.log(chalk.hex("#ffaa00")("↳ From:"), chalk.hex("#00ff00")(pushname), chalk.hex("#999999")(m.sender))
    console.log(chalk.hex("#ffaa00")("↳ In Group:"), chalk.hex("#00ffcc")(groupName), chalk.hex("#666666")(m.chat))
} else {
    console.log(separator)
    console.log(chalk.hex("#00ff88")(">> Private Chat"))
    console.log(
        neoLabel, chalk.bgHex("#101010").white(neoTime),
        chalk.bgHex("#0055ff").white(` ${budy || m.mtype} `)
    )
    console.log(chalk.hex("#ffaa00")("↳ From:"), chalk.hex("#00ff00")(pushname), chalk.hex("#999999")(m.sender))
}
const downloadMp3 = async (Link, Quality = 128) => {
	try {
		if (!isUrl(Link)) return reply("❌ Enlace inválido, intenta nuevamente.");

		let data = await ytdl.ytmp3(Link, Quality);

		// Descargar el audio
		const audioBuffer = await fetch(data.download.url).then(res => res.buffer());
    await neo.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

		// Enviar el audio como nota de voz (PTT)
		await neo.sendMessage(m.chat, {
			audio: audioBuffer,
			mimetype: 'audio/mpeg',
			ptt: true, // Envío como nota de voz
			contextInfo: {
				forwardingScore: 9999999,
				isForwarded: true,
				externalAdReply: {
					title: `${data.metadata.title}`,
					body: "Studio Server Services",
					mediaType: 1,
					previewType: 0,
					renderLargerThumbnail: true,
					thumbnailUrl: data.metadata.thumbnail,
					sourceUrl: Link
				}
			}
		}, { quoted: qwa });

	} catch (error) {
		console.error("🔴 Error en `downloadMp3`:", error);
		await reply("❌ No se pudo descargar el audio.");
	}
};
const downloadMp4 = async (Link, Quality = 360) => {
	try {
		if (!isUrl(Link)) return reply("Hay un problema con tu URL, ¡inténtalo de nuevo!")
		let data = await ytdl.ytmp4(Link, Quality);
		const caption = `*${data.metadata.title}*
*⌬ Servicio* : Descarga
*⌬ ID* : ${data.metadata.videoId}
*⌬ Duracion* : ${data.metadata.timestamp}
*⌬ Subido* : ${data.metadata.ago}
*⌬ Vistas* : ${data.metadata.views}
*⌬ Calidad* : ${data.download.quality}
*⌬ Canal* : ${data.metadata.author.name}`;
await neo.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

		await neo.sendMessage(m.chat, {
			video: {
				url: data.download.url
			},
			caption: caption,
			gifPlayback: false
		}, {
			quoted: qwa
		});
	} catch (error) {
    await balas('Maaf, audio tidak bisa didownload.');
}
}
let pinterestSession = {};
const cooldowns = {}; // Format: { commandName: timestamp }
const cooldownTime = 60000; // 60 detik jeda, ubah sesuai kebutuhan
//——————————[ VALIDASI ]——————————//

const example = async (teks) => {
  const commander = `*📘 Format Perintah yang Benar:*
\n➤ *${prefix + command}* ${teks}

Hola ${m.pushName}, su comando se reconoce o los argumentos están incompletos.
\n⚠️ Nota: WABOT-AI solo procesa instrucciones válidas. No se tolerarán errores repetidos.`;

  neo.sendMessage(m.chat, {
    text: commander,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: `- Studio Server Sistema -`,
        body: 'La instrucción no se pudo procesar. Asegúrese de que el comando esté formateado correctamente.',
        thumbnailUrl: global.imgmenu,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: qneo });
};

const onlyGroup = async () => {
  neo.sendMessage(m.chat, {
    text: '*Fitur ini hanya bisa digunakan di dalam grup!*',
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: 'Akses Ditolak',
        body: 'Hanya grup yang diizinkan untuk menggunakan fitur ini.',
        thumbnailUrl: global.warning,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

const onlyAdmin = async () => {
  neo.sendMessage(m.chat, {
    text: '*Fitur ini hanya bisa digunakan oleh admin grup!*',
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: 'Akses Admin Diperlukan',
        body: 'Hanya admin grup yang dapat menggunakan perintah ini.',
        thumbnailUrl: global.warning,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

const botAdmin = async () => {
  neo.sendMessage(m.chat, {
    text: '*¡El bot debe ser administrador para ejecutar este comando!*',
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: 'Bot no administrador',
        body: 'Promueva el bot a administrador para continuar.',
        thumbnailUrl: global.warning,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};
  
        if (db.settings.gconly && !mek.key.remoteJid.endsWith('@g.us')) return;
        if (global.selfmode && !isCreator) return
        if (mek.mimetype === 'image/webp') {
    let media = await mek.download();
    let hash = crypto.createHash('md5').update(media).digest('hex');
    if (db.stickcmd[hash]) {
        let fakeMessage = { ...mek, message: { conversation: db.stickcmd[hash] } }
        require('./neo-z.js')(neo, fakeMessage, store);
    }
}
        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    balas(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                neo.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
      
//——————————[ COMMAND CASE ]——————————//

switch (command) {
case "menu": {
  const teksnya = `
  Sistema parte de, Studio Server Services *${global.botname}*

╭─⧫ *BOT INFO*
│• Nombre   : ${global.botname}
│• Version  : 2.0.0
│• Modo     : ${global.selfmode ? "Self" : "Publico"}
│• Admin    : ${global.ownername}
│• Lenguaje : Server Protocol Studio Server
╰────────────────────

⌬ Este en un serviodor, que sirve a WhatsApp Chats.
┗━━━━━━━━━━━━━━━━━━━━━┛`;

  const button = [
  {
    name: "single_select",
    buttonParamsJson: JSON.stringify({
      title: "Seleciona",
      sections: [
        {
          title: "Menu de comandos",
          rows: [
            { header: "Mostrar Menu", 
              title: "Muestra de Comandos", 
              description: 'Menu de comandos disponibles', 
              id: '.allmenu' },
            { header: "Info usuario", 
              title: "Estado del usuario", 
              description: 'Infromación del usuario', 
              id: '.info' },
            { header: "Admin BOT", 
              title: "Ver Info Admin", 
              description: 'info del administrador', 
              id: '.owner' },
            { header: "Estados del servidor", 
              title: "Estados del sistema", 
              description: 'Muestra estados del sistema del servidor', 
              id: '.ping' },
            { header: "Ayuda", 
              title: "Donar", 
              description: 'Apoya al desarrollador', 
              id: '.donasi' },
            { header: `Informe de ${global.botname}`, 
              title: "Informe", 
              description: 'Se mostra su informe', 
              id: '.sc' }
          ]
        },
        {
          title: "Controlar de Bot",
          rows: [
            { header: "Modo privado", 
              title: "solo admin bot", 
              description: 'Cambiar al modo Auto', 
              id: '.self' },
            { header: "Modo Publico", 
              title: "Solo admin bot", 
              description: 'Cambiar al modo público', 
              id: '.public' },
            { header: "Solo grupo verdadero", 
              title: "Solo propietario", 
              description: 'Habilitar el modo solo de grupo',
              id: '.gconly on' },
            { header: "Solo grupo Falso", 
              title: "Solo propietario", 
              description: 'Deshabilitar el modo de solo grupo', 
              id: '.gconly off' },
            { header: "Vista automática Sw activo", 
              title: "Solo propietario", 
              description: 'Habilitar vista automática Sw', 
              id: '.autoviewsw on' },
            { header: "Vista automática Sw inactivo", 
              title: "Solo Propietario", 
              description: 'Deshabilitar vista automática Sw', 
              id: '.autoviewsw off' },
              { header: "Funciones del Bot", 
              title: "Abre Menu", 
              description: 'Abre de nuevo el menu', 
              id: '.menu' }
          ]
        }
      ]
    }
    )
  },
  {
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
      display_text: "Studio Server Web",
      url: global.web,
      merchant_url: global.web
    })
  }
];

  await neo.sendButtonDocThumbnail(
    m.chat,
    `┏━━〔 *WABOT SISTEMA INTERFAS* 〕━━┓`,
    teksnya,
    global.imgdoc,
    button,
    qneo
  );

  await neo.sendMessage(m.chat, {
    audio: { url: global.vn },
    mimetype: 'audio/mpeg',
    ptt: true
  }, { quoted: qneo })

}
break;
case 'allmenu': {
  let menunya = font(`╔═══〔 *WABOT SISTEMA : TODO EL MENU* 〕═══╗

┌─⊷ *AI INTELIGECIA*
│ • .andrea
│ • .ai
│ • .hoshino
│ • .ai-art
│ • .anime-prompt
│ • .gmimg
└───────────────


┌─⊷ *GROUPO ADNISTRADOR*
│ • .openchat 
│ • .closechat
│ • .ads
│ • .promote 
│ • .demote
│ • .delete
│ • .kick
│ • .hidetag
└───────────────

┌─⊷ *DESCARGADORES*
│ • .tiktok
│ • .instagram
│ • .play
│ • .ytaudio 
│ • .ytmp4
└───────────────



┌─⊷ *STICKER & HERRAMIENTAS*
│ • .brat
│ • .qc 
│ • .style
│ • .sticker 
│ • .hd 
│ • .superhd
│ • .tourl
│ • .reactch 
│ • .pin
│ • .ttsai
└───────────────

💡 Se seguira agregando nuevas fucniones!.
╚═〘 *${global.botname} v${versi}* 〙═╝`);
// const storeutlimate = `┌─⊷ *TIENDA ADNISTRA*
// │ • .testimoni
// │ • .payment
// │ • .dana
// │ • .gopay
// │ • .ovo
// │ • .qris
// └───────────────`

// const textpart2 = `┌─⊷ *SISTEMA DE VENDEDOR*
// │ • .addsellersc
// │ • .delsellersc
// │ • .listsellersc
// │ • .addsellerweb
// │ • .delsellerweb
// │ • .listsellerweb
// └───────────────

// ┌─⊷ *SC ADMISTRA*
// │ • .createsc
// │ • .addfitur
// │ • .delfitur
// │ • .listfitur
// │ • .getcasesc
// └───────────────

// ┌─⊷ *GENERADORES WEB*
// │ • .scweb
// │ • .createweb
// │ • .createweb2
// │ • .createweb3
// │ • .listweb
// │ • .delweb
// └───────────────

// ┌─⊷ *HERRAMIENTAS DE REPOSICIÓN*
// │ • .addrepo
// │ • .delrepo
// │ • .listrepo
// │ • .checkrepo
// └───────────────

// ┌─⊷ *PANEL ADNISTRA V1*
// │ • .1gb - .10gb
// │ • .unli
// │ • .addakses
// │ • .delakses
// │ • .listakses
// │ • .deluser
// │ • .listpanel
// │ • .delpanel
// │ • .clearpanel
// │ • .cadmin
// │ • .deladmin
// │ • .listadmin
// └───────────────

// ┌─⊷ *PANEL ADNISTRA v2*
// │ • .1gb-v2 - .10gb-v2
// │ • .unli-v2
// │ • .addakses-v2
// │ • .delakses-v2
// │ • .listakses-v2
// │ • .deluser-v2
// │ • .listpanel-v2
// │ • .delpanel-v2
// │ • .clearpanel-v2
// │ • .cadmin-v2
// │ • .deladmin-v2
// │ • .listadmin-v2
// └───────────────

// ┌─⊷ *PANEL ADNISTRA PV*
// │ • .1gb-pv - .10gb-pv
// │ • .unli-pv
// │ • .addakses-pv
// │ • .delakses-pv
// │ • .listakses-pv
// │ • .deluser-pv
// │ • .listpanel-pv
// │ • .delpanel-pv
// │ • .clearpanel-pv
// └───────────────

// ┌─⊷ *BOT CONTROLES*
// │ • .self
// │ • .sc
// │ • .public
// │ • .gconly
// │ • .autoviewsw
// │ • .addowner
// │ • .delowner
// │ • .listowner
// │ • .owner
// │ • .setcmd 
// │ • .delcmd
// └───────────────
// `

  neo.sendMessage(m.chat, {
    video: { url: global.vidthumb },
    gifPlayback: true,
    caption: menunya,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idSaluran,
        newsletterName: global.namach
      },
      externalAdReply: {
        title: global.botname,
        body: `Version ${versi}`,
        thumbnailUrl: global.imgmenu,
        sourceUrl: global.ytname,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: qwb });
}
break;

//——————————[ Create Sc Dan Web ]——————————//
case 'scweb':
case 'gethtml': {
    if (!isCreator && !isSellerWeb) return balas(mesg.slr);
    if (!text) return balas(`mana domain nya`);

    try {
        let res = await fetch(text);
        if (!res.ok) return balas('❌ Gagal mengambil data dari URL tersebut');
        let html = await res.text();

        const filePath = path.join(__dirname, './temp/html_dump.html');
        fs.writeFileSync(filePath, html);

        await neo.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            mimetype: 'text/html',
            fileName: 'source.html'
        }, { quoted: m });

        fs.unlinkSync(filePath); // hapus setelah terkirim
    } catch (e) {
        console.error(e);
        balas('❌ Terjadi kesalahan saat mengambil HTML\n'+e.message);
    }
}
break;
case 'listfitur': {
  if (!isCreator && !isSellerSc) return balas(mesg.slr);

  try {
    let fiturList = require('./lib/casefitur.json');
    if (!Array.isArray(fiturList)) return balas("❌ Data fitur tidak valid.");

    let teks = `*🧩 Daftar Fitur Tersedia:*\n\n`;
    fiturList.forEach((fitur, index) => {
      teks += `*${index + 1}.* ${fitur.name}\n`;
    });

    teks += `\nGunakan perintah: *${prefix}createsc* <namaBot>|<namaOwner>|<versi>|<password>|<fitur1,fitur2,...>\nContoh: *${prefix}createsc* MyBot|ZassOnee|V1|12345|play,qc,ttp\n\nAtau ketik *allfitur* untuk memilih semua fitur.`;

    balas(teks);
  } catch (err) {
    console.error(err);
    balas(`❌ Gagal membaca daftar fitur:\n${err.message}`);
  }
}
break;
case 'addfitur': {
    if (!isCreator) return balas(mesg.own);

    const args = text.split('|||');
    if (args.length < 3) return balas(`namafitur|||function|||casenya|||lib/script.json,,,isi file\`\n\n--- Contoh: ---\n*${prefix+command} halo|||async function halo() {\nreturn m.reply('halo')\n}|||case 'halo':{\nawait halo()\n}\nbreak;|||lib/halo.json,,,["halo"]*`);

    const [name, functionCode, caseCode, upFileRaw] = args.map(a => a.trim());

    // Memeriksa apakah file casefitur.json ada
    const casefiturPath = './lib/casefitur.json';
    let icasefitur = [];

    if (fs.existsSync(casefiturPath)) {
        try {
            icasefitur = JSON.parse(fs.readFileSync(casefiturPath, 'utf-8'));
        } catch (error) {
            return balas('❌ Terjadi kesalahan saat membaca casefitur.json');
        }
    }

    // Cek apakah fitur sudah ada
    if (icasefitur.some(f => f.name === name)) {
        return balas(`⚠️ *Fitur "${name}" sudah ada dalam casefitur.json!*`);
    }

    // Jika function atau upFile kosong, biarkan tetap kosong
    const newFeature = {
        name: name,
        function: functionCode ? functionCode : " ", // Jika kosong, beri spasi
        casenya: caseCode ? caseCode.replace(/\\n/g, '\n') : ""
    };

    let upFile = [];

    // **Proses upFile jika ada**
    if (upFileRaw && upFileRaw.trim() !== '') {
        const [filePath, fileContent] = upFileRaw.split(',,,');
        if (filePath && fileContent) {
            try {
                // **Konversi isi file menjadi string JSON**
                let jsonString = JSON.stringify(JSON.parse(fileContent), null, 2);

                upFile.push({ [filePath]: jsonString });

                // **Menyimpan file ke path yang ditentukan**
                fs.writeFileSync(filePath, jsonString, 'utf-8');
            } catch (error) {
                return balas('❌ Terjadi kesalahan saat menyimpan upFile. Pastikan isi file dalam format JSON yang benar.');
            }
        }
    }

    // Tambahkan upFile jika ada
    if (upFile.length > 0) newFeature.upFile = upFile;

    // **Tambahkan ke casefitur.json**
    icasefitur.push(newFeature);

    // Simpan perubahan
    try {
        fs.writeFileSync(casefiturPath, JSON.stringify(icasefitur, null, 2), 'utf-8');
        balas(`✅ *Fitur "${name}" berhasil ditambahkan ke casefitur.json!*`);
    } catch (error) {
        balas('❌ Gagal menyimpan fitur baru ke casefitur.json');
    }
}
break;




case 'sendmg': {
    if (!isCreator) return balas(mesg.own);

    const args = text.trim().split(' ');
    const mediaType = args[0]?.toLowerCase();
    const targetNumber = args[1];

    if (!mediaType || !targetNumber) {
        return example('/send [mp3|voice] [numero]');
    }

    let nomor = targetNumber.replace(/[^0-9]/g, '');
    if (!nomor.startsWith('51')) nomor = '51' + nomor;

    let targetJid = nomor + '@s.whatsapp.net';

    const isAudioMessage = ['audioMessage', 'ptt'].includes(m.mime) || quoted?.mtype === 'audioMessage';
    const isValidMedia = m.mtype === 'audioMessage' || m.mtype === 'documentMessage' || isAudioMessage;

    let mediaMessage = null;

    if (quoted && isValidMedia) {
        mediaMessage = quoted;
    } else if (m.mtype && isValidMedia) {
        mediaMessage = m;
    } else {
        return balas('❌ Debes enviar o responder un mensaje de audio válido (mp3, opus, ptt).');
    }

    try {
        const media = await mediaDownload(mediaMessage, 'audio');
        if (!media) return balas('❌ Error al descargar el audio.');

        await sendFile(targetJid, media, 'audio.mp3', '', m, { asVoice: mediaType === 'voice' });

        balas(`✅ Audio enviado correctamente a *${targetNumber}* como *${mediaType === 'voice' ? 'nota de voz' : 'audio mp3'}*!`);
    } catch (e) {
        console.error(e);
        balas('❌ Ocurrió un error al enviar el archivo.');
    }
}
break;

case 'delfitur': {
    if (!isCreator) return balas(mesg.own);

    const fiturName = text.trim();
    if (!fiturName) return example(`namafitur`);

    const icasefiturPath = './lib/casefitur.json';
    if (!fs.existsSync(icasefiturPath)) return balas('⚠️ File casefitur.json tidak ditemukan!');

    try {
        let icasefitur = JSON.parse(fs.readFileSync(icasefiturPath, 'utf-8'));

        // Cari fitur yang sesuai
        const fiturIndex = icasefitur.findIndex(f => f.name === fiturName);
        if (fiturIndex === -1) return balas(`⚠️ *Fitur "${fiturName}" tidak ditemukan dalam casefitur.json!*`);

        // Hapus fitur dari array
        icasefitur.splice(fiturIndex, 1);

        // Simpan kembali file casefitur.json
        fs.writeFileSync(icasefiturPath, JSON.stringify(icasefitur, null, 2), 'utf-8');
        balas(`✅ *Fitur "${fiturName}" berhasil dihapus dari casefitur.json!*`);
    } catch (error) {
        console.error(error);
        balas('❌ Terjadi kesalahan saat menghapus fitur dari casefitur.json');
    }
}
break;
case 'getcasesc': {
    if (!isCreator) return balas(mesg.own)();

    if (!text) return example("<nama case>");

    const casefiturPath = './lib/casefitur.json';

    // Periksa apakah file casefitur.json ada
    if (!fs.existsSync(casefiturPath)) {
        return balas("❌ File casefitur.json tidak ditemukan!");
    }

    try {
        const icasefitur = JSON.parse(fs.readFileSync(casefiturPath, 'utf-8'));
        const fitur = icasefitur.find(f => f.name.toLowerCase() === text.toLowerCase());

        if (!fitur) {
            return balas(`❌ Fitur "${text}" tidak ditemukan dalam casefitur.json!`);
        }

        // Ambil casenya
        let caseText = fitur.casenya || "❌ Case tidak ditemukan untuk fitur ini.";

        // Ubah kode case dari string JSON menjadi teks biasa
        caseText = caseText.replace(/\\n/g, '\n').replace(/\\"/g, '"');

        // Pesan konfirmasi
        let teksnya = `🗃️ \`Case ditemukan!\`\n\n*Nama Case :* ${text}\n\n> © ${global.ownername}`;

        // Kirim dengan tombol CTA Copy
        let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: { 
                message: { 
                    "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, 
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": JSON.stringify({
                                        "display_text": "Salin Isi Case",
                                        "copy_code": caseText
                                    })
                                }
                            ]
                        })
                    })
                } 
            }
        }, { userJid: m.sender, quoted: m });

        await neo.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });

    } catch (error) {
        console.error("❌ Error saat membaca casefitur.json:", error);
        return balas("❌ Terjadi kesalahan saat membaca casefitur.json.");
    }
}
break;
case 'createweb2':
case 'cweb2': {
if (!isSellerWeb && !isCreator) return balas(mesg.slr);
  if (!text) return example('<namaWeb>')
  if (!qmsg || !/html/.test(qmsg.mimetype)) return balas('Reply file .html')

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '')
  const repositoryName = `${webName}-website` // Nama repositori yang akan dibuat

  // 1. Membuat repositori di GitHub jika belum ada
  const githubApiUrl = 'https://api.github.com/user/repos'
  const headers = {
    Authorization: `token ${global.githubToken}`,
    'Content-Type': 'application/json',
  }
  
  const createRepoPayload = {
    name: repositoryName,
    private: false, // Pilih private atau public sesuai kebutuhan Anda
    auto_init: true, // Inisialisasi repositori dengan README
    gitignore_template: 'Node' // Sesuaikan template jika perlu
  }

  try {
    // Cek apakah repositori sudah ada
    const repoRes = await fetch(githubApiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(createRepoPayload),
    })

    if (repoRes.status === 422) {
      return balas(`❌ Repositori dengan nama *${repositoryName}* sudah ada.`)
    }

    const repoData = await repoRes.json()

    // 2. Download file dari message yang di-reply
    const quotedFile = await neo.downloadMediaMessage(qmsg)
    const filesToUpload = []

    // 3. Menangani file ZIP dan HTML
    if (qmsg.mimetype.includes('zip')) {
      const unzipper = require('unzipper')
      const zipBuffer = Buffer.from(quotedFile)
      const directory = await unzipper.Open.buffer(zipBuffer)

      for (const file of directory.files) {
        if (file.type === 'File') {
          const content = await file.buffer()
          const filePath = file.path.replace(/^\/+/, '').replace(/\\/g, '/')
          filesToUpload.push({
            file: filePath,
            data: content.toString('base64'),
            encoding: 'base64'
          })
        }
      }

      if (!filesToUpload.some(x => x.file.toLowerCase().endsWith('index.html'))) {
        return balas('File index.html tidak ditemukan dalam struktur ZIP.')
      }

    } else if (qmsg.mimetype.includes('html')) {
      filesToUpload.push({
        file: 'index.html',
        data: Buffer.from(quotedFile).toString('base64'),
        encoding: 'base64'
      })
    } else {
      return balas('File tidak dikenali. Kirim file .zip atau .html.')
    }

    // 4. Menambahkan file ke repositori GitHub
    const githubRepoUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/contents`
    for (let file of filesToUpload) {
      const fileUrl = `${githubRepoUrl}/${file.file}`
      await fetch(fileUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          message: `Add ${file.file}`,
          content: file.data,
        }),
      }).catch(() => {
        return balas(`❌ Gagal mengunggah file ${file.file} ke GitHub.`)
      })
    }

    // 5. Mengaktifkan GitHub Pages
    const enablePagesUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/pages`
    await fetch(enablePagesUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        source: {
          branch: 'main',
          path: '/',
        }
      })
    })

    balas(`✅ Website berhasil dibuat di GitHub Pages!\n\n🌐 URL: https://${global.githubUsername}.github.io/${repositoryName}`)

  } catch (error) {
    console.log('Error:', error)
    balas(`❌ Terjadi kesalahan saat deploy ke GitHub Pages.`)
  }
}
break
case 'listweb': {
if (!isCreator && !isSellerWeb) return balas(mesg.slr);
  const headers = {
    Authorization: `Bearer ${global.vercelToken}`
  }

  const res = await fetch('https://api.vercel.com/v9/projects', { headers })
  const data = await res.json()

  if (!data.projects || data.projects.length === 0) return balas('Tidak ada website yang ditemukan.')

  let teks = '*🌐 Daftar Website Anda:*\n\n'
  for (let proj of data.projects) {
    teks += `• ${proj.name} → https://${proj.name}.vercel.app\n`
  }

  balas(teks)
}
break
case 'createscript':
case 'createsc': {
  (async () => {
    if (!isCreator && !isSellerSc) return balas(mesg.slr);
    let path = require("path");
    let AdmZip = require("adm-zip");
    let fs = require("fs");
    let fetch = require("node-fetch");
    let crct = global.imgthumb;
    let txtcrct = `\n--- Gunakan format: ---\n\`${prefix+command} <namaBot>|<namaOwner>|<Versi script>|<Password>|<fitur1>,<fitur2>,...\`\n\n--- Contoh : ---\n*${prefix+command} Zass|ZassOffc|V1|12345|brat,qc,play,pinterest*\n\n> ketik .listfitur untuk melihat fitur tersedia.\n`;
    

    const args = text.split('|');
    if (args.length < 5) {
      return neo.sendMessage(m.chat, { image: { url: crct }, caption: txtcrct }, { quoted: m });
    }

    const mycfitur = require('./lib/casefitur.json');
    const [botName, ownerName, botVersion, password, featuresStr] = args;
    let features = featuresStr.split(',').map(f => f.trim());
    if (features.includes("allfitur")) features = mycfitur.map(f => f.name);

    balas(`🗂 *Process Script Created*\n> [ \`${botName}\` ]`);

    const mediaFireAPI = 'https://api.siputzx.my.id/api/d/mediafire?url=https://www.mediafire.com/file/4tvn38pcwm6684i/RLBasesZ.zip/file';
    const fixLink = "https://files.catbox.moe/tdquuz.zip"

    try {
      let res = await fetch(fixLink);
      let buffer = await res.arrayBuffer();
      let tempZipPath = './temp/disini.zip';
      // PERBAIKAN ERROR DI SINI
      fs.writeFileSync(tempZipPath, Buffer.from(buffer));

      let zip = new AdmZip(tempZipPath);
      let extractPath = `./temp/extracted_${m.pushName || 'user'}`;
      zip.extractAllTo(extractPath, true);

      const casePath = `${extractPath}/case.js`;
      let caseContent = fs.readFileSync(casePath, 'utf-8');
      let validFeatures = [];

      for (let feature of features) {
        let data = mycfitur.find(f => f.name === feature);
        if (!data) {
          balas(`⚠ *Fitur "${feature}" tidak ditemukan!*`);
          continue;
        }

        if (!caseContent.includes(data.function)) {
          caseContent = data.function + '\n' + caseContent;
        }

        if (!caseContent.includes(data.casenya)) {
          caseContent = caseContent.replace('switch (command) {', `switch (command) {\n${data.casenya}`);
        }

        if (data.upFile?.length > 0) {
          for (let file of data.upFile) {
            let filePath = Object.keys(file)[0];
            let fileContent = file[filePath];
            let fullPath = path.join(extractPath, filePath);
            fs.mkdirSync(path.dirname(fullPath), { recursive: true });
            fs.writeFileSync(fullPath, fileContent, 'utf-8');
          }
        }

        validFeatures.push(feature);
        await new Promise(r => setTimeout(r, 500));
      }

      fs.writeFileSync(casePath, caseContent, 'utf-8');

      const updateText = (filePath, updates) => {
        let text = fs.readFileSync(filePath, 'utf-8');
        for (let [pattern, replacement] of updates) {
          text = text.replace(new RegExp(pattern, 'g'), replacement);
        }
        fs.writeFileSync(filePath, text, 'utf-8');
      };

      updateText(`${extractPath}/connection.js`, [[`const pw = ".*?";`, `const pw = "${password}";`]]);
      updateText(`${extractPath}/settings.js`, [
        [`global.owner = .*`, `global.owner = "${m.sender.split('@')[0]}";`],
        [`global.namabot = .*`, `global.namabot = '${botName}';`],
        [`global.ownername = .*`, `global.ownername = '${ownerName}';`],
        [`global.botversion = .*`, `global.botversion = '${botVersion}';`]
      ]);

      fs.writeFileSync(`${extractPath}/database/owner.json`, JSON.stringify([m.sender.split('@')[0]]), 'utf-8');

      const listMenuPath = `${extractPath}/lib/listmenu.json`;
      let menu = fs.existsSync(listMenuPath) ? JSON.parse(fs.readFileSync(listMenuPath)) : [];
      validFeatures.forEach(f => { if (!menu.includes(f)) menu.push(f) });
      fs.writeFileSync(listMenuPath, JSON.stringify(menu, null, 2), 'utf-8');

      let newZip = new AdmZip();
      newZip.addLocalFolder(extractPath);
      let outputZip = `./temp/sc_${m.pushName || 'user'}.zip`;
      newZip.writeZip(outputZip);

      if (validFeatures.length === 0) return balas("❌ Tidak ada fitur valid!");

      await neo.sendMessage(m.chat, {
        document: fs.readFileSync(outputZip),
        mimetype: 'application/zip',
        fileName: `sc_${botName}.zip`,
        caption: `✅ *Success Script Created!*\n> By Zass Official\n\n*Creator:* ${m.pushName || 'user'}\n*Fitur:* [${validFeatures}]\n*Password:* ${password}`
      }, { quoted: m });

      fs.rmSync(extractPath, { recursive: true, force: true });
      fs.unlinkSync(tempZipPath);
      fs.unlinkSync(outputZip);
    } catch (err) {
      console.error(err);
      balas(`❌ Terjadi error saat membuat script:\n${err.message}`);
    }
  })();
}
break;
case 'delweb': {
if (!isCreator && !isSellerWeb) return balas(mesg.slr);
  if (!text) return example('<namaWeb>')
  const webName = text.trim().toLowerCase()

  const headers = {
    Authorization: `Bearer ${global.vercelToken}`
  }

  try {
    const response = await fetch(`https://api.vercel.com/v9/projects/${webName}`, {
      method: 'DELETE',
      headers
    })

    if (response.status === 200 || response.status === 204) {
      return balas(`✅ Website *${webName}* berhasil dihapus dari Vercel.`)
    } else if (response.status === 404) {
      return balas(`⚠️ Website *${webName}* tidak ditemukan di akun Vercel kamu.`)
    } else if (response.status === 403 || response.status === 401) {
      return balas(`⛔ Token Vercel tidak valid atau tidak punya akses ke project ini.`)
    } else {
      let result = {}
      try {
        result = await response.json()
      } catch (e) {}
      return balas(`❌ Gagal menghapus website:\n${result.error?.message || 'Tidak diketahui'}`)
    }

  } catch (err) {
    console.error(err)
    balas(`Terjadi kesalahan saat mencoba menghapus:\n${err.message}`)
  }
}
break
case 'cweb':
case 'createweb': {
  if (!isCreator && !isSellerWeb) return balas(mesg.slr);
  if (!text) return example('<namaWeb>')
  if (!qmsg || !/zip|html/.test(qmsg.mimetype)) return balas('Reply file .zip atau .html')

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '')
  const domainCheckUrl = `https://${webName}.vercel.app`

  try {
    const check = await fetch(domainCheckUrl)
    if (check.status === 200) return balas(`❌ Nama web *${webName}* sudah digunakan. Silakan gunakan nama lain.`)
  } catch (e) {}

  const quotedFile = await neo.downloadMediaMessage(qmsg)
  const filesToUpload = []

  if (qmsg.mimetype.includes('zip')) {
    const unzipper = require('unzipper')
    const zipBuffer = Buffer.from(quotedFile)
    const directory = await unzipper.Open.buffer(zipBuffer)

    for (const file of directory.files) {
      if (file.type === 'File') {
        const content = await file.buffer()
        const filePath = file.path.replace(/^\/+/, '').replace(/\\/g, '/')
        filesToUpload.push({
          file: filePath,
          data: content.toString('base64'),
          encoding: 'base64'
        })
      }
    }

    if (!filesToUpload.some(x => x.file.toLowerCase().endsWith('index.html'))) {
      return balas('File index.html tidak ditemukan dalam struktur ZIP.')
    }

  } else if (qmsg.mimetype.includes('html')) {
    filesToUpload.push({
      file: 'index.html',
      data: Buffer.from(quotedFile).toString('base64'),
      encoding: 'base64'
    })
  } else {
    return balas('File tidak dikenali. Kirim file .zip atau .html.')
  }

  const headers = {
    Authorization: `Bearer ${global.vercelToken}`,
    'Content-Type': 'application/json'
  }

  await fetch('https://api.vercel.com/v9/projects', {
    method: 'POST',
    headers,
    body: JSON.stringify({ name: webName })
  }).catch(() => {})

  const deployRes = await fetch('https://api.vercel.com/v13/deployments', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: webName,
      project: webName,
      files: filesToUpload,
      projectSettings: { framework: null }
    })
  })

  const deployData = await deployRes.json().catch(() => null)
  if (!deployData || !deployData.url) {
    console.log('Deploy Error:', deployData)
    return balas(`Gagal deploy ke Vercel:\n${JSON.stringify(deployData)}`)
  }

  balas(`✅ Website berhasil dibuat!\n\n🌐 URL: https://${webName}.vercel.app`)
}
break
case "addsellerweb": { 
    if (!isCreator) return balas(mesg.slr);
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return example(`6285659202292`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
    let ceknya = await neo.onWhatsApp(prrkek) // Mengecek Apkah Nomor ${prrkek} Terdaftar Di WhatsApp 
    if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    swebnumber.push(prrkek)
    fs.writeFileSync("./database/sellerweb.json", JSON.stringify(swebnumber))
    balas(`Successfully Added ${prrkek} To Seller Web`)
}
break
case "delsellerweb": {
    if (!isCreator) return balas(mesg.slr);
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return example(`6285659202292`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = swebnumber.indexOf(ya)
    swebnumber.splice(unp, 1)
    fs.writeFileSync("./database/sellerweb.json", JSON.stringify(swebnumber))
    balas(`Successfully Removed ${ya} From Seller Web`)
}
break
case "listsellerweb": {
  if (!isCreator) return balas(mesg.slr);
  let data = fs.readFileSync("./database/sellerweb.json", 'utf8')
  let json = JSON.parse(data)
  let tekt = "List of Seller Web:\n"
  json.forEach((item, index) => {
    tekt += `\`${index + 1}. ${item.replace(/@s\.whatsapp\.net/g, '')}\`\n`
  })
  balas(tekt)
}
break
case "addsellersc": { 
    if (!isCreator) return balas(mesg.slr);
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return example(`6285659202292`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
    let ceknya = await neo.onWhatsApp(prrkek)
    if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    sscnumber.push(prrkek)
    fs.writeFileSync("./database/sellersc.json", JSON.stringify(sscnumber))
    balas(`Successfully Added ${prrkek} To Seller Script`)
}
break
case "delsellersc": {
    if (!isCreator) return balas(mesg.slr);
    // Ketika Ada Orang Lain/ Selain Owner Yang Mengetik Command Ini Maka Bot Tidak Akan Merespon Walau Menggunakan Mode Public Dan Ini Akan Mengurangi Spam
    if (!args[0]) return example(`6285659202292`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = sscnumber.indexOf(ya)
    sscnumber.splice(unp, 1)
    fs.writeFileSync("./database/sellersc.json", JSON.stringify(sscnumber))
    balas(`Successfully Removed ${ya} From Seller Script`)
}
break
case "listsellersc": {
  if (!isCreator) return balas(mesg.slr);
  let data = fs.readFileSync("./database/sellersc.json", 'utf8')
  let json = JSON.parse(data)
  let tekt = "List of Seller Script:\n"
  json.forEach((item, index) => {
    tekt += `\`${index + 1}. ${item.replace(/@s\.whatsapp\.net/g, '')}\`\n`
  })
  balas(tekt)
}
break
case 'info': {
  const name = pushname || 'No tiene nombre';
  const senderNumber = m.sender.split('@')[0];

  const iscreator = isCreator ? '☑️ Creator Bot' : '';
  const issellerweb = isSellerWeb ? '☑️ Seller Web' : '';
  const issellersc = isSellerSc ? '☑️ Seller Sc' : '';
  const status = isCreator || isSellerWeb || isSellerSc
     ? [iscreator, issellerweb, issellersc].filter(v => v).join(' ')
    : '❌ Usuario gratuito';

  balas(
`┏━━〔 *INFO DEL USUARIO* 〕━━┓

╭─⧫ *Identidad:*
│• 🪪 *nombre*   : ${name}
│• ☎️ *Numero*   : +${senderNumber}

╭─⧫ *Estados*
│• ${status}

╰────────────────────
Studio Server Developer*
┗━━━━━━━━━━━━━━━━━━━━━┛`);
}
break;
case 'cweb3':
case 'createweb3': {
  if (!isCreator && !isSellerWeb) return balas(mesg.slr);
  if (!text) return example('mywebsite')
  if (!quoted || quoted.mtype !== 'documentMessage') return balas('Reply dokumen HTML-nya!')

  const webName = text.trim().toLowerCase().replace(/\s+/g, '-')
  const mime = quoted?.msg?.mimetype || quoted?.mimetype
  if (!mime || !mime.includes('html')) return balas('File harus berupa HTML!')

  balas(`Membuat repository dan meng-upload file...`)

  // Ambil buffer file HTML
  const buffer = await quoted.download()
  const fileContent = buffer.toString()

  // 1. Buat repository GitHub
  const createRepo = await fetch(`https://api.github.com/user/repos`, {
    method: 'POST',
    headers: {
      Authorization: `token ${global.githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Bot'
    },
    body: JSON.stringify({
      name: webName,
      auto_init: true,
      private: false
    })
  })

  const repoResult = await createRepo.json()
  if (!repoResult?.name) return balas(`Gagal membuat repo: ${JSON.stringify(repoResult)}`)

  // 2. Upload file index.html ke repo
  const uploadFile = await fetch(`https://api.github.com/repos/${global.githubUsername}/${webName}/contents/index.html`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${global.githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Bot'
    },
    body: JSON.stringify({
      message: 'add index.html',
      content: Buffer.from(fileContent).toString('base64')
    })
  })

  const uploadResult = await uploadFile.json()
  if (!uploadResult?.content?.name) return balas(`Gagal upload file: ${JSON.stringify(uploadResult)}`)

  // 3. Deploy ke Vercel
 const vercelDeploy = await fetch(`https://api.vercel.com/v13/deployments`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${global.vercelToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: webName,
    files: [
      {
        file: 'index.html',
        data: Buffer.from(fileContent).toString('base64'),
        encoding: 'base64'
      }
    ],
    projectSettings: {
      framework: null
    }
  })
})

  const vercelResult = await vercelDeploy.json()
  if (!vercelResult?.url) return balas(`Gagal deploy ke Vercel: ${JSON.stringify(vercelResult)}`)

  balas(`Sukses! Website kamu telah dibuat dan bisa diakses di:\n\nhttps://${vercelResult.url}`)
}
break

case 'addrepo': {
  if (!isCreator) return balas(mesg.own);

  if (!text.includes("|")) return example("<nama>|<deskripsi>|<private/public>");

  const [nama, deskripsi, privasi] = text.split("|").map(a => a.trim());
  if (!nama || !deskripsi || !privasi) return balas("⚠️ Format tidak lengkap!");

  const isPrivate = privasi.toLowerCase() === 'private';

  const fetch = require("node-fetch");
  const res = await fetch(`https://api.github.com/user/repos`, {
    method: "POST",
    headers: {
      "Authorization": `token ${global.githubToken}`,
      "Accept": "application/vnd.github+json"
    },
    body: JSON.stringify({
      name: nama,
      description: deskripsi,
      private: isPrivate
    })
  });

  const data = await res.json();

  if (res.ok) {
    balas(`✅ *Repository berhasil dibuat!*\n\n📦 Nama: ${data.name}\n🔒 Private: ${data.private}\n🔗 URL: ${data.html_url}`);
  } else {
    balas(`❌ Gagal membuat repository.\n\n${JSON.stringify(data, null, 2)}`);
  }
}
break;
case 'checkrepo': {
  if (!isCreator) return balas(mesg.own);
  if (!text) return balas("⚠️ Masukkan nama repository!\nContoh: .checkrepo my-repo");

  const fetch = require("node-fetch");
  try {
    const repoName = text.trim();

    // Ambil info repo
    const resInfo = await fetch(`https://api.github.com/repos/${global.githubUsername}/${repoName}`, {
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });

    const repoInfo = await resInfo.json();
    if (!resInfo.ok) {
      return balas(`❌ Repository tidak ditemukan!\n\n${JSON.stringify(repoInfo, null, 2)}`);
    }

    // Ambil daftar file
    const resContent = await fetch(`https://api.github.com/repos/${global.githubUsername}/${repoName}/contents`, {
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });

    const contents = await resContent.json();
    if (!Array.isArray(contents)) {
      return balas(`❌ Gagal mengambil konten repository.`);
    }

    let listFiles = contents.map(v => `📄 ${v.name}`).join("\n");
    let total = contents.length;
    let status = repoInfo.private ? "🔒 Private" : "🌐 Public";
    let createdAt = new Date(repoInfo.created_at).toLocaleString('id-ID');

    balas(`*📦 Info Repository*\n\n` +
            `• Nama: ${repoInfo.name}\n` +
            `• Status: ${status}\n` +
            `• Dibuat: ${createdAt}\n` +
            `• Jumlah File: ${total}\n\n` +
            `*📁 File:*\n${listFiles}`);
  } catch (e) {
    console.error(e);
    balas("❌ Terjadi kesalahan saat memeriksa repository.");
  }
}
break;
case 'delrepo': {
  if (!isCreator) return balas(mesg.own);
  if (!text) return balas("❌ *Format salah!*\nGunakan: .delrepo <nama_repository>");

  const fetch = require("node-fetch");
  const repoName = text.trim();
  const username = global.githubUsername; // pastikan ini diset di settings.js

  try {
    const res = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
      method: "DELETE",
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });

    if (res.status === 204) {
      balas(`✅ Repository *${repoName}* berhasil dihapus.`);
    } else if (res.status === 404) {
      balas(`❌ Repository *${repoName}* tidak ditemukan.`);
    } else {
      const error = await res.json();
      console.log(error);
      balas("❌ Gagal menghapus repository.");
    }
  } catch (err) {
    console.error(err);
    balas("❌ Terjadi kesalahan saat menghapus repository.");
  }
}
break;
case 'listrepo': {
  if (!isCreator) return balas(mesg.own);

  
  try {
    const res = await fetch(`https://api.github.com/user/repos`, {
      headers: {
        "Authorization": `token ${global.githubToken}`,
        "Accept": "application/vnd.github+json"
      }
    });
    const data = await res.json();

    if (!Array.isArray(data)) return balas("❌ Gagal mengambil repository!");

    if (data.length === 0) return balas("ℹ️ Belum ada repository.");

    const list = data.map((repo, i) => 
      `*${i + 1}. ${repo.name}*\n> ${repo.private ? '🔒 Private' : '🌐 Public'}\n> ${repo.html_url}`
    ).join("\n\n");

    balas(`📁 *List Repository GitHub:*\n\n${list}`);
  } catch (err) {
    console.error(err);
    balas("❌ Terjadi kesalahan saat mengambil data.");
  }
}
break;

//——————————[ Cpanel Manage ]——————————//
case "cadmin": {
  if (!isCreator) return balas(mesg.own);
  if (!text) return example("adminneo,628XXX");

  let [username, nomor] = text.split(",").map(v => v.trim());
  if (!username || !nomor) return example("adminneo,628XXX");

  nomor = nomor.replace(/\D/g, "") + "@s.whatsapp.net";
  username = username.toLowerCase();

  try {
    let onWa = await neo.onWhatsApp(nomor.split("@")[0]);
    if (onWa.length < 1) return balas("Nomor tidak terdaftar di WhatsApp.");
  } catch (err) {
    return balas("Gagal cek nomor WhatsApp: " + err.message);
  }

  const email = `${username}@zass.id`;
  const name = func.capital(username) + " Admin";
  const password = `${username}NeoSecure001`;

  try {
    const userRes = await fetch(domain + "/api/application/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey}`
      },
      body: JSON.stringify({
        email, username, first_name: name,
        last_name: "Staff", language: "en", password,
        root_admin: true
      })
    });

    if (!userRes.ok) throw new Error(`Gagal buat akun admin (${userRes.status})`);
    const userData = await userRes.json();
    if (!userData?.attributes?.id) throw new Error("User ID admin tidak ditemukan.");

    let caption = `*WABOT ADMIN PANEL*\n\n` +
            `🧑‍✈️ *Username:* ${username}\n` +
            `🔐 *Password:* ${password}\n` +
            `🆔 *Admin ID:* ${userData.attributes.id}\n` +
            `📩 *Email:* ${email}\n\n` +
            `⚙️ *Akses:* Full Root Admin\n` +
            `🌐 *Panel:* ${global.domain}\n\n` +
            `╭─❖ *RULES ADMIN* ❖─\n` +
            `│ 1. Jaga data user.\n` +
            `│ 2. Jangan Intip Srv Orang.\n` +
            `│ 3. Laporkan bug ke Owner.\n` +
            `╰── Selamat bergabung di NeoLabs.`;

    const buttonMsg = generateWAMessageFromContent(nomor, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({ text: caption }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: 'cta_copy',
              buttonParamsJson: JSON.stringify({
                display_text: 'Salin Username',
                copy_code: username
              })
            },
            {
              name: 'cta_copy',
              buttonParamsJson: JSON.stringify({
                display_text: 'Salin Password',
                copy_code: password
              })
            },
            {
              name: 'cta_url',
              buttonParamsJson: JSON.stringify({
                display_text: 'Login ke Panel',
                url: global.domain
              })
            }
          ]
        })
      })
    }
  }
}, {
  userJid: nomor,
  quoted: qwa
});

await neo.relayMessage(nomor, buttonMsg.message, {
  messageId: buttonMsg.key.id
});

    balas(`✅ *Akun admin @${username}* berhasil dibuat & dikirim ke *${nomor.split("@")[0]}*`, m.chat, { mentions: [nomor] });

  } catch (err) {
    console.error("ERR:", err);
    return balas("Terjadi kesalahan sistem saat membuat admin:\n" + err.message);
  }
}
break;

case "deladmin": {
    if (!isCreator) return balas(mesg.own);
    if (text && !isNaN(text)) {
        const id = parseInt(text);
        try {
            const getRes = await fetch(`${domain}/api/application/users/${id}`, {
                headers: { Authorization: `Bearer ${apikey}` }
            });
            if (!getRes.ok) throw new Error("Gagal ambil data admin, pastikan ID benar.");

            const userData = await getRes.json();
            const delRes = await fetch(`${domain}/api/application/users/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${apikey}` }
            });

            if (!delRes.ok) throw new Error(`Gagal hapus admin (${delRes.status})`);

            let msg = `⚠️ *WABOT ADMIN REMOVAL*\n\n` +
                      `🧑‍✈️ *Username:* ${userData.attributes.username}\n` +
                      `🆔 *ID Admin:* ${id}\n` +
                      `📩 *Email:* ${userData.attributes.email}\n\n` +
                      `✅ Admin telah dihapus dari sistem panel.\n` +
                      `┗━━━━━━━━━━━━━━━⭓`;
            return balas(msg);

        } catch (err) {
            console.error("DEL ADMIN ERROR:", err);
            return balas("Gagal menghapus admin:\n" + err.message);
        }
    }
    try {
        const res = await fetch(`${domain}/api/application/users`, {
            headers: { Authorization: `Bearer ${apikey}` }
        });
        const data = await res.json();
        const admins = data.data.filter(v => v.attributes.root_admin === true);

        if (!admins.length) return balas("Tidak ada admin root ditemukan.");

        const teksnya = `Silakan pilih salah satu admin untuk dihapus dari sistem panel:`;

        const buttons = admins.slice(0, 10).map(v => ({
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: `🗑️ ${v.attributes.username}`,
                id: `.deladmin ${v.attributes.id}`
            })
        }));

        buttons.push({
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: `📋 Lihat Semua Admin`,
                id: `.listadmin`
            })
        });

        let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: { mentionedJid: [m.sender] },
                        body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                            title: `\`⟪ ${global.botname} - V ${versi} ⟫\``,
                            gifPlayback: true,
                            subtitle: global.botname,
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: qwa });

        await neo.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });

    } catch (err) {
        console.error("DELADMIN QUICK BUTTON ERROR:", err);
        return balas("Gagal memuat daftar admin:\n" + err.message);
    }
}
break;

case "listadmin": {
    if (!isCreator) return balas(mesg.own);

    try {
        const userRes = await fetch(`${domain}/api/application/users`, {
            headers: { Authorization: `Bearer ${apikey}` }
        });
        if (!userRes.ok) throw new Error(`Gagal ambil data user (${userRes.status})`);

        const users = (await userRes.json()).data;
        const rootAdmins = users.filter(u => u.attributes.root_admin);

        if (rootAdmins.length === 0) return balas("Tidak ada admin root terdaftar di panel.");

        let teks = `⚙️ *WABOT ADMIN LIST*\n\n`;
        rootAdmins.forEach((admin, i) => {
            const u = admin.attributes;
            teks += `*${i + 1}. ${u.username}*\n`;
            teks += `🆔 ID: ${u.id}\n`;
            teks += `📩 Email: ${u.email}\n`;
            teks += `🏷️ Nama: ${u.first_name} ${u.last_name}\n`;
            teks += `🔐 Admin: Aktif\n\n`;
        });
        const button = [
            {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                    title: "Hapus Admin Root",
                    sections: [
                        {
                            title: "Pilih Admin yang Akan Dihapus",
                            rows: rootAdmins.map((admin, i) => {
                                const u = admin.attributes;
                                return {
                                    header: u.username,
                                    title: `Hapus ${u.username}`,
                                    description: `ID: ${u.id} • ${u.email}`,
                                    id: `.deladmin ${u.id}`
                                };
                            })
                        }
                    ]
                })
            }
        ];

        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                            title: `⟪ ${global.botname} - List Admin ⟫`,
                            gifPlayback: true,
                            subtitle: "WABOT Panel Root Admins",
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: button
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: qwa });

        await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } catch (err) {
        console.error("LIST ADMIN ERROR:", err);
        return balas("Gagal mengambil data admin:\n" + err.message);
    }
}
break;

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb":
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb":
case "unlimited": case "unli": {
    let cmd = m.body ? m.body.split(" ")[0].toLowerCase() : "";
    if (!isCreator && !isGcPanel) return balas(mesg.slr);
    if (!text) return example("username,628XXX");
    const now = Date.now();
    const cd = cooldowns[command];

    if (cd && now < cd) {
        const remaining = ((cd - now) / 1000).toFixed(1);
        return m.reply(`⏳ Command ini sedang cooldown!\nSilakan tunggu ${remaining} detik lagi.`);
    }
    cooldowns[command] = now + cooldownTime;

    let [username, nomor] = text.split(",").map(s => s.trim());
    if (!username || !nomor) return example("username,628XXX");
    nomor = nomor.replace(/\D/g, "") + "@s.whatsapp.net";
    username = username.toLowerCase();

    try {
        let onWa = await neo.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return balas("Nomor tidak terdaftar di WhatsApp.");
    } catch (err) {
        return balas("Gagal cek nomor WhatsApp: " + err.message);
    }

    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unli": { ram: "0", disk: "0", cpu: "0" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };

    let { ram, disk, cpu } = resourceMap[command];
    const email = `${username}@zass.id`;
    const name = func.capital(username) + " WABOT";
    const password = `${username}Neo032`;

    try {
        const userRes = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email, username, first_name: name,
                last_name: "Server", language: "en", password
            })
        });

        if (!userRes.ok) throw new Error(`Gagal buat user (${userRes.status})`);
        const userData = await userRes.json();
        if (!userData?.attributes?.id) throw new Error("User ID tidak ditemukan.");

        const eggRes = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey}` }
        });

        if (!eggRes.ok) throw new Error(`Gagal ambil data egg (${eggRes.status})`);
        const eggData = await eggRes.json();

        const serverRes = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description: "© WABOT Labs - Zass Onee",
                user: userData.attributes.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: eggData.attributes.startup,
                environment: {
                    INST: "npm", USER_UPLOAD: "0",
                    AUTO_UPDATE: "0", CMD_RUN: "npm start"
                },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] }
            })
        });

        if (!serverRes.ok) throw new Error(`Gagal buat server (${serverRes.status})`);
        const serverData = await serverRes.json();
        if (!serverData?.attributes?.id) throw new Error("Server ID tidak ditemukan.");

        const caption = `*WABOT PANEL ACCESS* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n\n` +
            `🧑‍💻 *Username:* ${username}\n` +
            `🔐 *Password:* ${password}\n` +
            `🆔 *Server ID:* ${serverData.attributes.id}\n` +
            `📩 *Email:* ${email}\n\n` +
            `⚙️ *Spesifikasi:* ${ram === "0" ? "Unlimited" : ram / 1000 + "GB"} RAM / ${disk === "0" ? "Unlimited" : disk / 1000 + "GB"} Disk / ${cpu === "0" ? "Unlimited" : cpu + "%"} CPU\n` +
            `🌐 *Login:* ${global.domain}\n\n` +
            `╭─❖「 RULES PEMBELIAN 」\n` +
            `│\n` +
            `│ 1. Garansi hanya berlaku 15 hari.\n` +
            `│ 2. Claim garansi bawa ss cht saat pembelian\n` +
            `│ 3. Akses root dilarang tanpa izin.\n` +
            `│ 4. Panel hanya untuk keperluan pribadi.\n` +
            `│ 5. Jika abuse = Suspend permanen.\n` +
            `│\n` +
            `╰──⭓ WABOT Kurir Panel Terbaik!\n`;

        const msg = generateWAMessageFromContent(nomor, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text: caption }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...(await prepareWAMessageMedia(
                                { image: { url: global.imgthumb } },
                                { upload: neo.waUploadToServer }
                            )),
                            title: `⚙️ Pesanan Panel Anda!`,
                            gifPlayback: false,
                            subtitle: "WABOT Server Access Created",
                            hasMediaAttachment: true
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: 'cta_copy',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Salin Username',
                                        copy_code: username
                                    })
                                },
                                {
                                    name: 'cta_copy',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Salin Password',
                                        copy_code: password
                                    })
                                },
                                {
                                    name: 'cta_url',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Login ke Panel',
                                        url: global.domain
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        }, {
            userJid: nomor,
            quoted: qwa
        });

        await neo.relayMessage(nomor, msg.message, {
            messageId: msg.key.id
        });

        balas(`✅ Server *@${username}* berhasil dibuat & dikirim ke *${nomor.split("@")[0]}*`, m.chat, { mentions: [nomor] });

    } catch (err) {
        console.error("ERR:", err);
        return balas("Terjadi kesalahan sistem:\n" + err.message);
    }
}
break;

case "deluser": {
    if (!isCreator) return balas(mesg.own);

    try {
        // Ambil semua user dari panel
        let res = await fetch(domain + "/api/application/users", {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey}` }
        });

        let json = await res.json();
        if (!json?.data) return balas("Gagal mengambil daftar user dari panel.");
        const users = json.data;

        if (!text) {
            let teks = `🧹 *Pilih user yang ingin di-lenyapkan dari panel...*`;

            const button = [
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: "Hapus User Panel",
                        sections: [
                            {
                                title: "Klik nama user untuk menghapus",
                                rows: users.map((u, i) => {
                                    const usr = u.attributes;
                                    return {
                                        header: usr.username,
                                        title: `Hapus ${usr.username}`,
                                        description: `ID: ${usr.id} • ${usr.email}`,
                                        id: `.deluser ${usr.username}`
                                    };
                                })
                            }
                        ]
                    })
                }
            ];

            const msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                                title: `📋 Panel User Deletion`,
                                gifPlayback: false,
                                subtitle: "Klik user yang ingin dihapus",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: qwa });

            return await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
        }

        // Kalau user langsung kasih username (tanpa button)
        let username = text.trim().toLowerCase();
        const targetUser = users.find(u => u.attributes.username === username);
        if (!targetUser) return balas(`❌ User *${username}* tidak ditemukan di panel.`);

        // Ambil semua server dari panel
        let serverRes = await fetch(domain + "/api/application/servers", {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey}` }
        });

        let serverList = await serverRes.json();
        if (!serverList?.data) return balas("Gagal ambil daftar server.");

        let userServers = serverList.data.filter(s => s.attributes.user === targetUser.attributes.id);

        // Hapus semua server milik user
        for (let s of userServers) {
            await fetch(`${domain}/api/application/servers/${s.attributes.id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${apikey}` }
            });
        }

        // Hapus user
        await fetch(`${domain}/api/application/users/${targetUser.attributes.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${apikey}` }
        });

        balas(`✅ *User ${username}* dan semua server miliknya berhasil dihapus dari panel.`);
    } catch (err) {
        console.error("DELUSER ERROR:", err);
        balas("❌ Gagal menghapus user/server:\n" + err.message);
    }
}
break;

case "listpanel": {
    if (!isCreator && !isGcPanel) return balas(mesg.own);

    try {
        let page = 1, servers = [], keepFetching = true;

        while (keepFetching) {
            const res = await fetch(`${domain}/api/application/servers?page=${page}&per_page=100`, {
                headers: { Authorization: `Bearer ${apikey}` }
            });

            if (!res.ok) throw new Error(`Gagal ambil server halaman ${page} (${res.status})`);
            const data = await res.json();

            servers.push(...data.data);
            keepFetching = data.meta.pagination.current_page < data.meta.pagination.total_pages;
            page++;
        }

        if (!servers.length) return balas("Belum ada server di panel.");

        let teks = `╭───❖「 *WABOT SERVER LIST (${servers.length})* 」`;

        for (let i = 0; i < servers.length; i++) {
            const s = servers[i].attributes;
            teks += `\n├─ ${i + 1}. *${s.name}*\n`;
            teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
            teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
            teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
            teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
        }

        teks += `\n╰────────────⭓`;
        balas(teks);

    } catch (err) {
        console.error("ERR LIST PANEL:", err);
        balas("Terjadi kesalahan:\n" + err.message);
    }
}
break;

case "delpanel": {
    if (!isCreator) return balas(mesg.own);

    try {
        const srvRes = await fetch(`${domain}/api/application/servers`, {
            headers: { Authorization: `Bearer ${apikey}` }
        });
        const srvJson = await srvRes.json();
        const servers = srvJson.data;

        if (!text) {
            const button = [
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: "Hapus Server Panel",
                        sections: [
                            {
                                title: "Pilih Server yang Akan Dihapus",
                                rows: servers.map(srv => {
                                    const s = srv.attributes;
                                    return {
                                        header: s.name,
                                        title: `Hapus Server ${s.name}`,
                                        description: `SID: ${s.id} • UID: ${s.user}`,
                                        id: `.delpanel ${s.id}`
                                    };
                                })
                            }
                        ]
                    })
                }
            ];

            const msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({ text: "🧨 Pilih server yang ingin dihapus dari panel." }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                                title: "🗑️ Hapus Server Panel",
                                gifPlayback: false,
                                subtitle: "Pastikan pilihan kamu benar",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: qwa });

            return await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
        }

        // Jika sudah ada input ID server
        const target = servers.find(v => Number(text) === v.attributes.id);
        if (!target) return balas("❌ ID server tidak ditemukan di panel.");

        const s = target.attributes;

        // Hapus server
        await fetch(`${domain}/api/application/servers/${s.id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });

        // Hapus user jika ditemukan
        const userRes = await fetch(`${domain}/api/application/users`, {
            headers: { Authorization: `Bearer ${apikey}` }
        });
        const userJson = await userRes.json();
        const targetUser = userJson.data.find(u => u.attributes.first_name.toLowerCase() === s.name.toLowerCase());

        if (targetUser) {
            await fetch(`${domain}/api/application/users/${targetUser.attributes.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`
                }
            });
        }

        let teks = `╭───❖「 *WABOT SERVER REMOVED* 」\n`;
        teks += `├─ *${s.name}* berhasil dihapus!\n`;
        teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
        teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
        teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
        teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
        teks += `╰────────────⭓`;

        return balas(teks);

    } catch (err) {
        console.error("ERR DEL PANEL:", err);
        return balas("❌ Terjadi kesalahan:\n" + err.message);
    }
}
break;

case "clearpanel": {
  if (!isCreator) return balas(mesg.own);
  if (!text) return balas(`Contoh: .clearpanel 1 (ID user yang ingin dipertahankan)`);

  const excludeId = parseInt(text.trim());
  if (isNaN(excludeId)) return balas("ID tidak valid! Harus berupa angka.");

  await balas(`Memproses penghapusan seluruh user & server...\nKecuali user dengan ID ${excludeId}.`);

  try {
    const headers = {
      Authorization: `Bearer ${apikey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const getUsers = async () => {
      const res = await axios.get(`${domain}/api/application/users`, { headers });
      return res.data.data;
    };

    const getServers = async () => {
      const res = await axios.get(`${domain}/api/application/servers`, { headers });
      return res.data.data;
    };

    const deleteServer = async (uuid) => {
      try {
        await axios.delete(`${domain}/api/application/servers/${uuid}`, { headers });
        console.log(`✔️ Server ${uuid} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus server ${uuid}:`, err.response?.data || err.message);
      }
    };

    const deleteUser = async (id) => {
      try {
        await axios.delete(`${domain}/api/application/users/${id}`, { headers });
        console.log(`✔️ User ${id} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus user ${id}:`, err.response?.data || err.message);
      }
    };

    const users = await getUsers();
    const servers = await getServers();
    let totalDeleted = 0;

    for (const user of users) {
      const { id, username } = user.attributes;
      if (id === excludeId) {
        console.log(`Lewati ID ${id} (${username}) karena dikecualikan`);
        continue;
      }

      const userServers = servers.filter(srv => srv.attributes.user === id);

      for (const srv of userServers) {
        await deleteServer(srv.attributes.id);
        totalDeleted++;
      }

      await deleteUser(id);
    }

    await balas(`✅ Selesai! Menghapus ${totalDeleted} server & user (kecuali ID ${excludeId}).`);
  } catch (err) {
    return balas(`Terjadi kesalahan:\n${JSON.stringify(err.response?.data || err.message, null, 2)}`);
  }
}
break;

case "addakses": case "addaksesgc": {
if (!isCreator) return balas(mesg.own);
if (!m.isGroup) return onlyGroup();
const input = m.chat
if (sellerpanel.includes(input)) return balas(`Grup ini sudah di beri akses reseller panel!`)
sellerpanel.push(input)
await fs.writeFileSync("./database/panelseller.json", JSON.stringify(sellerpanel, null, 2))
balas(`Berhasil menambah grup reseller panel ✅`)
}
break

case "delakses": case "delaksesgc": {
if (!isCreator) return balas(mesg.own);
if (sellerpanel.length < 1) return balas("Tidak ada grup reseller panel")
if (!m.isGroup) return onlyGroup();
let input = text ? text : m.chat
if (input == "all") {
sellerpanel.length = 0
await fs.writeFileSync("./database/panelseller.json", JSON.stringify(sellerpanel, null, 2))
return balas(`Berhasil menghapus semua grup reseller panel ✅`)
}
if (!sellerpanel.includes(input)) return balas(`¡Este grupo no es un grupo de revendedores de paneles!`)
let posi = sellerpanel.indexOf(input)
await sellerpanel.splice(posi, 1)
await fs.writeFileSync("./database/panelseller.json", JSON.stringify(sellerpanel, null, 2))
balas(`Berhasil menghapus grup reseller panel ✅`)
}
break

case "listakses": {
if (!isCreator) return balas(mesg.own);
if (sellerpanel.length < 1) return balas("Tidak ada grup reseller panel")
const datagc = await neo.groupFetchAllParticipating()
let teks = ""
for (let i of sellerpanel) {
let nama = datagc[i].subject || "Grup tidak ditemukan"
teks += `\n* ${i}
* ${nama}\n`
}
return balas(teks)
}
break

// PANEL V2
  case "cadmin-v2": {
  if (!isCreator) return baas(mesg.own);
  if (!text) return example("adminneo,628XXX");

  let [username, nomor] = text.split(",").map(v => v.trim());
  if (!username || !nomor) return example("adminneo,628XXX");

  nomor = nomor.replace(/\D/g, "") + "@s.whatsapp.net";
  username = username.toLowerCase();

  try {
    let onWa = await neo.onWhatsApp(nomor.split("@")[0]);
    if (!onWa || onWa.length === 0) return balas("Nomor tidak terdaftar di WhatsApp.");
  } catch (err) {
    console.error("Error cek nomor WA:", err);
    return balas("Gagal cek nomor WhatsApp: " + err.message);
  }

  const email = `${username}@zass.id`;
  const name = func.capital(username) + " Admin V2";
  const password = `${username}NeoSecure002`;

  try {
    const response = await fetch(domain2 + "/api/application/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey2}`
      },
      body: JSON.stringify({
        email,
        username,
        first_name: name,
        last_name: "Staff",
        language: "en",
        password,
        root_admin: true
      })
    });

    const resText = await response.text();
    let userData;

    try {
      userData = JSON.parse(resText);
    } catch (e) {
      console.error("Gagal parse response JSON:", resText);
      throw new Error("Gagal parsing data response dari server panel.");
    }

    if (!response.ok || !userData?.attributes?.id)
      throw new Error(`Gagal buat akun admin V2 (status: ${response.status})`);

    let caption = `*WABOT ADMIN PANEL*\n\n` +
            `🧑‍✈️ *Username:* ${username}\n` +
            `🔐 *Password:* ${password}\n` +
            `🆔 *Admin ID:* ${userData.attributes.id}\n` +
            `📩 *Email:* ${email}\n\n` +
            `⚙️ *Akses:* Full Root Admin\n` +
            `🌐 *Panel:* ${global.domain2}\n\n` +
            `╭─❖ *RULES ADMIN* ❖─\n` +
            `│ 1. Jaga data user.\n` +
            `│ 2. Jangan Intip Srv Orang.\n` +
            `│ 3. Laporkan bug ke Owner.\n` +
            `╰── Selamat bergabung di NeoLabs.`;

    const buttonMsg = generateWAMessageFromContent(nomor, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({ text: caption }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: 'cta_copy',
              buttonParamsJson: JSON.stringify({
                display_text: 'Salin Username',
                copy_code: username
              })
            },
            {
              name: 'cta_copy',
              buttonParamsJson: JSON.stringify({
                display_text: 'Salin Password',
                copy_code: password
              })
            },
            {
              name: 'cta_url',
              buttonParamsJson: JSON.stringify({
                display_text: 'Login ke Panel',
                url: global.domain2
              })
            }
          ]
        })
      })
    }
  }
}, {
  userJid: nomor,
  quoted: qwa
});

await neo.relayMessage(nomor, buttonMsg.message, {
  messageId: buttonMsg.key.id
});

    balas(`✅ *Akun admin V2 @${username}* berhasil dibuat & dikirim ke *${nomor.split("@")[0]}*`, m.chat, { mentions: [nomor] });

  } catch (err) {
    console.error("ERR:", err);
    return balas("Terjadi kesalahan sistem saat membuat admin:\n" + err.message);
  }
}
break;

case "deladmin-v2": {
    if (!isCreator) return balas(mesg.own);
    if (text && !isNaN(text)) {
        const id = parseInt(text);
        try {
            const getRes = await fetch(`${domain2}/api/application/users/${id}`, {
                headers: { Authorization: `Bearer ${apikey2}` }
            });
            if (!getRes.ok) throw new Error("Gagal ambil data admin, pastikan ID benar.");

            const userData = await getRes.json();
            const delRes = await fetch(`${domain2}/api/application/users/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${apikey2}` }
            });

            if (!delRes.ok) throw new Error(`Gagal hapus admin (${delRes.status})`);

            let msg = `⚠️ *WABOT ADMIN REMOVAL*\n\n` +
                      `🧑‍✈️ *Username:* ${userData.attributes.username}\n` +
                      `🆔 *ID Admin:* ${id}\n` +
                      `📩 *Email:* ${userData.attributes.email}\n\n` +
                      `✅ Admin telah dihapus dari sistem panel.\n` +
                      `┗━━━━━━━━━━━━━━━⭓`;
            return balas(msg);

        } catch (err) {
            console.error("DEL ADMIN ERROR:", err);
            return balas("Gagal menghapus admin:\n" + err.message);
        }
    }
    try {
        const res = await fetch(`${domain2}/api/application/users`, {
            headers: { Authorization: `Bearer ${apikey2}` }
        });
        const data = await res.json();
        const admins = data.data.filter(v => v.attributes.root_admin === true);

        if (!admins.length) return balas("Tidak ada admin root ditemukan.");

        const teksnya = `Silakan pilih salah satu admin untuk dihapus dari sistem panel:`;

        const buttons = admins.slice(0, 10).map(v => ({
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: `🗑️ ${v.attributes.username}`,
                id: `.deladmin-v2 ${v.attributes.id}`
            })
        }));

        buttons.push({
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: `📋 Lihat Semua Admin`,
                id: `.listadmin-v2`
            })
        });

        let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: { mentionedJid: [m.sender] },
                        body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                            title: `\`⟪ ${global.botname} - V ${versi} ⟫\``,
                            gifPlayback: true,
                            subtitle: global.botname,
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: qwa });

        await neo.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });

    } catch (err) {
        console.error("DELADMIN QUICK BUTTON ERROR:", err);
        return balas("Gagal memuat daftar admin:\n" + err.message);
    }
}
break;

case "listadmin-v2": {
    if (!isCreator) return balas(mesg.own);

    try {
      const userRes = await fetch(`${domain2}/api/application/users`, {
        headers: { Authorization: `Bearer ${apikey2}` }
      });
      if (!userRes.ok) throw new Error(`Gagal ambil data user dari panel V2 (${userRes.status})`);

      const users = (await userRes.json()).data;

      let teks = `⚙️ *WABOT ADMIN LIST V2*\n\n`;
        rootAdmins.forEach((admin, i) => {
            const u = admin.attributes;
            teks += `*${i + 1}. ${u.username}*\n`;
            teks += `🆔 ID: ${u.id}\n`;
            teks += `📩 Email: ${u.email}\n`;
            teks += `🏷️ Nama: ${u.first_name} ${u.last_name}\n`;
            teks += `🔐 Admin: Aktif\n\n`;
        });
        const button = [
            {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                    title: "Hapus Admin Root",
                    sections: [
                        {
                            title: "Pilih Admin yang Akan Dihapus",
                            rows: rootAdmins.map((admin, i) => {
                                const u = admin.attributes;
                                return {
                                    header: u.username,
                                    title: `Hapus ${u.username}`,
                                    description: `ID: ${u.id} • ${u.email}`,
                                    id: `.deladmin ${u.id}`
                                };
                            })
                        }
                    ]
                })
            }
        ];

        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                            title: `⟪ ${global.botname} - List Admin ⟫`,
                            gifPlayback: true,
                            subtitle: "WABOT Panel Root Admins",
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: button
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: qwa });

        await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } catch (err) {
        console.error("LIST ADMIN ERROR:", err);
        return balas("Gagal mengambil data admin:\n" + err.message);
    }
}
break;

  case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": 
  case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": 
  case "unlimited-v2": case "unli-v2": {
    let cmd = m.body ? m.body.split(" ")[0].toLowerCase() : "";
    if (!isCreator && !isGcPanel2) return balas(mesg.slr);
    if (!text) return example("username,628XXX");

    let [username, nomor] = text.split(",").map(s => s.trim());
    if (!username || !nomor) return example("username,628XXX");
    nomor = nomor.replace(/\D/g, "") + "@s.whatsapp.net";
    username = username.toLowerCase();

    try {
      let onWa = await neo.onWhatsApp(nomor.split("@")[0]);
      if (onWa.length < 1) return balas("Nomor tidak terdaftar di WhatsApp.");
    } catch (err) {
      return balas("Gagal cek nomor WhatsApp: " + err.message);
    }

    const resourceMap2 = {
      "1gb-v2": { ram: "1000", disk: "1000", cpu: "40" },
      "2gb-v2": { ram: "2000", disk: "1000", cpu: "60" },
      "3gb-v2": { ram: "3000", disk: "2000", cpu: "80" },
      "4gb-v2": { ram: "4000", disk: "2000", cpu: "100" },
      "5gb-v2": { ram: "5000", disk: "3000", cpu: "120" },
      "6gb-v2": { ram: "6000", disk: "3000", cpu: "140" },
      "7gb-v2": { ram: "7000", disk: "4000", cpu: "160" },
      "8gb-v2": { ram: "8000", disk: "4000", cpu: "180" },
      "9gb-v2": { ram: "9000", disk: "5000", cpu: "200" },
      "10gb-v2": { ram: "10000", disk: "5000", cpu: "220" },
      "unli-v2": { ram: "0", disk: "0", cpu: "0" },
      "unlimited-v2": { ram: "0", disk: "0", cpu: "0" }
    };
    let { ram, disk, cpu } = resourceMap2[command];

    const email = `${username}@zass.id`;
    const name = func.capital(username) + " WABOT V2";
    const password = `${username}Zassneo033`;

    try {
      // Create User
      const userRes = await fetch(domain2 + "/api/application/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apikey2}`
        },
        body: JSON.stringify({
          email, username, first_name: name,
          last_name: "Server", language: "en", password
        })
      });

      if (!userRes.ok) throw new Error(`Gagal buat user di panel V2 (${userRes.status})`);
      const userData = await userRes.json();
      if (!userData?.attributes?.id) throw new Error("User ID di panel V2 tidak ditemukan.");

      // Get Egg Info
      const eggRes = await fetch(`${domain2}/api/application/nests/${nestid2}/eggs/${egg2}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${apikey2}` }
      });

      if (!eggRes.ok) throw new Error(`Gagal ambil data egg di panel V2 (${eggRes.status})`);
      const eggData = await eggRes.json();

      // Create Server
      const serverRes = await fetch(domain2 + "/api/application/servers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apikey2}`
        },
        body: JSON.stringify({
          name,
          description: "© WABOT Labs - Zass Onee (Panel V2)",
          user: userData.attributes.id,
          egg: parseInt(egg2),
          docker_image: "ghcr.io/parkervcp/yolks:nodejs_20", // Sesuaikan jika perlu
          startup: eggData.attributes.startup,
          environment: {
            INST: "npm", USER_UPLOAD: "0",
            AUTO_UPDATE: "0", CMD_RUN: "npm start" // Sesuaikan jika perlu
          },
          limits: { memory: ram, swap: 0, disk, io: 500, cpu },
          feature_limits: { databases: 5, backups: 5, allocations: 5 },
          deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] }
        })
      });

      if (!serverRes.ok) throw new Error(`Gagal buat server di panel V2 (${serverRes.status})`);
      const serverData = await serverRes.json();
      if (!serverData?.attributes?.id) throw new Error("Server ID di panel V2 tidak ditemukan.");

      //
      const caption = `*WABOT PANEL V2 ACCESS*\n\n` +
            `🧑‍💻 *Username:* ${username}\n` +
            `🔐 *Password:* ${password}\n` +
            `🆔 *Server ID:* ${serverData.attributes.id}\n` +
            `📩 *Email:* ${email}\n\n` +
            `⚙️ *Spesifikasi:* ${ram === "0" ? "Unlimited" : ram / 1000 + "GB"} RAM / ${disk === "0" ? "Unlimited" : disk / 1000 + "GB"} Disk / ${cpu === "0" ? "Unlimited" : cpu + "%"} CPU\n` +
            `🌐 *Login:* ${global.domain2}\n\n` +
            `╭─❖「 RULES PEMBELIAN 」\n` +
            `│\n` +
            `│ 1. Garansi hanya berlaku 15 hari.\n` +
            `│ 2. Claim garansi bawa ss cht saat pembelian\n` +
            `│ 3. Akses root dilarang tanpa izin.\n` +
            `│ 4. Panel hanya untuk keperluan pribadi.\n` +
            `│ 5. Jika abuse = Suspend permanen.\n` +
            `│\n` +
            `╰──⭓ WABOT Kurir Panel Terbaik!\n`;

        const msg = generateWAMessageFromContent(nomor, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text: caption }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...(await prepareWAMessageMedia(
                                { image: { url: global.imgthumb } },
                                { upload: neo.waUploadToServer }
                            )),
                            title: `⚙️ Pesanan Panel Anda! ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`,
                            gifPlayback: false,
                            subtitle: "WABOT Server Access Created",
                            hasMediaAttachment: true
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: 'cta_copy',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Salin Username',
                                        copy_code: username
                                    })
                                },
                                {
                                    name: 'cta_copy',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Salin Password',
                                        copy_code: password
                                    })
                                },
                                {
                                    name: 'cta_url',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Login ke Panel',
                                        url: global.domain2
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        }, {
            userJid: nomor,
            quoted: qwa
        });

        await neo.relayMessage(nomor, msg.message, {
            messageId: msg.key.id
        });

        balas(`✅ Server V2 *@${username}* berhasil dibuat & dikirim ke *${nomor.split("@")[0]}*`, m.chat, { mentions: [nomor] });

    } catch (err) {
        console.error("ERR:", err);
        return balas("Terjadi kesalahan sistem:\n" + err.message);
    }
}
break;

case "deluser-v2": {
    if (!isCreator) return balas(mesg.own);

    try {
        // Ambil semua user dari panel
        let res = await fetch(domain2 + "/api/application/users", {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey2}` }
        });

        let json = await res.json();
        if (!json?.data) return balas("Gagal mengambil daftar user dari panel.");
        const users = json.data;

        if (!text) {
            let teks = `🧹 *Pilih user yang ingin di-lenyapkan dari panel srv 2...*`;

            const button = [
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: "Hapus User Panel",
                        sections: [
                            {
                                title: "Klik nama user untuk menghapus",
                                rows: users.map((u, i) => {
                                    const usr = u.attributes;
                                    return {
                                        header: usr.username,
                                        title: `Hapus ${usr.username}`,
                                        description: `ID: ${usr.id} • ${usr.email}`,
                                        id: `.deluser ${usr.username}`
                                    };
                                })
                            }
                        ]
                    })
                }
            ];

            const msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                                title: `📋 Panel-V2 User Deletion`,
                                gifPlayback: false,
                                subtitle: "Klik user yang ingin dihapus",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: qwa });

            return await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
        }

        // Kalau user langsung kasih username (tanpa button)
        let username = text.trim().toLowerCase();
        const targetUser = users.find(u => u.attributes.username === username);
        if (!targetUser) return balas(`❌ User *${username}* tidak ditemukan di panel.`);

        // Ambil semua server dari panel
        let serverRes = await fetch(domain + "/api/application/servers", {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey2}` }
        });

        let serverList = await serverRes.json();
        if (!serverList?.data) return balas("Gagal ambil daftar server.");

        let userServers = serverList.data.filter(s => s.attributes.user === targetUser.attributes.id);

        // Hapus semua server milik user
        for (let s of userServers) {
            await fetch(`${domain2}/api/application/servers/${s.attributes.id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${apikey2}` }
            });
        }

        // Hapus user
        await fetch(`${domain2}/api/application/users/${targetUser.attributes.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${apikey2}` }
        });

        balas(`✅ *User ${username}* dan semua server miliknya berhasil dihapus dari panel.`);
    } catch (err) {
        console.error("DELUSER ERROR:", err);
        balas("❌ Gagal menghapus user/server:\n" + err.message);
    }
}
break;

  case "listpanel-v2": {
    if (!isCreator && !isGcPanel2) return balas(mesg.own);

    try {
      let page = 1, servers = [], keepFetching = true;

      while (keepFetching) {
        const res = await fetch(`${domain2}/api/application/servers?page=${page}&per_page=100`, {
          headers: { Authorization: `Bearer ${apikey2}` }
        });

        if (!res.ok) throw new Error(`Gagal ambil server halaman ${page} dari panel V2 (${res.status})`);
        const data = await res.json();

        servers.push(...data.data);
        keepFetching = data.meta.pagination.current_page < data.meta.pagination.total_pages;
        page++;
      }

      if (!servers.length) return balas("Belum ada server di panel V2.");

      let teks = `╭───❖「 *WABOT SERVER LIST PANEL V2 (${servers.length})* 」`;

      for (let i = 0; i < servers.length; i++) {
        const s = servers[i].attributes;
        teks += `\n├─ ${i + 1}. *${s.name}*\n`;
        teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
        teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
        teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
        teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
      }

      teks += `\n╰────────────⭓`;
      balas(teks);

    } catch (err) {
      console.error("ERR LIST PANEL V2:", err);
      balas("Terjadi kesalahan saat mengambil daftar server dari panel V2:\n" + err.message);
    }
  } 
break;

case "delpanel-v2": {
    if (!isCreator) return balas(mesg.own);

    try {
        const srvRes = await fetch(`${domain2}/api/application/servers`, {
            headers: { Authorization: `Bearer ${apikey2}` }
        });
        const srvJson = await srvRes.json();
        const servers = srvJson.data;

        if (!text) {
            const button = [
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: "Hapus Server Panel",
                        sections: [
                            {
                                title: "Pilih Server yang Akan Dihapus",
                                rows: servers.map(srv => {
                                    const s = srv.attributes;
                                    return {
                                        header: s.name,
                                        title: `Hapus Server ${s.name}`,
                                        description: `SID: ${s.id} • UID: ${s.user}`,
                                        id: `.delpanel ${s.id}`
                                    };
                                })
                            }
                        ]
                    })
                }
            ];

            const msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({ text: "🧨 Pilih server yang ingin dihapus dari panel." }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                                title: "🗑️ Hapus Server Panel",
                                gifPlayback: false,
                                subtitle: "Pastikan pilihan kamu benar",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: qwa });

            return await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
        }

        // Jika sudah ada input ID server
        const target = servers.find(v => Number(text) === v.attributes.id);
        if (!target) return balas("❌ ID server tidak ditemukan di panel.");

        const s = target.attributes;

        // Hapus server
        await fetch(`${domain2}/api/application/servers/${s.id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey2}`
            }
        });

        // Hapus user jika ditemukan
        const userRes = await fetch(`${domain2}/api/application/users`, {
            headers: { Authorization: `Bearer ${apikey2}` }
        });
        const userJson = await userRes.json();
        const targetUser = userJson.data.find(u => u.attributes.first_name.toLowerCase() === s.name.toLowerCase());

        if (targetUser) {
            await fetch(`${domain2}/api/application/users/${targetUser.attributes.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey2}`
                }
            });
        }

        let teks = `╭───❖「 *WABOT SERVER REMOVED* 」\n`;
        teks += `├─ *${s.name}* berhasil dihapus!\n`;
        teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
        teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
        teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
        teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
        teks += `╰────────────⭓`;

        return balas(teks);

    } catch (err) {
        console.error("ERR DEL PANEL:", err);
        return balas("❌ Terjadi kesalahan:\n" + err.message);
    }
}
break;

case "clearpanel-v2": {
  if (!isCreator) return balas(mesg.own);
  if (!text) return example(`1 (ID user yang ingin dipertahankan)`);

  const excludeId = parseInt(text.trim());
  if (isNaN(excludeId)) return balas("ID tidak valid! Harus berupa angka.");

  await balas(`Memproses penghapusan seluruh user & server...\nKecuali user dengan ID ${excludeId} di panel v2`);

  try {
    const headers = {
      Authorization: `Bearer ${apikey2}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const getUsers = async () => {
      const res = await axios.get(`${domain2}/api/application/users`, { headers });
      return res.data.data;
    };

    const getServers = async () => {
      const res = await axios.get(`${domain2}/api/application/servers`, { headers });
      return res.data.data;
    };

    const deleteServer = async (uuid) => {
      try {
        await axios.delete(`${domain2}/api/application/servers/${uuid}`, { headers });
        console.log(`✔️ Server ${uuid} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus server ${uuid}:`, err.response?.data || err.message);
      }
    };

    const deleteUser = async (id) => {
      try {
        await axios.delete(`${domain2}/api/application/users/${id}`, { headers });
        console.log(`✔️ User ${id} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus user ${id}:`, err.response?.data || err.message);
      }
    };

    const users = await getUsers();
    const servers = await getServers();
    let totalDeleted = 0;

    for (const user of users) {
      const { id, username } = user.attributes;
      if (id === excludeId) {
        console.log(`Lewati ID ${id} (${username}) karena dikecualikan`);
        continue;
      }

      const userServers = servers.filter(srv => srv.attributes.user === id);

      for (const srv of userServers) {
        await deleteServer(srv.attributes.id);
        totalDeleted++;
      }

      await deleteUser(id);
    }

    await balas(`✅ Selesai! Menghapus ${totalDeleted} server & user (kecuali ID ${excludeId}) di panel v2.`);
  } catch (err) {
    return balas(`Terjadi kesalahan:\n${JSON.stringify(err.response?.data || err.message, null, 2)}`);
  }
}
break;

  case "addakses-v2": case "addaksesgc-v2": {
    if (!isCreator) return balas(mesg.own);
    if (!m.isGroup) return onlyGroup();
    const input = m.chat;
    if (sellerpanel2.includes(input)) return balas(`Grup ini sudah di beri akses reseller panel V2!`);
    sellerpanel2.push(input);
    await fs.writeFileSync("./database/panelseller2.json", JSON.stringify(sellerpanel2, null, 2));
    balas(`Berhasil menambah grup reseller panel V2 ✅`);
  }
  break;

  case "delakses-v2": case "delaksesgc-v2": {
    if (!isCreator) return balas(mesg.own);
    if (sellerpanel2.length < 1) return balas("Tidak ada grup reseller panel V2");
    if (!m.isGroup) return onlyGroup();
    let input = text ? text : m.chat;
    if (input == "all") {
      sellerpanel2.length = 0;
      await fs.writeFileSync("./database/panelseller2.json", JSON.stringify(sellerpanel2, null, 2));
      return balas(`Berhasil menghapus semua grup reseller panel V2 ✅`);
    }
    if (!sellerpanel2.includes(input)) return balas(`¡Este grupo no es un grupo de revendedores de paneles V2!`);
    let posi = sellerpanel2.indexOf(input);
    await sellerpanel2.splice(posi, 1);
    await fs.writeFileSync("./database/panelseller2.json", JSON.stringify(sellerpanel2, null, 2));
    balas(`Berhasil menghapus grup reseller panel V2 ✅`);
  }
  break;

  case "listakses-v2": {
    if (!isCreator) return balas(mesg.own);
    if (sellerpanel2.length < 1) return balas("Tidak ada grup reseller panel V2");
    const datagc = await neo.groupFetchAllParticipating();
    let teks = "";
    for (let i of sellerpanel2) {
      let nama = datagc[i]?.subject || "Grup tidak ditemukan";
      teks += `\n* ${i}\n* ${nama}\n`;
    }
    return balas(teks);
  }
  break;
  
// PANEL PRIVATE
case "1gb-pv": case "2gb-pv": case "3gb-pv": case "4gb-pv": case "5gb-pv":
case "6gb-pv": case "7gb-pv": case "8gb-pv": case "9gb-pv": case "10gb-pv":
case "unlimited-pv": case "unli-pv": {
    let cmd = m.body ? m.body.split(" ")[0].toLowerCase() : "";
    if (!isCreator && !isGcPanel3) return balas(mesg.slr);
    if (!text) return example("username,628XXX");

    let [username, nomor] = text.split(",").map(s => s.trim());
    if (!username || !nomor) return example("username,628XXX");
    nomor = nomor.replace(/\D/g, "") + "@s.whatsapp.net";
    username = username.toLowerCase();

    try {
        let onWa = await neo.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return balas("Nomor tidak terdaftar di WhatsApp.");
    } catch (err) {
        return balas("Gagal cek nomor WhatsApp: " + err.message);
    }

    const resourceMap = {
        "1gb-pv": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb-pv": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb-pv": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb-pv": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb-pv": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb-pv": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb-pv": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb-pv": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb-pv": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb-pv": { ram: "10000", disk: "5000", cpu: "220" },
        "unli-pv": { ram: "0", disk: "0", cpu: "0" },
        "unlimited-pv": { ram: "0", disk: "0", cpu: "0" }
    };
    let { ram, disk, cpu } = resourceMap[command];

    const email = `${username}@zass.id`;
    const name = func.capital(username) + " NeoVIP";
    const password = `${username}VIPneo111`;

    try {
        // Create User
        const userRes = await fetch(domain3 + "/api/application/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey3}`
            },
            body: JSON.stringify({
                email, username, first_name: name,
                last_name: "Server", language: "en", password
            })
        });

        if (!userRes.ok) throw new Error(`Gagal buat user (${userRes.status})`);
        const userData = await userRes.json();
        if (!userData?.attributes?.id) throw new Error("User ID tidak ditemukan.");

        // Get Egg Info
        const eggRes = await fetch(`${domain3}/api/application/nests/${nestid3}/eggs/${egg3}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey3}` }
        });

        if (!eggRes.ok) throw new Error(`Gagal ambil data egg (${eggRes.status})`);
        const eggData = await eggRes.json();

        // Create Server
        const serverRes = await fetch(domain3 + "/api/application/servers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey3}`
            },
            body: JSON.stringify({
                name,
                description: "© Credits By Zass Onee",
                user: userData.attributes.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: eggData.attributes.startup,
                environment: {
                    INST: "npm", USER_UPLOAD: "0",
                    AUTO_UPDATE: "0", CMD_RUN: "npm start"
                },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] }
            })
        });

        if (!serverRes.ok) throw new Error(`Gagal buat server (${serverRes.status})`);
        const serverData = await serverRes.json();
        if (!serverData?.attributes?.id) throw new Error("Server ID tidak ditemukan.");

        // Kirim ke user
        const caption = `*WABOT PANEL PV ACCESS*\n\n` +
            `🧑‍💻 *Username:* ${username}\n` +
            `🔐 *Password:* ${password}\n` +
            `🆔 *Server ID:* ${serverData.attributes.id}\n` +
            `📩 *Email:* ${email}\n\n` +
            `⚙️ *Spesifikasi:* ${ram === "0" ? "Unlimited" : ram / 1000 + "GB"} RAM / ${disk === "0" ? "Unlimited" : disk / 1000 + "GB"} Disk / ${cpu === "0" ? "Unlimited" : cpu + "%"} CPU\n` +
            `🌐 *Login:* ${global.domain3}\n\n` +
            `╭─❖「 RULES PEMBELIAN 」\n` +
            `│\n` +
            `│ 1. Garansi berlaku 30 hari.\n` +
            `│ 2. Claim garansi bawa ss cht saat pembelian\n` +
            `│ 3. Akses root dilarang tanpa izin.\n` +
            `│ 4. Panel hanya untuk keperluan pribadi.\n` +
            `│ 5. Jika abuse = Suspend permanen.\n` +
            `│\n` +
            `╰──⭓ WABOT Kurir Panel Terbaik!\n`;

        const msg = generateWAMessageFromContent(nomor, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({ text: caption }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...(await prepareWAMessageMedia(
                                { image: { url: global.imgthumb } },
                                { upload: neo.waUploadToServer }
                            )),
                            title: `⚙️ Pesanan Panel VIP Anda! ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`,
                            gifPlayback: false,
                            subtitle: "WABOT Server Access Created",
                            hasMediaAttachment: true
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: 'cta_copy',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Salin Username',
                                        copy_code: username
                                    })
                                },
                                {
                                    name: 'cta_copy',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Salin Password',
                                        copy_code: password
                                    })
                                },
                                {
                                    name: 'cta_url',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Login ke Panel',
                                        url: global.domain3
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        }, {
            userJid: nomor,
            quoted: qwa
        });

        await neo.relayMessage(nomor, msg.message, {
            messageId: msg.key.id
        });

        balas(`✅ ServerVIP *@${username}* berhasil dibuat & dikirim ke *${nomor.split("@")[0]}*`, m.chat, { mentions: [nomor] });

    } catch (err) {
        console.error("ERR:", err);
        return balas("Terjadi kesalahan sistem:\n" + err.message);
    }
}
break;

case "listpanel-pv": {
    if (!isCreator && !isGcPanel3) return balas(mesg.own);

    try {
        let page = 1, servers = [], keepFetching = true;

        while (keepFetching) {
            const res = await fetch(`${domain3}/api/application/servers?page=${page}&per_page=100`, {
                headers: { Authorization: `Bearer ${apikey3}` }
            });

            if (!res.ok) throw new Error(`Gagal ambil server halaman ${page} (${res.status})`);
            const data = await res.json();

            servers.push(...data.data);
            keepFetching = data.meta.pagination.current_page < data.meta.pagination.total_pages;
            page++;
        }

        if (!servers.length) return balas("Belum ada server di panel.");

        let teks = `╭───❖「 *LIST SERVER PV (${servers.length})* 」`;

        for (let i = 0; i < servers.length; i++) {
            const s = servers[i].attributes;
            teks += `\n├─ ${i + 1}. *${s.name}*\n`;
            teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
            teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
            teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
            teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
        }

        teks += `\n╰────────────⭓`;
        balas(teks);

    } catch (err) {
        console.error("ERR LIST PANEL:", err);
        balas("Terjadi kesalahan:\n" + err.message);
    }
}
break;

case "delpanel-pv": {
    if (!isCreator) return balas(mesg.own);

    try {
        const srvRes = await fetch(`${domain3}/api/application/servers`, {
            headers: { Authorization: `Bearer ${apikey3}` }
        });
        const srvJson = await srvRes.json();
        const servers = srvJson.data;

        if (!text) {
            const button = [
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: "Hapus Server Panel Private",
                        sections: [
                            {
                                title: "Pilih Server yang Akan Dihapus",
                                rows: servers.map(srv => {
                                    const s = srv.attributes;
                                    return {
                                        header: s.name,
                                        title: `Hapus Server ${s.name}`,
                                        description: `SID: ${s.id} • UID: ${s.user}`,
                                        id: `.delpanel ${s.id}`
                                    };
                                })
                            }
                        ]
                    })
                }
            ];

            const msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({ text: "🧨 Pilih server yang ingin dihapus dari panel." }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                                title: "🗑️ Hapus Server Panel",
                                gifPlayback: false,
                                subtitle: "Pastikan pilihan kamu benar",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: qwa });

            return await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
        }

        // Jika sudah ada input ID server
        const target = servers.find(v => Number(text) === v.attributes.id);
        if (!target) return balas("❌ ID server tidak ditemukan di panel.");

        const s = target.attributes;

        // Hapus server
        await fetch(`${domain3}/api/application/servers/${s.id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey3}`
            }
        });

        // Hapus user jika ditemukan
        const userRes = await fetch(`${domain3}/api/application/users`, {
            headers: { Authorization: `Bearer ${apikey3}` }
        });
        const userJson = await userRes.json();
        const targetUser = userJson.data.find(u => u.attributes.first_name.toLowerCase() === s.name.toLowerCase());

        if (targetUser) {
            await fetch(`${domain3}/api/application/users/${targetUser.attributes.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey3}`
                }
            });
        }

        let teks = `╭───❖「 *WABOT SERVER REMOVED* 」\n`;
        teks += `├─ *${s.name}* berhasil dihapus!\n`;
        teks += `│ 🆔 SID: ${s.id} | UID: ${s.user}\n`;
        teks += `│ 💾 Spec: ${s.limits.memory || "Unli"}MB RAM / ${s.limits.disk || "Unli"}MB Disk / ${s.limits.cpu || "Unli"}% CPU\n`;
        teks += `│ 🔒 Suspended: ${s.suspended ? "✅" : "❌"}\n`;
        teks += `│ 🗓️ Created: ${moment(s.created_at).format("DD-MM-YYYY")}\n`;
        teks += `╰────────────⭓`;

        return balas(teks);

    } catch (err) {
        console.error("ERR DEL PANEL:", err);
        return balas("❌ Terjadi kesalahan:\n" + err.message);
    }
}
break;

case "deluser-pv": {
    if (!isCreator) return balas(mesg.own);

    try {
        // Ambil semua user dari panel
        let res = await fetch(domain3 + "/api/application/users", {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey3}` }
        });

        let json = await res.json();
        if (!json?.data) return balas("Gagal mengambil daftar user dari panel.");
        const users = json.data;

        if (!text) {
            let teks = `🧹 *Pilih user yang ingin di-lenyapkan dari panel private...*`;

            const button = [
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: "Hapus User Panel",
                        sections: [
                            {
                                title: "Klik nama user untuk menghapus",
                                rows: users.map((u, i) => {
                                    const usr = u.attributes;
                                    return {
                                        header: usr.username,
                                        title: `Hapus ${usr.username}`,
                                        description: `ID: ${usr.id} • ${usr.email}`,
                                        id: `.deluser ${usr.username}`
                                    };
                                })
                            }
                        ]
                    })
                }
            ];

            const msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: global.foot }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                                title: `📋 Panel-PV User Deletion`,
                                gifPlayback: false,
                                subtitle: "Klik user yang ingin dihapus",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: qwa });

            return await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
        }

        // Kalau user langsung kasih username (tanpa button)
        let username = text.trim().toLowerCase();
        const targetUser = users.find(u => u.attributes.username === username);
        if (!targetUser) return balas(`❌ User *${username}* tidak ditemukan di panel.`);

        // Ambil semua server dari panel
        let serverRes = await fetch(domain3 + "/api/application/servers", {
            method: "GET",
            headers: { Authorization: `Bearer ${apikey3}` }
        });

        let serverList = await serverRes.json();
        if (!serverList?.data) return balas("Gagal ambil daftar server.");

        let userServers = serverList.data.filter(s => s.attributes.user === targetUser.attributes.id);

        // Hapus semua server milik user
        for (let s of userServers) {
            await fetch(`${domain3}/api/application/servers/${s.attributes.id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${apikey3}` }
            });
        }

        // Hapus user
        await fetch(`${domain3}/api/application/users/${targetUser.attributes.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${apikey3}` }
        });

        balas(`✅ *User ${username}* dan semua server miliknya berhasil dihapus dari panel.`);
    } catch (err) {
        console.error("DELUSER ERROR:", err);
        balas("❌ Gagal menghapus user/server:\n" + err.message);
    }
}
break;

case "clearpanel-pv": {
  if (!isCreator) return balas(mesg.own);
  if (!text) return example(`1 (ID user yang ingin dipertahankan)`);

  const excludeId = parseInt(text.trim());
  if (isNaN(excludeId)) return balas("ID tidak valid! Harus berupa angka.");

  await balas(`Memproses penghapusan seluruh user & server...\nKecuali user dengan ID ${excludeId}.`);

  try {
    const headers = {
      Authorization: `Bearer ${apikey3}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const getUsers = async () => {
      const res = await axios.get(`${domain3}/api/application/users`, { headers });
      return res.data.data;
    };

    const getServers = async () => {
      const res = await axios.get(`${domain3}/api/application/servers`, { headers });
      return res.data.data;
    };

    const deleteServer = async (uuid) => {
      try {
        await axios.delete(`${domain3}/api/application/servers/${uuid}`, { headers });
        console.log(`✔️ Server ${uuid} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus server ${uuid}:`, err.response?.data || err.message);
      }
    };

    const deleteUser = async (id) => {
      try {
        await axios.delete(`${domain3}/api/application/users/${id}`, { headers });
        console.log(`✔️ User ${id} dihapus`);
      } catch (err) {
        console.log(`Gagal hapus user ${id}:`, err.response?.data || err.message);
      }
    };

    const users = await getUsers();
    const servers = await getServers();
    let totalDeleted = 0;

    for (const user of users) {
      const { id, username } = user.attributes;
      if (id === excludeId) {
        console.log(`Lewati ID ${id} (${username}) karena dikecualikan`);
        continue;
      }

      const userServers = servers.filter(srv => srv.attributes.user === id);

      for (const srv of userServers) {
        await deleteServer(srv.attributes.id);
        totalDeleted++;
      }

      await deleteUser(id);
    }

    await balas(`✅ Selesai! Menghapus ${totalDeleted} server & user (kecuali ID ${excludeId}) di panel pv.`);
  } catch (err) {
    return balas(`Terjadi kesalahan:\n${JSON.stringify(err.response?.data || err.message, null, 2)}`);
  }
}
break;

case "addakses-pv": case "addaksesgc-pv": {
if (!isCreator) return balas(mesg.own);
if (!m.isGroup) return onlyGroup();
const input = m.chat
if (sellerpanel3.includes(input)) return balas(`Grup ini sudah di beri akses VIP reseller panel!`)
sellerpanel3.push(input)
await fs.writeFileSync("./database/panelseller3.json", JSON.stringify(sellerpanel3, null, 2))
balas(`Berhasil menambah grup VIP reseller panel ✅`)
}
break

case "delakses-pv": case "delaksesgc-pv": {
if (!isCreator) return balas(mesg.own);
if (sellerpanel3.length < 1) return balas("Tidak ada grup VIP reseller panel")
if (!m.isGroup) return onlyGroup();
let input = text ? text : m.chat
if (input == "all") {
sellerpanel3.length = 0
await fs.writeFileSync("./database/panelseller3.json", JSON.stringify(sellerpanel3, null, 2))
return balas(`Berhasil menghapus semua grup VIP reseller panel ✅`)
}
if (!sellerpanel3.includes(input)) return balas(`¡Este grupo no es un grupo de panel de revendedores VIP!`)
let posi = sellerpanel3.indexOf(input)
await sellerpanel3.splice(posi, 1)
await fs.writeFileSync("./database/panelseller3.json", JSON.stringify(sellerpanel3, null, 2))
balas(`Berhasil menghapus grup VIP reseller panel ✅`)
}
break

case "listakses-pv": {
if (!isCreator) return balas(mesg.own);
if (sellerpanel3.length < 1) return balas("Tidak ada grup VIP reseller panel")
const datagc = await neo.groupFetchAllParticipating()
let teks = ""
for (let i of sellerpanel3) {
let nama = datagc[i].subject || "Grup tidak ditemukan"
teks += `\n* ${i}
* ${nama}\n`
}
return balas(teks)
}
break

//——————————[ Bot Control ]——————————//

case "addowner": {
        if (!isCreator) return balas(mesg.own);
        if (!text) return example("Tag atau sebut nomor yang ingin dijadikan owner!");
        let user = m.mentionedJid[0] || text.replace(/\D/g, '') + "@s.whatsapp.net";
        if (ownerList.includes(user)) return balas(`Nomor ${user.split('@')[0]} sudah menjadi owner!`);
        ownerList.push(user);
        await saveOwnerList();
        balas(`Berhasil menambahkan ${user.split('@')[0]} sebagai owner bot.`);
    }
    break;

    case "delowner": {
        if (!isCreator) return balas(mesg.own);
        if (!text) return example("Tag atau sebut nomor owner yang ingin dihapus!");
        let user = m.mentionedJid[0] || text.replace(/\D/g, '') + "@s.whatsapp.net";
        if (!ownerList.includes(user)) return balas(`Nomor ${user.split('@')[0]} ¡No es el dueño!`);
        ownerList = ownerList.filter(o => o !== user);
        await saveOwnerList();
        balas(`Eliminado exitosamente ${user.split('@')[0]} de la lista de propietarios de bots.`);
    }
    break;

case "listowner": {
        if (!isCreator) return balas(mesg.own);
        if (ownerList.length === 0) return balas("Belum ada owner yang terdaftar.");
        let teks = "╭───「 *LIST OWNER WABOT* 」───\n";
        ownerList.forEach((owner, index) => {
            teks += `├─ ${index + 1}. ${owner.split('@')[0]}\n`;
        });
        teks += "╰───────────────";
        balas(teks);
    }
    break;
case 'owner': {
  const kontakUtama = {
    displayName: 'WABOT Admin',
    vcard: `BEGIN:VCARD
VERSION:3.0
N:;;;; 
FN:${global.ownername}
item1.TEL;waid=${global.ownernumber}:${global.ownernumber}
item1.X-ABLabel:Desarrollador
item2.TEL;waid=${global.ownernumber}:${global.ownernumber}
item2.X-ABLabel:Admintrador
EMAIL;type=correo:${email}
ORG:Studio Server
END:VCARD`
  }
  await neo.sendMessage(from, {
    contacts: { contacts: [kontakUtama] },
    contextInfo: {
      forwardingScore: 999,
      isForwarded: false,
      mentionedJid: [sender],
      externalAdReply: {
        showAdAttribution: true,
        renderLargerThumbnail: true,
        title: font(`Studio Server | WABOT`),
        containsAutoReply: true,
        mediaType: 1,
        jpegThumbnail: await getBuffer(global.imglogo),
        mediaUrl: `https://www.youtube.com/@Studio_server`,
        sourceUrl: `https://www.youtube.com/@Studio_server`
      }
    }
  }, { quoted: qneo })
}
break
    
case 'self':
  if (!isCreator) return balas(mesg.own);
  if (global.selfmode) return balas('Bot sudah dalam mode *self*.');
  global.selfmode = true;
  balas('Successfully switched to *self* mode.');
  break;

case 'public':
  if (!isCreator) return balas(mesg.own);
  if (!global.selfmode) return balas('Bot sudah dalam mode *public*.');
  global.selfmode = false;
  balas('Successfully switched to *public* mode.');
  break;
  
case 'autoviewsw':
    if (!isCreator) return balas(mesg.own);
    if (!q) return example ('on/off');

    if (q.toLowerCase() === 'on') {
        db.settings.autoview = true;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('Auto View Status berhasil diaktifkan.');
    } else if (q.toLowerCase() === 'off') {
        db.settings.autoview = false;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('Auto View Status berhasil dinonaktifkan.');
    } else {
        example('on / off');
    }
    break;
 
case 'gconly':
    if (!isCreator) return balas(mesg.own);
    if (!q) return example('on/off');

    if (q.toLowerCase() === 'on') {
        db.settings.gconly = true;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('Mode GC Only diaktifkan. Bot akan diam di chat pribadi.');
    } else if (q.toLowerCase() === 'off') {
        db.settings.gconly = false;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('Mode GC Only dimatikan. Bot akan aktif di semua chat.');
    } else {
        reply('Gunakan: .gconly on / off');
    }
    break;
    
case 'setcmd':
    if (!isCreator) return balas(mesg.own);
    if (!quoted || quoted.mimetype !== 'image/webp') return example('Reply ke stiker-nya!');
    if (!q) return example('Masukin command yang mau dipicu dari stiker\nContoh: .setcmd .1gb');

    let media = await quoted.download();
    let hash = crypto.createHash('md5').update(media).digest('hex');
    db.stickcmd[hash] = q;
    fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
    reply(`Command *${q}* berhasil di-bind ke stiker ini!`);
    break;

case 'delcmd':
    if (!isCreator) return balas(mesg.own);
    if (!quoted || quoted.mimetype !== 'image/webp') return example('Reply ke stiker yang mau dihapus!');

    let media2 = await quoted.download();
    let hash2 = crypto.createHash('md5').update(media2).digest('hex');

    if (!db.stickcmd[hash2]) return reply('Stiker ini belum di-bind ke command apapun.');
    delete db.stickcmd[hash2]
    fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
    reply('Command dari stiker berhasil dihapus.');
    break;
    
case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_ \n ${oldd - neww} _milesegundos_\n\nTiempo de ejecución  : ${runtime(process.uptime())}

💻 Info Servidor
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_Memoria de uso_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total del uso CPU_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Uso (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`
balas(respon);
}
break

case "sc": case "script": {
    const ytLink = "https://www.youtube.com/@Studio_server";
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: "Puedes ver el infrome o desarrollo de este bot en el siguiente enlace:"
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "Studio Server Developer"
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: { url: imgmenu } }, { upload: neo.waUploadToServer })),
                        title: "*Infrome del BOT*",
                        gifPlayback: false,
                        subtitle: "Studio Server Developer",
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Ver",
                                    url: ytLink
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: qwa });

    return await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break;

case 'donasi': {
  const teks = `
*Studio Server | Donar al desarrollador*

_"Tu apoyo es fundamental para el desarrollo y mantenimiento de este bot. Si te gusta lo que hago, considera hacer una donación para ayudarme a seguir mejorando y ofreciendo nuevas funciones."_

*Metodo de apoyar:*
_Por el momento no contamos con un metod directo, pero puede ponerce en contacto con el adminitrador y el le diria como se recibira su apoyo._
wa.me/${global.ownernumber}

Su apoyo sera recnocido!
  `.trim();

  balas(teks);
}
break;

//——————————[ Tools ]——————————//

case "reactch": {
  if (!isCreator) return balas(mesg.own);
  if (!text) return example("https://whatsapp.com/channel/invite/kode/channelid pesan");

  const [link, ...messageParts] = text.split(" ");
  const messageText = messageParts.join(" ");

  if (!link || !messageText) return balas("Format salah. Gunakan: .reactch2 <link> <pesan>");
  if (!link.includes("https://whatsapp.com/channel/")) return balas("Link channel tidak valid!");

  let inviteCode = link.split('/')[4];
  let serverId = link.split('/')[5];

  const allMap = {
    map1: {
      name: "🅚🅞🅣🅐🅚 🅑🅞🅛🅓",
      char: { 
      a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙',
        k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣',
        u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        1: '➊', 2: '➋', 3: '➌', 4: '➍', 5: '➎', 6: '➏', 7: '➐', 8: '➑', 9: '➒', 0: '⓿',
        ' ': '▫️'
      }
    },
    map2: {
      name: "🄺🄾🅃🄰🄺 🄿🅄🅃🄸🄷",
      char: { 
      a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸', j: '🄹',
        k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃',
        u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉',
        1: '1️⃣', 2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣', 6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣', 0: '0️⃣',
        ' ': '⬜'
      }
    },
    map3: {
      name: "Emoji Random",
      char: { 
      a: '🍎', b: '🅱️', c: '🌜', d: '🌛', e: '🎗️', f: '🎏', g: '🌀', h: '♓', i: '🎐', j: '🎷',
        k: '🎋', l: '🛴', m: '〽️', n: '🎶', o: '⚽', p: '🅿️', q: '🍳', r: '🌱', s: '💲', t: '🌴',
        u: '⛎', v: '✅', w: '🔱', x: '❌', y: '🍸', z: '⚡',
        1: '1️⃣', 2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣', 6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣', 0: '0️⃣',
        ' ': '➖'
      }
    }
  };
   const button = [
    {
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        title: "Pilih Gaya Reaction",
        sections: [
          {
            title: "Gaya Map Emoji",
            rows: Object.entries(allMap).map(([id, map]) => ({
              header: map.name,
              title: `Gunakan ${map.name}`,
              description: `Terapkan gaya ini ke pesan`,
              id: `.reactnow ${id} ${inviteCode} ${serverId} ${messageText}`
            }))
          }
        ]
      })
    }
  ];

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({ text: "Pilih gaya reaction emoji yang ingin digunakan:" }),
          footer: proto.Message.InteractiveMessage.Footer.create({ text: foot }),
          header: proto.Message.InteractiveMessage.Header.create({
            ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
            title: `⟪ ${global.botname} - Reaction Emoji ⟫`,
            gifPlayback: true,
            subtitle: "Zass Official",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: button
          })
        })
      }
    }
  }, { userJid: m.sender, quoted: m });

  await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break;
case 'style': {
    if (!text) return reply(`Contoh penggunaan:\n${prefix}style zass\n\nPilih gaya font melalui tombol interaktif.`);

    const fontList = [
        { id: 1, name: 'Aesthetic' },
        { id: 2, name: 'Bold' },
        { id: 3, name: 'Italic' },
        { id: 4, name: 'Monospace' },
        { id: 5, name: 'Bubble' },
        { id: 6, name: 'Small Caps' },
        { id: 7, name: 'Glitch' },
        { id: 8, name: 'Fraktur' },
        { id: 9, name: 'Wide (Zalgo Style)' },
        { id: 10, name: 'Underline' }
    ];

    const button = [{
        name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: "Pilih Gaya Font",
            sections: [{
                title: "Gaya Font Tersedia",
                rows: fontList.map(f => ({
                    header: f.name,
                    title: `Ubah ke ${f.name}`,
                    description: `ID Font: ${f.id}`,
                    id: `${prefix}font ${f.id} ${text}`
                }))
            }]
        })
    }];

    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Ubah teks berikut ke gaya lain:\n\n❝ ${text} ❞`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: foot
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
                        title: `🎨 Pilihan Gaya Font`,
                        gifPlayback: false,
                        subtitle: `Pilih Font`,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: button
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: m });

    await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break;
case 'font': {
    if (!text) return reply(`Contoh penggunaan:\n${prefix}font 1 naruya izumi\n\nKetik ${prefix}font list untuk melihat pilihan font yang tersedia.`);

    const styles = {
        1: (txt) => txt.replace(/[a-zA-Z]/g, c =>
            String.fromCodePoint(c <= 'Z' ? 0x1D63C + c.charCodeAt(0) : 0x1D656 + c.charCodeAt(0) - 97)),
        2: (txt) => txt.replace(/[a-zA-Z]/g, c =>
            String.fromCodePoint(c <= 'Z' ? 0x1D400 + c.charCodeAt(0) - 65 : 0x1D41A + c.charCodeAt(0) - 97)),
        3: (txt) => txt.replace(/[a-zA-Z]/g, c =>
            String.fromCodePoint(c <= 'Z' ? 0x1D434 + c.charCodeAt(0) - 65 : 0x1D44E + c.charCodeAt(0) - 97)),
        4: (txt) => txt.replace(/[a-zA-Z]/g, c =>
            String.fromCodePoint(c <= 'Z' ? 0x1D670 + c.charCodeAt(0) - 65 : 0x1D68A + c.charCodeAt(0) - 97)),
        5: (txt) => txt.replace(/[a-z]/g, c =>
            String.fromCharCode(0x24D0 + c.charCodeAt(0) - 97)).replace(/[A-Z]/g, c =>
            String.fromCharCode(0x24B6 + c.charCodeAt(0) - 65)),
        6: (txt) => txt.replace(/[a-z]/g, c => {
            const smallCaps = {
                a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ',
                h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ',
                o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ',
                v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
            };
            return smallCaps[c] || c;
        }),
        7: (txt) => {
            const combo = {
                a: '𝙖', b: '𝙗', c: '𝙘', d: '𝙙', e: '𝙚', f: '𝙛', g: '𝙜', h: '𝙝',
                i: '𝙞', j: '𝙟', k: '𝙠', l: '𝙡', m: '𝙢', n: '𝙣', o: '𝙤', p: '𝙥',
                q: '𝙦', r: '𝙧', s: '𝙨', t: '𝙩', u: '𝙪', v: '𝙫', w: '𝙬', x: '𝙭',
                y: '𝙮', z: '𝙯',
                A: '𝘼', B: '𝘽', C: '𝘾', D: '𝘿', E: '𝙀', F: '𝙁', G: '𝙂', H: '𝙃',
                I: '𝙄', J: '𝙅', K: '𝙆', L: '𝙇', M: '𝙈', N: '𝙉', O: '𝙊', P: '𝙋',
                Q: '𝙌', R: '𝙍', S: '𝙎', T: '𝙏', U: '𝙐', V: '𝙑', W: '𝙒', X: '𝙓',
                Y: '𝙔', Z: '𝙕',
            };
            const glitch = ['͢', '͎', '̷', '͓̽', '͖', '͜', '͓', '̇'];
            return txt.split('').map((c) => {
                let g = combo[c] || c;
                if (/[a-zA-Z]/.test(c) && Math.random() > 0.6) {
                    g += glitch[Math.floor(Math.random() * glitch.length)];
                }
                return g;
            }).join('');
        },
        8: (txt) => txt.replace(/[a-z]/g, c => {
            const fraktur = {
                a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤',
                h: '𝔥', i: '𝔦', j: '𝔧', k: '𝔨', l: '𝔩', m: '𝔪', n: '𝔫',
                o: '𝔬', p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱', u: '𝔲',
                v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷'
            };
            return fraktur[c] || c;
        }).replace(/[A-Z]/g, c => {
            const frakturCap = {
                A: '𝔄', B: '𝔅', C: 'ℭ', D: '𝔇', E: '𝔈', F: '𝔉', G: '𝔊',
                H: 'ℌ', I: 'ℑ', J: '𝔍', K: '𝔎', L: '𝔏', M: '𝔐', N: '𝔑',
                O: '𝔒', P: '𝔓', Q: '𝔔', R: 'ℜ', S: '𝔖', T: '𝔗', U: '𝔘',
                V: '𝔙', W: '𝔚', X: '𝔛', Y: '𝔜', Z: 'ℨ'
            };
            return frakturCap[c] || c;
        }),
        9: (txt) => txt.replace(/[a-zA-Z]/g, c => {
            const wide = {
                a: 'ａ', b: 'ｂ', c: 'ｃ', d: 'ｄ', e: 'ｅ', f: 'ｆ', g: 'ｇ',
                h: 'ｈ', i: 'ｉ', j: 'ｊ', k: 'ｋ', l: 'ｌ', m: 'ｍ', n: 'ｎ',
                o: 'ｏ', p: 'ｐ', q: 'ｑ', r: 'ｒ', s: 'ｓ', t: 'ｔ', u: 'ｕ',
                v: 'ｖ', w: 'ｗ', x: 'ｘ', y: 'ｙ', z: 'ｚ',
                A: 'Ａ', B: 'Ｂ', C: 'Ｃ', D: 'Ｄ', E: 'Ｅ', F: 'Ｆ', G: 'Ｇ',
                H: 'Ｈ', I: 'Ｉ', J: 'Ｊ', K: 'Ｋ', L: 'Ｌ', M: 'Ｍ', N: 'Ｎ',
                O: 'Ｏ', P: 'Ｐ', Q: 'Ｑ', R: 'Ｒ', S: 'Ｓ', T: 'Ｔ', U: 'Ｕ',
                V: 'Ｖ', W: 'Ｗ', X: 'Ｘ', Y: 'Ｙ', Z: 'Ｚ'
            };
            return wide[c] || c;
        }),
        10: (txt) => txt.split('').map(c => /[a-zA-Z]/.test(c) ? c + '͟' : c).join('')
    };

    if (text.toLowerCase() === 'list') {
        return reply(`List Style:\n
1. Aesthetic
2. Bold
3. Italic
4. Monospace
5. Bubble
6. Small Caps
7. Glitch Aesthetic
8. Fraktur
9. Wide (Zalgo Style)
10. Underline`);
    }

    const [num, ...txtArr] = text.trim().split(' ');
    const styleNum = parseInt(num);
    const txt = txtArr.join(' ');

    if (!styles[styleNum]) return reply(`Style tidak tersedia!\nKetik *${prefix}font list* untuk melihat daftar font.`);
    if (!txt) return reply(`Teks tidak boleh kosong!\nContoh: *${prefix}font 2 zass*`);

    const result = styles[styleNum](txt);
    reply(result);
}
break;

case "reactnow": {
  if (!isCreator) return;
  let [mapid, inviteCode, serverId, ...pesan] = text.split(" ");
  pesan = pesan.join(" ");

  const allMap = {
    map1: {
      name: "Kotak Bold",
      char: { 
      a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙',
        k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣',
        u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        1: '➊', 2: '➋', 3: '➌', 4: '➍', 5: '➎', 6: '➏', 7: '➐', 8: '➑', 9: '➒', 0: '⓿',
        ' ': '▫️'
      }
    },
    map2: {
      name: "Kotak Putih",
      char: { 
      a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸', j: '🄹',
        k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃',
        u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉',
        1: '1️⃣', 2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣', 6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣', 0: '0️⃣',
        ' ': '⬜'
      }
    },
    map3: {
      name: "Emoji Random",
      char: { 
      a: '🍎', b: '🅱️', c: '🌜', d: '🌛', e: '🎗️', f: '🎏', g: '🌀', h: '♓', i: '🎐', j: '🎷',
        k: '🎋', l: '🛴', m: '〽️', n: '🎶', o: '⚽', p: '🅿️', q: '🍳', r: '🌱', s: '💲', t: '🌴',
        u: '⛎', v: '✅', w: '🔱', x: '❌', y: '🍸', z: '⚡',
        1: '1️⃣', 2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣', 6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣', 0: '0️⃣',
        ' ': '➖'
      }
    }
  };

  const selMap = {
    map1: allMap.map1,
    map2: allMap.map2,
    map3: allMap.map3
  }[mapid];

  if (!selMap) return balas("Map tidak ditemukan!");
  const converted = pesan.toLowerCase().split("").map(char => selMap.char[char] || "").join("");
  if (!converted) return balas("Pesan hanya boleh berisi huruf, angka, dan spasi");

  try {
    let res = await neo.newsletterMetadata("invite", inviteCode);
    await neo.newsletterReactMessage(res.id, serverId, converted);
    balas(`Berhasil mengirim reaction:\n${converted}\nke channel *${res.name}*`);
  } catch (e) {
    console.log(e);
    balas("Gagal mengirim reaction.");
  }
}
break;

case 'ttsai': 
case 'tts': {
  if (!text) return balas('❗ ¡Ingresa el texto que quieres convertir a voz!\nEjemplo: .ttsai miku hola soy miku');

  const voiceList = [
    { name: "Hatsune Miku", id: "miku" },
    { name: "Nahida (Exclusivo)", id: "nahida" },
    { name: "Nami", id: "nami" },
    { name: "Ana(Femenino)", id: "ana" },
    { name: "Optimus Prime", id: "optimus_prime" },
    { name: "Goku", id: "goku" },
    { name: "Taylor Swift", id: "taylor_swift" },
    { name: "Elon Musk", id: "elon_musk" },
    { name: "Mickey Mouse", id: "mickey_mouse" },
    { name: "Kendrick Lamar", id: "kendrick_lamar" },
    { name: "Angela Adkins", id: "angela_adkinsh" }
  ];

  const split = text.trim().split(" ");
  const isVoiceName = voiceList.some(v => v.id.toLowerCase() === split[0].toLowerCase());

  if (isVoiceName) {

    let [voice, ...textArr] = split;
    let queryText = encodeURIComponent(textArr.join(' '));

    try {
      const res = await fetch(`https://cikaa-rest-api.vercel.app/tools/text-to-speech?text=${queryText}`);
      const data = await res.json();

      if (!data.status || !data.result) return m.reply('❌ Gagal mengambil data suara.');

      const voiceData = data.result.find(v => v.voice_name.toLowerCase().includes(voice.toLowerCase()));
      if (!voiceData) return m.reply(`❌ Suara "${voice}" tidak ditemukan.`);

      const audioUrl = Object.values(voiceData).find(val => typeof val === 'string' && val.endsWith('.wav'));
      if (!audioUrl) return m.reply('❌ Gagal mendapatkan file audio.');

      const audioRes = await fetch(audioUrl);
      const audioBuffer = await audioRes.arrayBuffer();
      const buffer = Buffer.from(audioBuffer);

      await neo.sendMessage(m.chat, {
        audio: buffer,
        mimetype: 'audio/mpeg',
        ptt: true
      }, { quoted: m });
    } catch (err) {
      console.error(err);
      balas('⚠️ Terjadi kesalahan saat mengambil TTS.');
    }

  } else {
    const queryText = text.trim();
    const encodedText = encodeURIComponent(queryText);
    
    const button = [{
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        title: "Seleccionar personaje",
        sections: [{
          title: "Personajes disponibles",
          rows: voiceList.map(v => ({
            header: v.name,
            title: `Usar la voz ${v.name}`,
            description: `ID: ${v.id}`,
            id: `${prefix}ttsai ${v.id} ${queryText}`
          }))
        }]
      })
    }];

    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `Cambiar el texto a voz de los siguientes personajes de anime:\n\n❝ ${queryText} ❞`
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: foot
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({ image: { url: global.imgthumb } }, { upload: neo.waUploadToServer })),
              title: `🗣️ Seleccionar Voz TTS`,
              gifPlayback: false,
              subtitle: `Anime Voice Generator`,
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: button
            })
          })
        }
      }
    }, { userJid: m.sender, quoted: qwa });

    await neo.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
  }
}
break;

case 'pinterest': case 'pin': {
    if (!text) return balas(`Format salah, contoh:\n${prefix + command} WABOT`);
    await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    let parts = text.trim().split(' ');
    let possibleIndex = parseInt(parts[parts.length - 1]);
    let keyword = text;
    let index = 0;

    if (!isNaN(possibleIndex)) {
        index = possibleIndex - 1;
        parts.pop();
        keyword = parts.join(' ');
    }

    if (typeof pinterestSession !== 'object') pinterestSession = {};

    if (!pinterestSession[m.chat] || pinterestSession[m.chat].keyword !== keyword) {
        let anutrest = await pinterest(keyword);
        if (!anutrest || anutrest.length === 0) return reply("Gambar tidak ditemukan!");
        pinterestSession[m.chat] = {
            keyword,
            results: anutrest,
            currentIndex: 0
        };
    }

    let session = pinterestSession[m.chat];
    let results = session.results;

    if (index >= results.length || index < 0) index = 0;
    session.currentIndex = index;

    let imageData = results[index];
    let nextIndex = (index + 1) % results.length + 1;
    let teksnya =
        `👤 *Subido por* : ${imageData.upload_by}\n` +
        `📛 *Nombre completo* : ${imageData.fullname}\n` +
        `👥 *Seguidores* : ${imageData.followers}\n` +
        `📝 *Subtítulo* : ${imageData.caption}\n` +
        `\nImage ${index + 1} de ${results.length}`;

    const messageContent = await prepareWAMessageMedia({ image: { url: imageData.image } }, { upload: neo.waUploadToServer });

    let msgii = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: { mentionedJid: [m.sender] },
                    body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }),
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: foot }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...messageContent,
                        title: `\`⟪ ${global.botname} - ${versi} ⟫\``,
                        subtitle: botname,
                        hasMediaAttachment: true
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Siguiente",
                                    id: `${prefix}pin ${keyword} ${nextIndex}`
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: qwa });
    await neo.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    await neo.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });
}
break;
case "superhd": case "hd": case "remini": {
if (!quoted) balas('Reply Image and command .hd')
if (!/image/.test(mime)) return balas("dengan kirim/reply foto")
let foto = await neo.downloadAndSaveMediaMessage(quoted)
let result = await remini(await fs.readFileSync(foto), "enhance")
await neo.sendMessage(m.chat, {image: result}, {quoted: qwb})
await fs.unlinkSync(foto)
}
break
case 'tourl': {
  if (!m.quoted || !m.quoted.fileSha256) return example(`Balas file media (img, vid, audio, doc, gif, sticker, dll)`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  let media = await m.quoted.download();
  if (!media) return balas("❌ Gagal mengunduh media!");

  try {
    const axios = require('axios');
    const FormData = require('form-data');
    const fs = require('fs');
    const path = require('path');

    // Buat folder temp jika belum ada
    if (!fs.existsSync('./temp')) fs.mkdirSync('./temp');

    const extension = mime.split('/')[1] || 'file';
    const fileName = `NeoUpload_${Date.now()}.${extension}`;
    const filePath = `./temp/${fileName}`;
    fs.writeFileSync(filePath, media);

    const form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', fs.createReadStream(filePath));

    const res = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    });

    fs.unlinkSync(filePath);

    const url = res.data.trim();
    if (!url.includes('https://')) return balas("❌ Gagal mengunggah ke Catbox!");

    const sizeKb = (media.length / 1024).toFixed(2);
    const caption = `*Upload Berhasil!*\n\n` +
                    `*• Nama:* ${fileName}\n` +
                    `*• Ukuran:* ${sizeKb} KB\n` +
                    `*• Tipe:* ${mime}\n` +
                    `*• Link:* ${url}`;

    const buttonMsg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({ text: caption }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: 'cta_copy',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'Salin Link',
                    copy_code: url
                  })
                }
              ]
            })
          })
        }
      }
    }, { userJid: m.sender, quoted: m });

    await neo.relayMessage(m.chat, buttonMsg.message, { messageId: buttonMsg.key.id });

  } catch (err) {
    console.error(err);
    balas("❌ Terjadi kesalahan saat upload ke Catbox!");
  }
}
break;

//——————————[ Downloader ]——————————//


case 'tt':
case 'ttnowm':
case 'tiktok': {
if (!text) return balas(`*ERROR*\nEjemplo: .play musica`)
   await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

const axios = require('axios');

    const { data: res } = await axios.get(`https://api.studioserver.org/download/tiktok?query=${encodeURIComponent(text)}`);

    const description = res.data.information.description;
    const creator = res.data.information.tiktokId;
    const imagetumb = res.data.information.thumbnailUrl;


console.log(imagetumb);


let bodytextnya = `Titulo : *${description}*\nUrl : *${text}*`
            let bokepp = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bodytextnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: foot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : imagetumb }}, { upload: neo.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "ownername",
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video 🎬","id":"${prefix}tiktokv ${text}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎧","id":"${prefix}tiktoka ${text}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: namach,
                    newsletterJid: idSaluran,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})


 await neo.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

await neo.relayMessage(bokepp.key.remoteJid, bokepp.message, {
  messageId: bokepp.key.id
})
}
break

case 'tiktokv': {
  if (!text) return balas(`❌ Proporciona un enlace de TikTok para el video.`);
  
  await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const res = await fetchJson(`https://api.studioserver.org/download/tiktok?query=${encodeURIComponent(text)}`);
    if (!res?.status || !res?.data?.video) throw '❌ No se encontró el video sin marca de agua.';

    await neo.sendMessage(m.chat, {
      video: { url: res.data.video },
      caption: `✅ *Video descargado con éxito*`
    },await neo.sendMessage(m.chat, { react: { text: '✅', key: m.key } }), { quoted: m });

  } catch (err) {
    console.error(err);
    balas('❌ Error al obtener el vídeo de TikTok.');
  }
}
break;

case 'tiktoka': {
  if (!text) return balas(`❌ Proporciona un enlace de TikTok para el audio.`);
  
  await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const res = await fetchJson(`https://api.studioserver.org/download/tiktok?query=${encodeURIComponent(text)}`);
    if (!res?.status || !res?.data?.audio) throw '❌ No se encontró el audio del video.';

    const audioBuffer = await fetch(res.data.audio).then(res => res.buffer());

    await neo.sendMessage(m.chat, { 
      audio: audioBuffer, 
      mimetype: 'audio/mpeg', 
      ptt: true 
    },await neo.sendMessage(m.chat, { react: { text: '✅', key: m.key } }), { quoted: m });

  } catch (err) {
    console.error(err);
    balas('❌ Error al obtener el audio de TikTok.');
  }
}
break;

case 'ig':
case 'instagram':
case 'igdl': {
  if (!text) return example(`https://www.instagram.com/reel/CxyzABC123/`);

  await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const res = await fetchJson(`https://api.vreden.my.id/api/instagram?url=${encodeURIComponent(text)}`);
    if (!res?.result || !Array.isArray(res.result)) throw 'Gagal mengambil media IG!';

    for (let media of res.result) {
      let sendOpt = { quoted: m };
      if (/image/.test(media.type)) {
        await neo.sendMessage(m.chat, { image: { url: media.url }, caption: '✅ Foto IG berhasil diunduh!' }, sendOpt);
      } else if (/video/.test(media.type)) {
        await neo.sendMessage(m.chat, { video: { url: media.url }, caption: '✅ Video IG berhasil diunduh!' }, sendOpt);
      }
    }
  } catch (e) {
    console.error(e);
    balas('❌ Gagal mengambil media dari Instagram.');
  }
}
break;


case 'ytaudio': case 'youtubemp3': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 1228kbps`
await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
downloadMp3(text)
}
break
case "ytreels": case "ytmp4":{
if (!text) return reply('Masukan Link Nya!!!')
  await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
downloadMp4(text)
}
break

case 'play': {
if (!text) return balas(`*ERROR*\nEjemplo: .play musica`)
   await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
let yts = require ('yt-search')
let search = await yts(`${text}`)
let linknya = search.all[0].url
let bodytextnya = `Titulo : *${search.all[0].title}*\nVistas : *${search.all[0].views}*\nDuracion : *${search.all[0].timestamp}*\nSubido video : *${search.all[0].ago}*\nUrl : *${linknya}*`
            let bokepp = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bodytextnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: foot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : search.all[0].thumbnail }}, { upload: neo.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "ownername",
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video 🎬","id":"${prefix}ytmp4 ${linknya}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎧","id":"${prefix}ytaudio ${linknya}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: namach,
                    newsletterJid: idSaluran,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})


 await neo.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

await neo.relayMessage(bokepp.key.remoteJid, bokepp.message, {
  messageId: bokepp.key.id
})
}
break

//——————————[ Sticker ]——————————//

case 'sticker':
case 'stiker':
case 's': {
  if (!quoted || (!/image/.test(mime) && !/video/.test(mime))) return example(`Debe relacionar le comando con foto/video`);


  let media = await neo.downloadAndSaveMediaMessage(quoted);

  let stickerOptions = {
    packname: global.packname || 'NeoBotz',
    author: global.author || 'Shiroko AI'
  };

  try {
    await neo.sendImageAsSticker(m.chat, media, m, stickerOptions);
  } catch {
    try {
      await neo.sendVideoAsSticker(m.chat, media, m, {
        ...stickerOptions,
        fps: 10,
        loop: 0
      });
    } catch (err) {
      console.error(err);
      balas('❌ No se ha podido ahcer el sticker.');
    }
  }

  fs.unlinkSync(media);
}
break;

case 'bratnime': {
  if (!text) return example(`halo bro`);
  if (text.length > 250) return balas(`Karakter terbatas, maksimal 250 huruf!`);

  balas('⏳ Membuat stiker bratnime...');

  try {
    const res = await fetch(`https://api.agungny.my.id/api/animbrat?q=${encodeURIComponent(text)}`);
    if (!res.ok) throw 'API error';

    const buffer = await res.buffer();

    await neo.sendImageAsSticker(m.chat, buffer, m, {
      packname: global.packname || 'NeoBotz',
      author: global.author || 'Shiroko AI-Zass Official'
    });
  } catch (err) {
    console.error(err);
    balas('❌ Gagal mengambil stiker bratnime. Coba lagi nanti.');
  }
}
break;

case "brat": {
if (!text) return example("Hello World!")
await neo.sendImageAsSticker(m.chat, `https://vapis.my.id/api/bratv1?q=${text}`, m, {packname: packname})
}
break

case "qc": {
if (!text) return example('teksnya')
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let ppuser
try {
ppuser = await neo.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/c6fbacafe23d6ab6a801e.jpg'
}
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
balas(msg.wait)
const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": reswarna,
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.pushName,
            "photo": {
               "url": ppuser
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   try {
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
neo.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname })
   } catch (error) {
   balas(error.toString())
   }
}
break

//——————————[ Grup Manage ]——————————//
case 'openchat':
case 'closechat': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isBotAdmins) return balas(mesg.botadm);
  if (!isAdmins) return balas(mesg.adm);

  const isClose = command.toLowerCase() === 'closechat';
  const actionText = isClose ? 'cerrado' : 'abierto';
  const doneText = isClose ? '❌ El grupo ha sido cerrado solo para administradores.' : '✅ ¡El grupo ahora está abierto a todos los miembros!';

  await neo.groupSettingUpdate(m.chat, isClose ? 'announcement' : 'not_announcement')
    .then(() => balas(`🔧 *Exito ${actionText} Grupo.*\n\n${doneText}`))
    .catch((err) => {
      console.error(err);
      m.reply('⚠️ No se pudo cambiar la configuración del grupo. ¡Asegúrate de que el bot sea administrador!');
    });
}
break;

case 'kick': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isBotAdmins) return balas(mesg.botadm);
  if (!isAdmins) return balas(mesg.adm);

  let targets = [];

  if (m.quoted) targets.push(m.quoted.sender);
  if (m.mentionedJid.length) targets.push(...m.mentionedJid);
  if (targets.length === 0) return balas('❗ *Tag atau reply ke member yang ingin dikeluarkan!*');

  targets = [...new Set(targets)];

  for (let user of targets) {
    if (user === m.sender) continue; // Jangan kick yang ngeksekusi
    if (user === neo.user.jid) continue; // Jangan kick bot
    if (typeof global.owner === 'object' && global.owner.map ? global.owner.map(v => v + "@s.whatsapp.net").includes(user) : global.owner + "@s.whatsapp.net" === user) {
      m.reply(`⚠️ Tidak bisa mengeluarkan owner: @${user.split("@")[0]}`, { mentions: [user] });
      continue;
    }

    await neo.groupParticipantsUpdate(m.chat, [user], 'remove')
      .then(() => balas(`✅ Berhasil mengeluarkan: @${user.split("@")[0]}`, { mentions: [user] }))
      .catch((err) => {
        console.error(err);
        balas(`❌ Gagal mengeluarkan: @${user.split("@")[0]}`, { mentions: [user] });
      });
  }
}
break;

case 'promote':
case 'demote': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isBotAdmins) return balas(mesg.botadm);
  if (!isAdmins) return balas(mesg.adm);

  const isPromote = command === 'promote';
  let target;

  if (m.quoted) {
    target = m.quoted.sender;
  } else if (m.mentionedJid?.length) {

    target = m.mentionedJid[0];
  } else {
    return reply(`🔖 *Tag atau reply member yang ingin di-${isPromote ? 'jadikan' : 'cabut'} admin.*`);
  }

  try {
    await neo.groupParticipantsUpdate(m.chat, [target], isPromote ? 'promote' : 'demote');
    balas(`✅ *Berhasil ${isPromote ? 'menjadikan' : 'mencabut'} admin!*`);
  } catch (e) {
    console.error(e);
    balas(mesg.err);
  }
}
break;
case 'delete': case 'del': case 'piw': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isAdmins && m.key.participant !== m.sender) return balas(mesg.adm);
  if (!m.quoted) return balas('🗑️ *Balas pesan yang ingin dihapus dengan perintah ini!*');

  try {
    await neo.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.quoted.id,
        participant: m.quoted.sender
      }
    });
  } catch (err) {
    console.error(err);
    reply(mesg.botadm);
  }
}
break;
case 'hidetag': case 'h': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isAdmins && !isCreator) return balas(mesg.adm);

  if (!text) return balas(`📢 *Contoh penggunaan:* ${prefix}${command} Pesan rahasia untuk semua`);

  const groupMetadata = await neo.groupMetadata(m.chat);
  const members = groupMetadata.participants.map(p => p.id);

  await neo.sendMessage(m.chat, {
    text: text,
    mentions: members
  }, { quoted: qwb });
}
break;
case 'ads': case 'p': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isAdmins && !isCreator) return balas(mesg.adm);

  if (!text) return balas(`📢 *Contoh:* ${prefix}${command} 6281234567890,6285798765432 Pesan pentingnya`);

  // Pisah nomor dan isi pesan
  const splitIndex = text.indexOf(' ');
  if (splitIndex === -1) return balas(`❌ Format salah!\n\n*Contoh:* ${prefix}${command} 628xxxxx,628yyyy Halo semua`);

  const numberList = text.slice(0, splitIndex).split(',').map(n => n.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
  const messageText = text.slice(splitIndex + 1);

  if (numberList.length === 0 || !messageText) return balas(`❌ Harap masukkan nomor dan pesan!\n\n*Contoh:* ${prefix}${command} 628xxxxx,628yyyy Halo semua`);

  await neo.sendMessage(m.chat, {
    text: messageText,
    mentions: numberList
  }, { quoted: qwb });
}
break;
//——————————[ Ai Menu ]——————————//
case "ai":
case "andrea": {
  if (!text) {
    return neo.sendMessage(m.chat, {
      text: `📌 *EJEMPLO:* ${prefix + command} Dime que sabes`
    }, { quoted: m });
  }

  const prompt = `
  Eres una sitente que pertence a la empresa de Studio Server, tu nombre es Adrea, tienes la capacidad de responder preguntas y mantener conversaciones con los usuarios. Tu objetivo es proporcionar respuestas útiles y precisas a las consultas de los usuarios. Eres amigable, profesional y siempre estás dispuesta a ayudar.
  Tu conocimiento abarca una amplia gama de temas, incluyendo tecnología, ciencia, historia, cultura general y más. Si no sabes la respuesta a una pregunta, es mejor admitirlo en lugar de inventar información incorrecta. Siempre debes mantener un tono respetuoso y educado en tus respuestas.
  Si un usuario te pide que realices una acción que no está dentro de tus capacidades, como realizar tareas físicas o acceder a información privada, debes explicar amablemente que no puedes hacerlo.
  Tu objetivo es brindar una experiencia positiva y útil a los usuarios, ayudándoles a encontrar la información que necesitan y respondiendo a sus preguntas de manera clara y concisa.
`;

  const requestData = {
    content: text,
    user: m.sender,
    prompt: prompt
  };

  const quoted = m.quoted || m;

  try {
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;
    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    await neo.sendPresenceUpdate('composing', m.chat);

    const res = await axios.post('https://luminai.my.id', requestData);
    const response = res.data.result;

    await neo.sendPresenceUpdate('paused', m.chat);

    global.aiUsageCount[m.sender] = (global.aiUsageCount[m.sender] || 0) + 1;
    const showAds = global.aiUsageCount[m.sender] % 4 === 0;

    await neo.sendMessage(m.chat, {
      text: response + (showAds)
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    await neo.sendPresenceUpdate('paused', m.chat);
    await neo.sendMessage(m.chat, {
      text: '⚠️ Terjadi kesalahan pada sistem. Silakan coba beberapa saat lagi.'
    }, { quoted: m });
  }
}
break;

case 'hoshino': {
  let text = args.join(" ")
  if (!text) {
    return await neo.sendMessage(m.chat, { text: `*Mau ngomong apa ke Hoshino?*\n\n*Coba:* ${prefix + command} halo hoshino~` }, { quoted: m })
  }

  try {
    await neo.sendPresenceUpdate('composing', m.chat)
    let res = await fetch(`https://api.nekorinn.my.id/character-ai/hoshino-takanashi?text=${encodeURIComponent(text)}&sessionid=1`)
    let json = await res.json()
    await neo.sendPresenceUpdate('paused', m.chat)

    if (!json.status || !json.result) {
      return await neo.sendMessage(m.chat, { text: '🍓 *Hoshino nggak ngerti maksudmu... coba lagi ya~*' }, { quoted: m })
    }

    await neo.sendMessage(m.chat, { text: json.result }, { quoted: m })
  } catch (e) {
    console.error(e)
    await neo.sendPresenceUpdate('paused', m.chat)
    await neo.sendMessage(m.chat, { text: '❌ *Hoshino lagi tidur... Zzz.*\n🍓 *Coba nanti lagi ya~*' }, { quoted: m })
  }
}
break

case 'geminiimage':
case 'gmimg': {
  if (!text) {
    return neo.sendMessage(m.chat, {
      text: `⚠️ *Masukkan teks untuk membuat gambar dengan Gemini AI!*\n\n*Contoh:* ${prefix + command} kucing di luar angkasa`
    }, { quoted: m });
  }

  try {
    await balas(mesg.load);
    await neo.sendPresenceUpdate('composing', m.chat);

    let apiUrl = `https://api.nekorinn.my.id/ai-img/gemini-image?text=${encodeURIComponent(text)}`;
    let response = await fetch(apiUrl);

    if (!response.ok) throw new Error(`Status ${response.status}`);

    let buffer = await response.arrayBuffer();
    await neo.sendPresenceUpdate('paused', m.chat);

    await neo.sendMessage(m.chat, {
      image: Buffer.from(buffer),
      caption: `✨ *Gemini AI Generated Image*\n\n📌 *Prompt:* ${text}`,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 1,
          title: "Gemini AI Image Generator",
          body: "Gambar dibuat oleh kecerdasan buatan",
          thumbnailUrl: "https://i.supa.codes/r73xLL",
          renderLargerThumbnail: true,
          sourceUrl: "https://instagram.com/naruyaizumi_"
        }
      }
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    await neo.sendPresenceUpdate('paused', m.chat);
    neo.sendMessage(m.chat, {
      text: `❌ *Gagal menghasilkan gambar dari Gemini.*\n⚠️ *Detail:* ${e.message}`
    }, { quoted: m });

  } finally {
    await reply(m, neo, true);
  }
}
break;

case "ai-art":
case "anime-art":
case "anime-generate": {
  const { GoogleGenerativeAI } = require("@google/generative-ai");


  await neo.sendMessage(m.chat, {
    react: { text: "⏱️", key: m.key }
  });

  const fullPrompt = `${text}`;

  try {
    const genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: { responseModalities: ["Text", "Image"] }
    });

    const result = await model.generateContent({
      contents: [{
        role: "user",
        parts: [{ text: fullPrompt }]
      }]
    });

    let resultImage;
    let resultText = "";

    for (const part of result.response.candidates[0].content.parts) {
      if (part.text) resultText += part.text;
      else if (part.inlineData) resultImage = Buffer.from(part.inlineData.data, "base64");
    }

    if (resultImage) {
      await neo.sendMessage(m.chat, {
        image: resultImage,
        caption: `*Imagen generado por IA!*\nMensaje: ${fullPrompt}`
      }, { quoted: m });
    }
      await neo.sendMessage(m.chat, {
    react: { text: "✅", key: m.key }
  });

  } catch (err) {
    console.error(err);
    m.reply(`${mesg.err}\n${err.message}`);
  }
}
break;
case 'anime-prompt': {
if (!text) return balas(`¿Qué quieres hacer?\nEjemplo: *.anime-prompt* personaje de pelo largo y blanco`);

    const basePrompt = "Estilo anime"; // Prompt default
    const finalPrompt = `${basePrompt}, ${text}`; // Gabungkan dengan input user

    await neo.sendMessage(m.chat, {
        react: { text: "⏱️", key: m.key }
    });

    try {
        const imageUrl = `https://imgen.duck.mom/prompt/${encodeURIComponent(finalPrompt)}`;
        await neo.sendMessage(m.chat, {
            image: { url: imageUrl },
            caption: `Imagen creada exitosamente con mensaje: \n_*${finalPrompt}*_`
        }, { quoted: m });
        await neo.sendMessage(m.chat, {
        react: { text: "✅", key: m.key }
    });
    } catch (error) {
      await neo.sendMessage(m.chat, {
        react: { text: "❌", key: m.key }
    });
        console.error("ha fallado");
        reply(mesg.err);
    }
}
break;

//——————————[ Store Menu ]——————————//

case "payment":
case "pay": {
    const button = [
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "🟦 Dana",
                id: ".dana"
            })
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "🟢 GoPay",
                id: ".gopay"
            })
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "🟣 OVO",
                id: ".ovo"
            })
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "🟨 QRIS (All Pay)",
                id: ".qris"
            })
        }
    ];

    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({ text: "💳 Silakan pilih metode pembayaran yang ingin kamu gunakan:" }),
                    footer: proto.Message.InteractiveMessage.Footer.create({ text: foot }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: { url: logo } }, { upload: neo.waUploadToServer })),
                        title: "🔰 MENU PEMBAYARAN",
                        gifPlayback: false,
                        subtitle: "Klik salah satu tombol di bawah",
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: button
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: qwb });

    return await neo.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
case "dana":
    balas(`🟦 *Dana Payment*\n\nNomor: ${dana}\nNama: ${an.dana}\nSilakan transfer ke nomor di atas dan kirim bukti ke admin.`);
    break;

case "gopay":
    balas(`🟢 *GoPay Payment*\n\nNomor: ${gopay}\nNama: ${an.gopay}\nSilakan transfer ke nomor di atas dan kirim bukti.`);
    break;

case "qris":
    neo.sendMessage(m.chat, {
        image: { url: qris },
        caption: "🟨 *QRIS Universal*\nScan QR di atas dengan aplikasi Dana/GoPay/OVO/ShopeePay/Bank, lalu kirim bukti pembayaran ke admin."
    }, { quoted: qwb });
    break;

case "ovo":
    balas(`🟣 *OVO Payment*\n\nNomor: ${ovo}\nNama: ${an.ovo}\nSilakan transfer ke nomor OVO di atas yaa~`);
    break;
    
case 'testi':
case 'testimoni': {
  if (!isCreator) return balas(mesg.own);
  if (!text) return balas("barang|harga");

  let [barang, harga] = text.split("|");
  if (!barang || !harga) return balas("⚠️ *Format tidak lengkap!*");

  balas(`*Terimakasih Telah Berbelanja*\n\n> Pesanan Anda telah masuk ke dalam testimoni kami\n\n\`[ CHANNEL TESTI ]\`\n${global.link}`);

  const { createCanvas, loadImage } = require('canvas');
  const fs = require('fs');
  const tanggalWaktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
  const idTransaksi = `TRX${Math.floor(1000000 + Math.random() * 9000000)}`;
  const canvasWidth = 400, canvasHeight = 600;
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');

  // Background putih
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Header
  ctx.fillStyle = "#000";
  ctx.font = "bold 24px Arial";
  ctx.textAlign = "center";
  ctx.fillText("TRANSAKSI BERHASIL", canvasWidth / 2, 40);
  ctx.font = "16px Arial";
  ctx.fillText(tanggalWaktu + ' WIB', canvasWidth / 2, 70);

  // Detail kiri
  ctx.textAlign = "left";
  ctx.font = "16px Arial";
  ctx.fillText(`ID Transaksi: ${idTransaksi}`, 20, 130);
  ctx.fillText(`Barang: ${barang}`, 20, 160);
  ctx.fillText(`Harga: Rp${parseInt(harga.replace(/\D/g, '')).toLocaleString()}`, 20, 190);
  ctx.fillText(`Status: Berhasil`, 20, 220);

  // Ucapan
  ctx.textAlign = "center";
  ctx.font = "bold 16px Arial";
  ctx.fillText(`Thx Buy At ${ownername}`, canvasWidth / 2, 300);

  let bottomImagePath = null;

  try {
    // Logo toko
    const logoURL = global.logo;
    const logo = await loadImage(logoURL);
    ctx.drawImage(logo, canvasWidth - 140, 120, 100, 100);

    // Download gambar dari quoted jika ada
    if (m.quoted && (m.quoted.mtype === 'imageMessage' || m.quoted.mtype === 'image')) {
      const quotedImg = await m.quoted.download();
      bottomImagePath = './session/testi-image.jpg';
      fs.writeFileSync(bottomImagePath, quotedImg);
    }

    // Tambahkan gambar bawah jika ada
    if (bottomImagePath && fs.existsSync(bottomImagePath)) {
      const bottomImage = await loadImage(bottomImagePath);
      const size = 270; // Ukuran 1:1 dan tidak menyentuh sudut
const x = (canvasWidth - size) / 2;
const y = canvasHeight - size - 20;
ctx.drawImage(bottomImage, x, y, size, size);
    }
  } catch (e) {
    console.log("Gagal memuat gambar:", e.message);
  }

  // Simpan hasil canvas
  const buffer = canvas.toBuffer("image/png");
  const filePath = "./session/testimoni.png";
  fs.writeFileSync(filePath, buffer);

  const caption = `𝗗𝗢𝗡𝗘 𝗧𝗥𝗫 𝗕𝗬 *${ownername}*\n_#AllTrxNoReff_\n\n▬▬▬▬ ▬▬▬▬ ▬▬▬▬\n*[ 📦 ]* *Produk/Jasa :* ${barang}\n*[ 📦 ]* *Harga :* Rp${parseInt(harga.replace(/\D/g, '')).toLocaleString()}\n*[ 📦 ]* *Toko :* ${ownername}\n*[ 📦 ]* *Status :* Sukses\n▬▬▬▬ ▬▬▬▬ ▬▬▬▬\n> ${tanggalWaktu} WIB\n\n\`CHANNEL TESTI\`\n${link}\n\n\`${namagc}\`\n${linkgc}\n\n_© 2025 - WABOT-S Official_`;

  // Kirim ke Channel
  const channelID = global.link;
  await neo.sendMessage(channelID, { image: { url: filePath }, caption });

  // Kirim juga ke status (optional, bisa hapus bagian ini kalau tidak dipakai)
  await neo.sendMessage("status@broadcast", {
    image: fs.readFileSync(filePath),
    caption: "Testimoni dari WABOT Ai Engine!"
  });

  // Hapus file sementara
  fs.unlinkSync(filePath);
  if (bottomImagePath && fs.existsSync(bottomImagePath)) {
    fs.unlinkSync(bottomImagePath);
  }
}
break;
    
default:
if ((budy.match) && ["bot","tes"].
includes(budy)) {
let teksOn = `━ ⬢ \`BOT ACTIVE\` ⬢ ━
━━━━━━━━━━━━━━━
- ᴊɪᴋᴀ ʙᴏᴛ ᴛᴇʀʜᴜʙᴜɴɢ ᴋᴀʀᴇɴᴀ ᴋᴏᴅᴇ ᴘᴀɪʀɪɴɢ
- ᴍᴀᴋᴀ ᴀᴋᴜ ᴍᴇʀᴇɴᴜɴɢ ᴍᴇʟɪʜᴀᴛᴍᴜ ᴅᴇɴɢᴀɴ ʏᴀɴɢ ʟᴀɪɴ
━━━━━━━━━━━━━━━
Special Quotes By WABOT Ai Eigne`
reply(teksOn)
}
                if (budy.startsWith('=>')) {
                    if (!isCreator) return balas(mesg.own)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return balas(bang)
                    }
                    try {
                        balas(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        balas(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return balas(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await balas(evaled)
                    } catch (err) {
                        await balas(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return balas(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return balas(err)
                        if (stdout) return balas(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
/*if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return*/
console.log('Caught exception: ', err)
})