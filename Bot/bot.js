const { Telegraf } = require('telegraf')
const { webApp } = require('telegraf/typings/button')

const TOKEN = 
const bot = new Telegraf(TOKEN)

bot.start((ctx) => ctx.reply('Welcome'), webApp())

bot.launch()
