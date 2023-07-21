const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TG_TOKEN;
const webAppUrl = process.env.WEP_APP_URL;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появиться кнопка", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Открыть форму", web_app: { url: webAppUrl } }],
        ],
      },
    });
  }
});
