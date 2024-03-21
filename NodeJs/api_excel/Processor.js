class Processor{
  static Process(data){
    const dataProcessed = data.split("\r\n")
    const rows = []
    dataProcessed.forEach(row =>{
      const arr = row.split(",")

      rows.push(arr)
    })
    return rows
  }
}

module.exports = Processor