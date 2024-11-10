let numero = parseInt(prompt('Digite um número: '))

function verificarParOuImpar(){
    if (numero % 2 == 0)
        console.log(`O número ${numero} é par!`)
    else{
        console.log(`O número ${numero} é ímpar!`) 
    }
}
console.log(verificarParOuImpar())