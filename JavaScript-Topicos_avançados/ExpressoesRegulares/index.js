function PhoneNumber(phoneNumberString){
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, '')
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g,"")
}

console.log(new PhoneNumber('+55 (21) 9 98765-432'))
console.log(new PhoneNumber('+1 (55) as555-9999-2134'))