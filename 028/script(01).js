function validar(senha, regras){
    for(let i = 0; i < regras.length; i++){
        if(regras[i](senha) == true){

            console.log(`Regra ${i + 1}: Aprovada`)

        }
        else{
            console.log(`Regra ${i + 1}: Reprovada`)
        }
    }
}

const regra1 = function(senha){
    return senha.length >= 8
}

const regra2 = function(senha){
    for(let i = 0; i < senha.length; i++){
        if(!isNaN(senha[i])){
            return true
        } 
    }

    return false
}

const regra3 = function(senha){
    return senha !== senha.toLowerCase()
}

const regras = [regra1, regra2, regra3]

validar("Brenno10", regras)