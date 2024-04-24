import telebot

class TelegramBot:
    def __init__(self, token):
        self.bot = telebot.TeleBot(token)

    def send_message(self, message):
        self.bot.send_message(message)

    def start_polling(self):
        self.bot.polling(none_stop=True, interval=0)
