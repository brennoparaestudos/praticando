localStorage.setItem('nome', 'Brenno')
localStorage.setItem('idade', 18)
localStorage.setItem('cidade', "Salvador")

const nome = localStorage.getItem('nome')
const idade = localStorage.getItem('idade')
const cidade = localStorage.getItem('cidade')

console.log(nome)
console.log(idade)
console.log(cidade)

localStorage.removeItem('cidade')