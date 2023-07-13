const TelegramBot = require("node-telegram-bot-api");

const token = "6377663414:AAE1iZ-pJtTlEEwDcz-0P1GbzHPbY91BREw";
const webAppUrl = "https://cheery-baklava-f899c8.netlify.app/";

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
