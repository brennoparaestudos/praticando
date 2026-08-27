const requisicao = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(requisicao)

.then(resposta => resposta.json())
.then(dados => {
    console.log(dados.title)
    console.log(dados.body)
})
