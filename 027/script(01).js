function filtrar(lista, criterio){
    let resultado = []

    for(let i = 0; i < lista.length; i++){
        if(criterio(lista[i])){
            resultado.push(lista[i])
        }
    }

    return resultado
}


const numeros = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10]

const maiores_do_que_5 = function (numero){
    return numero > 5

    
}

const par = function (numero){
    return numero % 2 == 0

}

console.log(filtrar(numeros, maiores_do_que_5))
console.log(filtrar(numeros, par))


