let btnAdd = document.getElementById("btn-add")
let ul = document.getElementById("lista")  
let btnRmv = document.getElementById("btn-rmv")

  btnAdd.addEventListener('click', function() {
    let texto = document.getElementById('itexto').value
    let li = document.createElement("li")

    li.appendChild(document.createTextNode(texto))
    ul.appendChild(li)

  })


  btnRmv.addEventListener("click", function(){
    if(ul.childNodes.length > 0){
      ul.removeChild(ul.lastChild)
    }
  })
  