const gerenciador = {
    lista: [],

    adicionar(tarefa){
          this.lista.push(tarefa)
    },

    listar(){
        console.log(this.lista)
    }
}

export default gerenciador