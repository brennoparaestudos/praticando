function executar(acao){
    acao()
}

function dizerOla(){
    let op = "Olá"
    console.log(op)
}

function dizerTchau(){
    let op = "Tchau"
    console.log(op)
}

executar(dizerOla)
executar(dizerTchau)