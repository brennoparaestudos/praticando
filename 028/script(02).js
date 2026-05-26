const eventos = {}

function registrar(evento, callback){
    eventos[evento] = callback
}


function disparar(evento){
    eventos[evento]()
}

function inicio(){
    console.log("Evento: incio")
    
}

function pausa (){
    console.log("Evento: pausa")
}

function fim(){
    console.log("Evento: fim")
}


registrar("inicio", inicio)
registrar('pausa', pausa)
registrar('fim', fim)

disparar("inicio")
disparar('pausa')
disparar('fim')

