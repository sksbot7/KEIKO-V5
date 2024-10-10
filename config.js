import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const ownervb = process.env.OWNERS || "916238768108;𝐂𝐚𝐥𝐜𝐢𝐅𝐞𝐫⚡"


const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(owner);
}
//global.owner = [['916238768108', '𝞓𝞛𝞢𝞢𝞜-𝙎𝞢𝞒🗡️', true], ['', 'OWNER2', true], ['']] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['919888280858', '']
global.prems = ['919888280858', '']
global.allowed = ['919888280858', '']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
}

// Sticker WM
global.botname = '𝙎𝙆𝙎 𝘽𝙊𝙏☮︎'
global.premium = 'true'
global.packname = process.env.PACKAGE || '𝙎𝙆𝙎 𝘽𝙊𝙏☮︎'
global.author = process.env.AUTHOR || 'ig|_sks_bot_'
global.menuvid = 'https://graph.org/file/14c9e1c99f5f2b1ad693d.jpg'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/_sks_bot_\n'
global.dygp = 'https://chat.whatsapp.com/DAD1FGg9dES0FpxtrUEheo'
global.fgsc = 'https://sy4m.vercel.app'
global.fglog = 'https://graph.org/file/14c9e1c99f5f2b1ad693d.jpg'
global.thumb = fs.readFileSync('./AMEEN-SER/AMEEN.png')

global.wait = '*Loading..🔃*'
global.rwait = '⛈️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
      
