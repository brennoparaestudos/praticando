let listaTarefa = []
let botaoAdicionar = document.getElementById('btnAdicionar')
let botaoRemover = document.getElementById('btnRemover')
let tarefa = document.getElementById('itarefa')
let conteudoTarefa = document.getElementById('conteudoTarefa')


botaoAdicionar.addEventListener('click', function(){
    let respostaTarefa = tarefa.value
    listaTarefa.push(respostaTarefa)

    conteudoTarefa.innerHTML = ''
    for(let i = 0; i < listaTarefa.length; i++){
    conteudoTarefa.innerHTML += `<p>${listaTarefa[i]}</p>`
    }
})

botaoRemover.addEventListener('click', function(){
    let respostaTarefa = tarefa.value
    listaTarefa = listaTarefa.filter(item => item !== respostaTarefa)
    conteudoTarefa.innerHTML = ''
    for(let i = 0; i < listaTarefa.length; i++){
        conteudoTarefa.innerHTML += `<p>${listaTarefa[i]}</p>`
    }
})

