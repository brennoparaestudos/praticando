function buscarPostsDoUsuario(id){
    const posts = 'https://jsonplaceholder.typicode.com/posts?userId=' + id

    fetch(posts)

    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados.length)
        console.log(dados[0].title)
})
}

buscarPostsDoUsuario(1)
buscarPostsDoUsuario(2)
buscarPostsDoUsuario(3)
