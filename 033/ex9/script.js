let horario = new Date().toLocaleTimeString('pt-br')
let div = document.getElementById("status")


window.onload = function(){

    div.textContent = `Página carregada às ${horario}`

}