//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @prexzyvilla
//Instagram: Prexzy.ay
//Telegram: t.me/Prexzyvilla_tech
//GitHub: @Prexzybooster
//WhatsApp: +2349159895444
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@prexzyvilla

const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
