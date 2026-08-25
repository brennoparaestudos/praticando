const texto1 = '1234'
const texto2 = '123'
const texto3 = '12345'
const regex = /^[0-9]{4}$/

console.log(regex.test(texto1))
console.log(regex.test(texto2))
console.log(regex.test(texto3))