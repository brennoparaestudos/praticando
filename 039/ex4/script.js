const requisicaoPosts = 'https://jsonplaceholder.typicode.com/posts'
let divExibir = document.getElementById('exibir')

fetch(requisicaoPosts)

.then(resposta => resposta.json())
.then(dados => {
    for(let i = 0; i < 5; i++){
        let titulo = document.createElement('h1')
        
        titulo.textContent = dados[i].title

        divExibir.appendChild(titulo)
    }
})