function transformar(lista, acao){
    let resultado = []

    for(let item = 0;  item < lista.length; item ++ ){
        resultado.push(acao(lista[item]))
    }

    console.log(resultado)

    return resultado
}

const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function dobra(numero){
    
    return numero * 2
}

function converter(numero){
    numero = `Posição:  ` + numero 
    return numero
}


transformar(teste, dobra)
transformar(teste, converter)


