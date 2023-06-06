 

function birthDay(...{day,month,year}){
  const dayjs = require("dayjs")
  const datejs = require('dayjs/locale/pt-br.js')

  dayjs().locale(datejs).format('DD/MM/YYYY')

  return dayjs({
    year,
    month,
    day,
  })
  //return dayjs(date).locale(datejs).format('DD/MM/YYYY')
}

const day = '23'
const month = '02'
const year = '2003'

console.log(birthDay(day,month,year))
