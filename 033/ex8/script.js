let botao = document.getElementById("botao")
let p = document.getElementById("log")

botao.addEventListener("click", function(){

    p.textContent = 'Clicou!'

})

botao.addEventListener("dblclick", function(){

    p.textContent = 'Duplo clique!'

})

botao.addEventListener('mouseenter', function(){

    p.textContent = 'Mouse entrou'

})

botao.addEventListener('mouseleave', function(){

    p.textContent = 'Mouse saiu'

})