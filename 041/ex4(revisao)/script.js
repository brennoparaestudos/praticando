let botao = document.getElementById('botao')
let body = document.getElementsByTagName('body')[0]

botao.addEventListener('click', function(){

    botao.addEventListener('click', function(){
    let corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16)
    body.style.backgroundColor = corAleatoria
    
})
})