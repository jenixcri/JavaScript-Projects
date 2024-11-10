let cateto1 = parseFloat(prompt('Digite o primeiro cateto: '));
let cateto2 = parseFloat(prompt('Digite o segundo cateto: '));

function calcularHipotenusa(){
    let calculo_expoente = (Math.pow(cateto1, 2)) + (Math.pow(cateto2, 2))
    let calculo_raiz = Math.sqrt(calculo_expoente)

    console.log(`A hipotenusa é: ${calculo_raiz}`)
}
console.log(calcularHipotenusa())