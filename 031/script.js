const biblioteca = {
    livros: [],
    adicionar: function(titulo, autor, paginas){
        this.livros.push({titulo, autor, paginas})
    },
    buscar: function(titulo){
        for(let i = 0; i < this.livros.length; i++){
            if(this.livros[i].titulo == titulo){
                return console.log(this.livros[i])
            }
        }
        console.log('Livro não encontrado')
    },
    listar: function(){
        console.log(this.livros)
    },
    estatisticas: function(){
        console.log(`O número de livros é: ${this.livros.length}`)

        let totalPaginas = 0

        for(let i = 0; i < this.livros.length; i++){
            totalPaginas +=this.livros[i].paginas
        }

        let media

        media = totalPaginas / this.livros.length

        console.log(`A media de páginas é: ${media}`)
        
    }
}

biblioteca.adicionar('exemplo1', 'fulano1', 210)
biblioteca.adicionar('exemplo2', 'fulano2', 200)
biblioteca.adicionar('exemplo3', 'fulano3', 202)
biblioteca.adicionar('exemplo4', 'fulano4', 195)

biblioteca.buscar('exemplo1')
biblioteca.buscar('exemplo6')

biblioteca.listar()

biblioteca.estatisticas()