var ejs = require('ejs')

class HtmlParser{
    static async Parse(table,rows){
    return  await ejs.renderFile('./table.ejs',{header:table.header,rows:table.rows}) // criando variavel para ser lida em meu arquivo html ejs
    }
}

module.exports = HtmlParser;