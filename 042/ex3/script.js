const usuario = {
    nome: 'Brenno',
    email: 'xxxxxxxxxx@gmail.com',
    hobbies: ['futebol', 'videogame', 'ficar com namorada']
}

localStorage.setItem('usuario', JSON.stringify(usuario))

const usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'))

console.log(usuarioRecuperado.hobbies[1])