const dayjs = require("dayjs")


function birthDay(date){
  const birthday = dayjs(date)
  const today = dayjs()

  const ageInYears = today.diff(birthday, 'year')
  const nextBirthDay = birthday.add(ageInYears+1,'year')
  const daysToNextBirthday = nextBirthDay.diff(today, 'day') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`A sua proxima data de aniversario é : ${nextBirthDay.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears +1} anos: ${daysToNextBirthday}` )
}



birthDay(`2003-02-23`)
