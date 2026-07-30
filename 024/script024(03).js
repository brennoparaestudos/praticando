function verificador(){
    var nUser = document.getElementById('inumUser')

    if(nUser.value.length == 0){

        alert('[ERRO] Digite um número na caixa')

    } else{
        var numero_usuario = Number(nUser.value)
        var numero_secreto = 7
        var res = document.getElementById('res')

        res.innerHTML = ''

            if(numero_usuario > numero_secreto){

                res.innerHTML = `O número ${numero_usuario} é maior que o número secreto`

            } else if(numero_usuario < numero_secreto){

                res.innerHTML = `O número ${numero_usuario} é menor que o número secreto`       
            } else{
                res.innerHTML = `O número ${numero_usuario} é <strong>exatamente</strong> número secreto!!!`
            }
        
    }
}