const pessoa = {
    nome: 'Brenno',
    idade: 18,
    profissao: 'programador',
    apresentar: function(){
        console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}`)
    }
}

const pessoa2 = {
    nome: 'Maria',
    idade: 17,
    profissao: 'psicologa',
    apresentar: function(){
        console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}`);  
    }
}

pessoa.apresentar()
pessoa2.apresentar()


