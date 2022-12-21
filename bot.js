// const { Telegraf } = require("telegraf");

// const bot = new Telegraf("5827307386:AAFCKor5spVcyF-te7GBSYuoUPhiKDzTgG0");

// bot.use((ctx) => {
//   console.log(ctx.chat);
//   ctx.reply("nijgedr");
// });

// bot.launch();
import fetch from "node-fetch";
let token = "5827307386:AAFCKor5spVcyF-te7GBSYuoUPhiKDzTgG0";

let data = {
  chat_id: "-1001789615134",
  text: "",
};

(async () => {
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
})();
