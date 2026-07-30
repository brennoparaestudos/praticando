var numeros = [8, 3, 15, 7, 42, 4, 19, 2]
var maior = numeros[0]
var menor = numeros[0]

for(let indice in numeros){

    if(numeros[indice] > maior){
        maior = numeros[indice]
    }

    if(numeros[indice] < menor){
        menor = numeros[indice]
    }
}

console.log(`Esse é o maior número: ${maior}`)

console.log(`Esse é o menor número: ${menor}`)
