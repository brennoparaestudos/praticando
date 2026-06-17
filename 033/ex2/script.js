let saida = document.getElementById("saida")
let botaoInner = document.getElementById("btn-inner")
let botaoText = document.getElementById("btn-text")

botaoInner.addEventListener("click", function(){

    saida.innerHTML = `<strong>Negrito</strong> e <em>itálico</em>`

})

botaoText.addEventListener('click', function(){
    
    saida.textContent = `<strong>Negrito</strong> e <em>itálico</em>`

})