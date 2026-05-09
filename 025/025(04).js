var numeros = [3, 7, 3, 1, 7, 8, 1, 5, 8, 2]
var numeros_unicos = []

numeros.sort()

for(let indice in numeros){
    if(numeros_unicos.indexOf(numeros[indice]) == -1){

        numeros_unicos.push(numeros[indice])

    }
}

console.log(`Esse é o novo array somente com números unicos: ${numeros_unicos.sort()}`)