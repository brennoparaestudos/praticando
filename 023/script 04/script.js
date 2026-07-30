  var botao = document.getElementById('botao')

        botao.addEventListener('click', calculando)

        function calculando(){
            
            var inputN1 = document.getElementById('in1')
            var inputn2 = document.getElementById('in2')
            var resposta = document.getElementById('res')
            var operador = document.getElementById('ioperador')

            var n1 = Number(inputN1.value)
            var n2 = Number(inputn2.value)

            switch(operador.value){
                case '+':
                    resposta.innerHTML = `${n1} + ${n2} = <strong>${n1 + n2}</strong>`
                    break
                case '-':
                    resposta.innerHTML = `${n1} - ${n2} = <strong>${n1 - n2}</strong>`
                    break
                case '*':
                    resposta.innerHTML = `${n1} * ${n2} = <strong>${n1 * n2}</strong>`
                    break
                case '/':
                    resposta.innerHTML = `${n1} / ${n2} = <strong>${n1 / n2}</strong>`
                    break
                default:
                    resposta.innerText = '[ERRO] Operador inválido.'
                    return
                    break
            }

        }