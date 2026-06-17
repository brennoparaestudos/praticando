let botaoAlvo = document.getElementById("alvo")
let botaoDesabilitar = document.getElementById("desabilitar")
let botaoReabilitar = document.getElementById("reabilitar")
let botaoAdicionarDataInfo = document.getElementById("adc-data")
let botaoRemoverDataInfo = document.getElementById("rmv-data")
let p = document.getElementById('atuais')

botaoDesabilitar.addEventListener("click", function(){

    botaoAlvo.setAttribute('disabled', 'disabled')

    p.textContent = 'Função atual : Desabilitar'

})

botaoReabilitar.addEventListener("click", function(){

    botaoAlvo.removeAttribute('disabled')
    
    p.textContent = 'Função atual : Reabilitar'

})

botaoAdicionarDataInfo.addEventListener("click", function(){

    botaoAlvo.setAttribute('data-info', 'valor-123')

    console.log(botaoAlvo)

    p.textContent = 'Função atual : Adicionar data-info'

})

botaoRemoverDataInfo.addEventListener('click', function(){
 
    botaoAlvo.removeAttribute('data-info')

    console.log(botaoAlvo)

    p.textContent = 'Função atual : Remover data-info'

})