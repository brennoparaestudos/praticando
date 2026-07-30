const conta = {
    titular: "Brenno",
    saldo: 20000,
    depositar: function(valor){
        this.saldo = this.saldo + valor
    },
    sacar: function(valor){
        if(valor <= this.saldo){
            this.saldo = this.saldo - valor
        } else{
            return console.log("Saldo insuficiente")
        }
    },
    verSaldo: function(){
        console.log(this.saldo)
    }
}

conta.depositar(500)
conta.sacar(30000)
conta.verSaldo()



