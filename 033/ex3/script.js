let botaoInserirAntes = document.getElementById("inserir-b")
let botaoSubstituir = document.getElementById("substituir-b")
let botaoVerPai = document.getElementById("pai-b")
let spanB = document.getElementById('b')
let span = document.createElement("span")

botaoInserirAntes.addEventListener('click', function(){

   
    let texto = document.createTextNode('[X]')
    
    span.appendChild(texto)

    spanB.parentNode.insertBefore(span, spanB)
    

})

botaoSubstituir.addEventListener('click', function(){

    let texto = document.createTextNode('[★]')

    span.appendChild(texto)

    spanB.parentNode.replaceChild(span, spanB)
})

botaoVerPai.addEventListener('click', function(){

    let p = document.getElementById("resultado")

    p.innerHTML = spanB.parentNode.tagName
    
    
})