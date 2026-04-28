// For 
for(let contador = 1; contador <=5; contador++) {
    console.log('Número atual:', contador)
}

console.log('====================================')


for(let numero = 0; numero <= 15; numero++) {
    if(numero % 2 == 0) {
         console.log('Número par encontrado:', numero)
    }
}


console.log('====================================')

for(let numeroI = 0; numeroI <= 15; numeroI++) {
    if(numeroI  % 2 > 0) {
         console.log('Número ímpar encontrado:', numeroI)
    }
}


console.log('====================================')

const palavra = 'paralelepipedo'

for(let cont = 0; cont < palavra.length; cont++ ) {
    console.log(palavra[cont])
}
// O contador sempre começa na posição 0 


console.log('====================================')
// while e do...while
let contt = 1

while (contt <= 10) {
    console.log('Número atual:', contt)
    contt++
}

console.log('====================================')
let num = 1
do {
    console.log('Número atual:', num)
    num++
} while (num <= 10);
// While verifica primeiro e se for falso nunca executa - doWhile faz primeiro e depois verifica 