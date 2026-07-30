function calcular(a, b, operacao){
    operacao(a, b)
}

const somar = function (a, b){
    let soma

    soma = a + b

    console.log(`A soma de ${a} e ${b} é: ${soma}`)
}

const subtrair = function (a, b){
    let subtracao

    subtracao = a - b

    console.log(`A subtração entre ${a} e ${b} é: ${subtracao}`)
    
}

const multiplicar = function (a, b){
    let multiplicacao

    multiplicacao = a * b

    console.log(`A multiplicação entre ${a} e ${b} é: ${multiplicacao}`)
}

const dividir = function (a, b){
    let divisao

    divisao = a / b

    console.log(`A divisão entre ${a} e ${b} é: ${divisao}`)
}

calcular(10, 5, somar)
calcular(10, 5, subtrair)
calcular(10, 5, multiplicar)
calcular(10, 5, dividir)
