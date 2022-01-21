var Reader = require('./Reader');
var Processor = require('./Processor');
var Table = require('./Table');
var HtmlParser = require('./HtmlsParser');
var Writer = require('./Writer');
var PdfWriter = require('./PdfWriter')

var read = new Reader();
var writer = new Writer();

async function main(){
    var data = await read.Read('./users.csv.csv');
    var dataProcess =  Processor.Process(data);

    var users = new Table(dataProcess);

    var html = await HtmlParser.Parse(users); // pasando minha tabela para o html ( ira retornar string, o html porcessado)

    writer.Write(Date.now() +'.html',html)
    PdfWriter.WritePDF(Date.now() +'.PDF',html)


}

main();