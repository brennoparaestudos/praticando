const playlist = ['Rock', 'Jazz', 'Pop', 'Blues', 'Samba']

console.log(playlist.indexOf('Pop'))

playlist.splice(2, 1) //Remove o indice 2 o "1" significa que estou removendo 1 item do array

console.log(playlist)

playlist.splice(2, 0, 'MPB', 'Funk')

console.log(playlist)

console.log(playlist.reverse())

console.log(playlist.join(' | '))