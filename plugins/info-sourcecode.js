let handler = async m => {
  teks = `
Name : ${require('../package.json').name}
Version : v${require('../package.json').version}

Repo : ${require('../package.json').homepage}
RestApi : https://okep.com`
  conn.sendMessageModify(m.chat, teks, m, {
    title: 'Sakia - Bot',
    body: 'hi everybody',
    largeThumb: true,
    url: 'YahKONTOL'
  })
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = ['sc', 'sourcecode']
module.exports = handler
