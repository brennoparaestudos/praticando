let botao = document.getElementById("botao")
let paragrafo = document.getElementById("paragrafo")

let contador = Number(localStorage.getItem('contador')) || 0

botao.addEventListener('click', function(){
    contador++

    localStorage.setItem('contador', contador)

    paragrafo.textContent = contador
})
