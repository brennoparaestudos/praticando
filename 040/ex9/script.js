const numero = '(71) 99999-8888'
const regex = /\(([\d]{2})\)\s+([0-9]{4,5}-[0-9]{4})/g

console.log(numero.match(regex))