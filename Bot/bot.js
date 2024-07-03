const { Telegraf } = require('telegraf')
const { webApp } = require('telegraf/typings/button')

const TOKEN = '7389090595:AAEWs8ZNsT_cjboa8RJMEHBUE6sFYXSs7iE'
const bot = new Telegraf(TOKEN)

const web_link = ''

bot.start((ctx) => ctx.reply('Welcome', {reply_markup:{keyboard:[[{text:"web app", web_app:web_link}]]}
})
)

bot.launch()
