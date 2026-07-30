var numeros = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28]
var numeros_pares = []


for(let indice in numeros){

    if(numeros[indice] % 2 == 0){

        numeros_pares.push(numeros[indice])  

    }

}

console.log(`Esse é um array só com números pares: ${numeros_pares}`)