let compras = []

compras.push('arroz', 'feijão', 'carne', 'frango', 'bisteca')

 compras.sort()

console.log(`Essa é a quantidade de itens que tem na lista ${compras.length}`)

for(let indice = 0; indice < compras.length; indice++){

    console.log(`${compras[indice]}`)

}