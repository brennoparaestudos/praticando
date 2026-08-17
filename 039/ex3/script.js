const requisicaoUsuarios = 'https://jsonplaceholder.typicode.com/users'

fetch(requisicaoUsuarios)

.then(resposta => resposta.json())
.then(dados => {
    dados.forEach(usuario => {
        console.log(usuario.name)
        console.log(usuario.address.city)
        
    });
    console.log('Total de usuários: ' + dados.length)
})