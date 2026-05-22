function agir(acao){
    acao()
}

function correr(){
    console.log("Correr")
}

function pular(){
    console.log("Pular")
}

function atacar(){
    console.log("Atacar")
    
}

agir(correr)
agir(pular)
agir(atacar)