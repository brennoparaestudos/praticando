let compras = []

compras.push('arroz', 'feijão', 'carne', 'frango', 'bisteca')

console.log(`Essa é a quantidade de itens que tem na lista ${compras.length}`)

for(let indice = 0; indice < compras.length; indice++){
    compras.sort()

    console.log(`${compras[indice]}`)
}