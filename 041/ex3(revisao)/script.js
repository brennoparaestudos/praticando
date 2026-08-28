let botao = document.getElementById('botao')
let respostaCEP = document.getElementById('respostaCEP')

botao.addEventListener('click', function(){
    let cep = document.getElementById('icep').value
    let requisicao = `https://viacep.com.br/ws/${cep}/json/`

    fetch(requisicao)
    .then(resposta => resposta.json())
    .then(dados => {
        if(dados.erro){
            respostaCEP.innerHTML = 'CEP não encontrado!'
        } else {
            respostaCEP.innerHTML = `
                <p>Logradouro: ${dados.logradouro}</p>
                <p>Bairro: ${dados.bairro}</p>
                <p>Cidade: ${dados.localidade}</p>
                <p>Estado: ${dados.uf}</p>
            `
        }
    })
})