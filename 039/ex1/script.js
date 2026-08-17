const requisicao = 'https://jsonplaceholder.typicode.com/users/1 '

fetch(requisicao)

.then(resposta => resposta.json())
.then(dados => {
    console.log(dados.name)
    console.log(dados.email)
})