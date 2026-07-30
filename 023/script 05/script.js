var botao = document.getElementById('ibotao')

botao.addEventListener('click', verificando)

function verificando(){
    
    var dia = document.getElementById('idia')
    var res = document.getElementById('res')

    switch(dia.value){
        case '1':
            res.innerHTML = 'Domingo'
            break
        case '2':
            res.innerHTML = 'Segunda'
            break
        case '3':
            res.innerHTML = 'Terça'
            break
        case '4':
            res.innerHTML = 'Quarta'
            break
        case '5':
            res.innerHTML = 'Quinta'
            break
        case '6':
            res.innerHTML = 'Sexta'
            break
        case '7':
            res.innerHTML = 'Sábado'
            break
        default:
            res.innerHTML = 'Número inválido'
            break
        
    }

    res.style.margin = '10px'
    res.style.fontWeight = 'bold'
}