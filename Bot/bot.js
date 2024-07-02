const { Telegraf } = require('telegraf')
const { webApp } = require('telegraf/typings/button')

const TOKEN = '7389090595:AAEWs8ZNsT_cjboa8RJMEHBUE6sFYXSs7iE'
const bot = new Telegraf(TOKEN)

bot.start((ctx) => ctx.reply('Welcome'), webApp())

bot.launch()