const partida = {
    timeCasa: 'Arsenal',
    timeVisitante: 'PSG',
    golsCasa: 0,
    golsVisitante: 0,
    marcargol: function(time){
        if(time == this.timeCasa){
            this.golsCasa++
        } else{
            this.golsVisitante++
        }
    },
    placar: function(){
        console.log(`${this.timeCasa} ${this.golsCasa} x ${this.golsVisitante} ${this.timeVisitante}`)
    },
    vencedor: function(){
        if(this.golsCasa > this.golsVisitante){
            console.log(this.timeCasa)
        } else if (this.golsCasa < this.golsVisitante){
            console.log(this.timeVisitante)
        } else{
            console.log(`O jogo terminou em empate!`)
        }
    }
}

partida.marcargol('PSG')
partida.placar()
partida.vencedor()