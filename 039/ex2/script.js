const requisicao = 'https://jsonplaceholder.typicode.com/naoexiste'

fetch(requisicao)

.then(resposta => resposta.json())
.then(dados => {
    console.log(dados.name)
})

.catch(erro => console.error('ERRO', erro))