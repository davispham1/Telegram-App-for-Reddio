const { Telegraf } = require('telegraf')
const { webApp } = require('telegraf/typings/button')

const TOKEN = 
const bot = new Telegraf(TOKEN)

const web_link = ''

bot.start((ctx) => ctx.reply('Welcome', {reply_markup:{keyboard:[[{text:"web app", web_app:web_link}]]}
})
)

bot.launch()
