let botaoIniciar = document.getElementById("iniciar")
let botaoParar = document.getElementById("parar")
let botaoResetar = document.getElementById("resetar")
let p = document.getElementById("n-atual")

let contador = 0
let iniciou 

botaoIniciar.addEventListener("click", function(){
    
    iniciou =  setInterval(function(){
        contador ++

        p.textContent = contador
    }, 1000)
   
    this.setAttribute("disabled", 'disabled')

    botaoParar.removeAttribute("disabled")

})


botaoParar.addEventListener("click", function(){

    clearInterval(iniciou)
        
    p.textContent = 'Parou'

    this.setAttribute("disabled", 'disabled')
    
    botaoIniciar.removeAttribute("disabled")

})

botaoResetar.addEventListener("click", function(){

    clearInterval(iniciou)

    contador = 0

    p.textContent = contador

})

