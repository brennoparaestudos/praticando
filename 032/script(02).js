const estoque = ['Caneta', 'Caderno', 'Régua', 'Borracha']

let saiu = estoque.pop();

console.log('Saiu do estoque:', saiu); // 'Borracha'

estoque.push('Lápis', 'Apontador')

console.log(estoque)

estoque.splice(2, 1, 'Compasso')

console.log(estoque)

console.log(estoque.join(`, `))

console.log(`O total de itens é: ${estoque.length}`)