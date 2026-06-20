let botaoAgendar = document.getElementById("agendar")
let botaoCancelar = document.getElementById("cancelar")
let p = document.getElementById("status-atual")

let agendado

botaoAgendar.addEventListener('click', function(){

    agendado = setTimeout(function(){

        p.textContent = 'Agendado'
        p.style.color = 'green'
    },3000)

})

botaoCancelar.addEventListener('click', function(){

    clearTimeout(agendado)

    p.style.color = 'red'
    p.textContent = 'Cancelado'

})