const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const Writer = require("./Writer")
const PDFWriter = require("./PDFWriter")


const reader = new Reader()
const writer = new Writer()

async function main(){
  const data = await reader.Read("./users.csv")
  const dataProcessed = Processor.Process(data)

  const usuarios = new Table(dataProcessed)

  console.log(usuarios)

  const html = await HtmlParser.Parse(usuarios)
  console.log(html)


  writer.Write(Date.now()+".html",html)
  PDFWriter.WriterPDF(Date.now() + ".PDF",html)
}

main()