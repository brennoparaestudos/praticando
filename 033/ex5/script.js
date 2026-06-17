let botaoMudarCor = document.getElementById("mudar-cor")
let botaoMudarTamanho = document.getElementById("mudar-tamanho")
let botaoAplicarLote = document.getElementById("aplicar-lote")
let botaoResetar = document.getElementById("resetar")
let caixa = document.getElementById("caixa")

botaoMudarCor.addEventListener('click', function(){

    caixa.style.backgroundColor = 'purple'

})

botaoMudarTamanho.addEventListener("click", function(){

    caixa.style.width = '50px'
    caixa.style.height = '50px'

})

botaoAplicarLote.addEventListener("click", function(){

    caixa.style.cssText = 'background-color: blue; width: 75px; height: 75px; border: 5px solid rgba(0, 0, 0, 0.363); border-radius: 5px'

})

botaoResetar.addEventListener("click", function(){

    caixa.removeAttribute('style')

})