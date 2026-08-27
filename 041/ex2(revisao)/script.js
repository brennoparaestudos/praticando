const requisicao = 'https://jsonplaceholder.typicode.com/posts'
let respostaAPItitulo = document.getElementById('respostaAPItitulo')
let respostaAPIcorpo = document.getElementById('respostaAPIcorpo')

fetch(requisicao)

.then(resposta => resposta.json())
.then(dados => {
    for(let i = 0; i < 5; i++){
        respostaAPItitulo.innerHTML += dados[i].title
        respostaAPIcorpo.innerHTML += dados[i].body
    }
})