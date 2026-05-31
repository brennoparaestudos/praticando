const carrinho = {
    itens:[],
    total: 0,
    adicionar: function(nome, preco){
        this.itens.push({nome: nome, preco: preco})
        this.total = this.total + preco
    },
    remover: function(nome){
        for(let i =0; i < this.itens.length; i++){
            if(this.itens[i].nome == nome){
                this.total -= this.itens[i].preco 
                this.itens.splice(i, 1)
            }
        }
    },
    resumo: function(){
        for(let i = 0; i < this.itens.length; i++){
            console.log(`itens: ${this.itens[i].nome} preco: ${this.itens[i].preco} `)
        }
        console.log(`total: ${this.total}`)
    }
}   

carrinho.adicionar('carro', 50000)
carrinho.adicionar('moto', 20000)
carrinho.adicionar('bike', 1000)
carrinho.remover('carro')
carrinho.resumo()