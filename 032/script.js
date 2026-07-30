const fila = ['Ana', 'Bruno', 'Carla']

console.log(fila.length)

console.log(Array.isArray(fila))

let chegada = fila.push("Diego")

console.log(fila)

let prioridade = fila.unshift('Eva')

console.log(fila)

let atendido = fila.shift()

console.log(atendido)

console.log(fila.length)