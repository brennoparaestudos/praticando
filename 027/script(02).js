function aplicarDesconto(preco, tipo){
    
    return tipo(preco)

}

const semDesconto = function(numero){

    return numero 

}

const desconto10 = function(numero){
    
    return numero *= 0.90

}

const desconto50 = function(numero){

    return numero *= 0.50

}


console.log(aplicarDesconto(10, semDesconto))
console.log(aplicarDesconto(10, desconto10))
console.log(aplicarDesconto(10, desconto50))