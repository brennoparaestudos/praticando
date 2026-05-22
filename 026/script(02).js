function saudar(nome, formato){
    formato(nome)
}

function formal(nome){
    const Vformal = `Bom dia, Sr(a). ${nome}`
    console.log(Vformal)
}

function informal(nome){
    const Vinformal = `E ai, ${nome}`
    console.log(Vinformal)
}

saudar("Brenno", formal)
saudar("Brenno", informal)
