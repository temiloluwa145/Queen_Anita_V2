//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347075663326";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBVOEVxaFIrR2IwTmxOQzd5eWc5b0dWOWtSd0c0VnhlcGRPYWFQVm1rVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlhqdHRuZ2d2cXM4RUZMMHlLaUlvL1NENitlU3hsUk5peTBRTGpMZkx3bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTmZ5NlBNUC9HMzg3NVJxcThXcThlWFlhL2Q3SUtScFZwVXE1TXBFQkVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2b2NCNHVMS0N2V0t6T011UlpsQnpuWG5GSmk1akpUY2xRWFJLSHZ1cGtvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCbTlrOVVGbk9jaUgzcHF4YUJjVURJeU9ZSkVHZmZBT085VVBxaG03SDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXblpOZ1dlU3JtS2ZaNzFrWHJDV1ZWREh4ZnlPS2w2MENIU3F5em80QkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tkMTJNSG1CeGdXeHY4cXhVS09yVDVBSWpqaG9hUnFlUWMxSDFZUnJuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2RCN0xCNTlZUzdCdkd1WUMvb0hEQ09ka2MrNDBMT2hTK3BvSytPZEh4Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino1aVlVQjcrTHFiWWZSNndkWlg1bVlZbU5sRDZybkVRaUp0YVU1RzJpVnc5OHF3ZC9KZGRVZnJqNXRjQVpBbzlRbXY5TGI2UEFwVWhSV3VEZExLR2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiIwd3FKaU9aL3BTN3VGZmlkZEJ1NVhoSnpmQXFEemJRbnkzbTBrTFdHWFE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPSDVhUzNTUlRUeTVXeE5YbklEZkpBIiwicGhvbmVJZCI6IjU0NTI4MWEyLWE1YzktNDMwYy05MTFhLWEzZGQ1ZDgzMmNjMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSVU4dzFuQnowUGJBejhRcW1JZTlCUVBTVGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVVTUVVqZmtCUlp1TGJiZjhJR3F5V21YeTRzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilo1ODdGN0xNIiwibWUiOnsiaWQiOiIyMzQ3MDc1NjYzMzI2OjQyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZXdzNDBGRUxqeHRiNEdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDcmZmUDRpK05Gd0c3OWdBa09DbE5zWkVYOURScm5XN2E2dXNIL1VSS1h3PSIsImFjY291bnRTaWduYXR1cmUiOiJEdDdrdUdpVlhCWklCQjA4YWtlTkZRWlVobWVEY3plMWo1bkdHWE9HNlI4Qk5sTmtxK1FjODZ5RnczNkwyZjNmakRxREtnb0FObjBwRWdEMFlsbDBCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMlZKSHpBK2NKYVpPTWQwRTB4dHEwS0ptRTJXOElCUFVEVTBLVGQ2U3pjc3lsU3R5eWdrZ0xSbFIwVmZjd1cvUk83SEVnZEsyb1NnOWpLRnMrbXhpaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDc1NjYzMzI2OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFxMzN6K0l2alJjQnUvWUFKRGdwVGJHUkYvUTBhNTF1MnVyckIvMUVTbDgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDE1MTkwOTN9eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBVOEVxaFIrR2IwTmxOQzd5eWc5b0dWOWtSd0c0VnhlcGRPYWFQVm1rVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlhqdHRuZ2d2cXM4RUZMMHlLaUlvL1NENitlU3hsUk5peTBRTGpMZkx3bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTmZ5NlBNUC9HMzg3NVJxcThXcThlWFlhL2Q3SUtScFZwVXE1TXBFQkVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2b2NCNHVMS0N2V0t6T011UlpsQnpuWG5GSmk1akpUY2xRWFJLSHZ1cGtvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCbTlrOVVGbk9jaUgzcHF4YUJjVURJeU9ZSkVHZmZBT085VVBxaG03SDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXblpOZ1dlU3JtS2ZaNzFrWHJDV1ZWREh4ZnlPS2w2MENIU3F5em80QkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tkMTJNSG1CeGdXeHY4cXhVS09yVDVBSWpqaG9hUnFlUWMxSDFZUnJuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2RCN0xCNTlZUzdCdkd1WUMvb0hEQ09ka2MrNDBMT2hTK3BvSytPZEh4Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino1aVlVQjcrTHFiWWZSNndkWlg1bVlZbU5sRDZybkVRaUp0YVU1RzJpVnc5OHF3ZC9KZGRVZnJqNXRjQVpBbzlRbXY5TGI2UEFwVWhSV3VEZExLR2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiIwd3FKaU9aL3BTN3VGZmlkZEJ1NVhoSnpmQXFEemJRbnkzbTBrTFdHWFE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPSDVhUzNTUlRUeTVXeE5YbklEZkpBIiwicGhvbmVJZCI6IjU0NTI4MWEyLWE1YzktNDMwYy05MTFhLWEzZGQ1ZDgzMmNjMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSVU4dzFuQnowUGJBejhRcW1JZTlCUVBTVGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVVTUVVqZmtCUlp1TGJiZjhJR3F5V21YeTRzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilo1ODdGN0xNIiwibWUiOnsiaWQiOiIyMzQ3MDc1NjYzMzI2OjQyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZXdzNDBGRUxqeHRiNEdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDcmZmUDRpK05Gd0c3OWdBa09DbE5zWkVYOURScm5XN2E2dXNIL1VSS1h3PSIsImFjY291bnRTaWduYXR1cmUiOiJEdDdrdUdpVlhCWklCQjA4YWtlTkZRWlVobWVEY3plMWo1bkdHWE9HNlI4Qk5sTmtxK1FjODZ5RnczNkwyZjNmakRxREtnb0FObjBwRWdEMFlsbDBCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMlZKSHpBK2NKYVpPTWQwRTB4dHEwS0ptRTJXOElCUFVEVTBLVGQ2U3pjc3lsU3R5eWdrZ0xSbFIwVmZjd1cvUk83SEVnZEsyb1NnOWpLRnMrbXhpaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDc1NjYzMzI2OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFxMzN6K0l2alJjQnUvWUFKRGdwVGJHUkYvUTBhNTF1MnVyckIvMUVTbDgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDE1MTkwOTN9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
