// Desafio: Contar quantos números pares e ímpares temos entre 0 e 100

let pares = 0;
let impares = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Total de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);


// Outro método 

let pareS = 0;
let impareS = 0;

for (let i = 0; i <= 100; i++) {
    
    switch (i % 2) {
        case 0:
            pareS++;
            break;
        case 1:
            impareS++;
            break;
    }
}

console.log(`Pares: ${pareS}, Ímpares: ${impareS}`);