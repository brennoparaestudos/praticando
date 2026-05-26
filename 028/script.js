function pipeline(valor, etapas){
    let resultado = valor

    for(let i = 0; i < etapas.length; i++){
        resultado = etapas[i](resultado)
    }

    console.log(resultado)
}

function dobrar(numero){
    return numero * 2
}

function somar10(numero){
    return numero + 10
}

function dividir2(numero){
    return numero / 2
}

const etapas = [dobrar, somar10, dividir2]

pipeline(10, etapas)


