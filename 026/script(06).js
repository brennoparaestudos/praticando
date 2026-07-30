function formatar(mensagem, estilo){
    estilo(mensagem)
}

function maiusculo(mensagem){
    console.log(mensagem.toUpperCase())
}

function exclamacao(mensagem){
    console.log(mensagem + '!!!')
}

formatar("Bom dia", maiusculo)
formatar("Bom dia", exclamacao)