//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2347053192517";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1taUNhc0QwMEFnditEaDhTdDhRVzRKelUwUFAvcUswU2YvTklybHhsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dlVUdqWDN2Z1hrbEljcjArTWp2NlJkbkpuTk52a2tPWFY2SHUrR1R3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQU16aGVBTGtHOElFeWsvV24vVGlGZlEvdVp4RTZkM0c4UzRhMzh4ZkdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3MlFMa3F6dTY3OVRPVEEyQXlkZHlrR0FKK3BHTHMxaTBjRk9ydDVTZUdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCeFJOMVVZVGgreXl3Lzh3L29kemswK3NqV3RmUGdZeGpQZzYzcktGSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFzWVpOd1l2TFVnQW01NXphWndWS1pnKzlIOElkalVGRjBzSlBneDhJUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0R6YmJjNEdtMWNzZ3ZFSThHN3I1RFoxS3BwcngyYVdYd3NlcEgvYTJFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0VrWDlqc3dQSkVUQW5nMTNmUWZ0Z1pnRmhnZ1JickwrNFhoN1A1Ri9naz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpOSW53dzNEY1dmZXpzWnZCK2FlWmY1dmRUMk1nVnh5QVVoOTYxWmZTellQQzdGYjE1MkZSK1BPb0hXejlRQUgrcVR6RlRxU1R2Tm52UkZmNkxmQ2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJUZ1BQTk5YTnd1Z0ljNTUyWWpwUFl2YUJYUS9weVZXYmZ1cHNKQVQrLzRZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5S1BoWU9QM1RWV3lwZDY2NndHcEZBIiwicGhvbmVJZCI6IjRiODk3N2VkLTJmZWMtNDYzNS1hNGRlLWY2NWNhNmQyYzIxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqdUNpT0RCekxtSjh3NHZXYnl3dlowTG1oQzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURtMDlBUGt6S3NyUUl6bVE5KytzOEZ2RjgwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFGUVE1VkFDIiwibWUiOnsiaWQiOiIyMzQ3MDUzMTkyNTE3Ojc0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLQ3l1TVlIRU4yb243a0dHQThnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrVTVQcTFjejN3UGlpb1huRnVsZFIyQWxNaytpRERCa29pc3ZOM3h6bGlzPSIsImFjY291bnRTaWduYXR1cmUiOiIwN29uT05WQW54d1dkNjJ0d1FmTjZVUmFSYVMvbVA5a1BXbmNiaERVS25BTjNaQ2hTaUJKN2c4NlA1TjRHZ3RTTlFJdHg3MXBoanpJcTRhcm5DdUhEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiemlLQ1F0Ung4OXdQSkxGK1ZzN09UTWt6UGp5dzZWZmU1NlVIMjJQUVFyQ3E5cmIzZVVvNWVmYUIwYUtzQXJWOTdlR3VHWnhFMFRGK2xZZ2RqN3FNZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDUzMTkyNTE3Ojc0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpGT1Q2dFhNOThENG9xRjV4YnBYVWRnSlRKUG9nd3daS0lyTHpkOGM1WXIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA2NjM1MzF9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`☯︎ᴇᴍᴍ ʏʏ✌︎💨`",
  author: process.env.PACK_AUTHER || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  packname: process.env.PACK_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  botname: process.env.BOT_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎ᴇᴍᴍ ʏʏ✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
