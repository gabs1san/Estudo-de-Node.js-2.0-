// nome é um parametro da função saudacao
// function sudacao(nome) {  
//     console.log('Olá,', nome)
// }

// // Argumento
// sudacao('Gabriel') 

// Parametro é a definição da função e quando executa essa função se passa o Argumento

function calcularDobro(numero) {
    return  numero * 2 
}

const numDobrado = calcularDobro(4)
console.log('O dobro de 4 é:', numDobrado)

// Sintaxe de Arrow Functions 
const saudacao = (nome) => {
    console.log('Via longa e prósprera,', nome)
}      

saudacao ('Gabriel')

// funções simples
const oi = nome => console.log('Olá,', nome)

oi('Gabriel')

const dobroNum = number => number * 2

const numDobro = dobroNum(8)
console.log('O dobro de 8 é:', numDobro)

// this 