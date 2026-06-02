const turma = {
    alunos: [],
    matricular: function(nome, notas){
        this.alunos.push({nome, notas})
    },
    media: function(nome){
        for(let i = 0; i < this.alunos.length; i++){
            if(this.alunos[i].nome == nome){
                console.log(calcularMedia(this.alunos[i].notas))
            }
        }
    },
    aprovados: function(){
        for(let i = 0; i < this.alunos.length; i++){
            if(calcularMedia(this.alunos[i].notas ) >= 6){ 
                console.log( `Aprovados: ${this.alunos[i].nome}`)
            }
        }
    },
    reprovados: function(){
        for(let i = 0; i < this.alunos.length; i++){
            if(calcularMedia(this.alunos[i].notas ) < 6){ 
                console.log(`Reprovados: ${this.alunos[i].nome}`)
            }
        }
    }
}

function calcularMedia(notas){
    let somarNotas = 0
    
    for(let i = 0; i < notas.length; i++){
        somarNotas += notas[i]
    }

    return somarNotas / notas.length
}

turma.matricular('Brenno', [10, 9, 8])
turma.matricular('Maria', [8, 7, 9])
turma.matricular('João', [7, 6, 5])
turma.matricular('Ana', [4, 5, 6])

turma.media('Brenno')
turma.media('Maria')
turma.media('João')
turma.media('Ana')

turma.aprovados()

turma.reprovados()