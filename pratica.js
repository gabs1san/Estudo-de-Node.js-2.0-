// Exercício 1
let nome = 'Gabriel Almeida San Gregorio'
console.log('Olá!! Meu nome é: ', nome)
console.log('============================')


// Exercício 2
let anoAtual = 2026
let anoDeNascimento = 2003

const idade = anoAtual - anoDeNascimento
console.log('Olá! você tem: ',idade,'anos')
console.log('============================')

// Exercício 3
let cidade = 'Caieiras'
let estado = 'São Paulo'
let nacao = 'Brazil'

console.log('Você está em:', cidade, estado, nacao)
console.log('============================')


// Exercício 4
let saldo = 0
console.log('Seu saldo inicial é:', saldo)

let deposito = 200
let soma = saldo + deposito 
console.log('Após seu deposíto o valor é de:', soma)

let saque = 50
let subtracao = soma - saque
console.log('Após o saque, o valor em sua conta é de:', subtracao)
console.log('============================')


// exercício 5
let matematica = 7.5
let portugues = 8.5
let ciencias = 9

let somaDasNotas = matematica + portugues + ciencias 
let media = somaDasNotas/3

console.log('A sua média nesse bimestre é de:', media)
console.log('============================')


// Exercício 6
const identidade = 18

if(identidade >= 18){
    console.log('Pode comprar bebida alcoólica')
} else {
    console.log('Venda proibida para menores de 18 anos')
}
console.log('============================')

// Exercício 7
let horaAtual = 21

if(horaAtual >= 6 && horaAtual <= 12){
    console.log('Bom dia')
} else if(horaAtual >= 13 && horaAtual <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
console.log('============================')

// Exercício 8
const num = 0;
const sinal = Math.sign(num);

if (sinal === 1) {
  console.log("Positivo");
} else if (sinal === -1) {
  console.log("Negativo");
} else {
  console.log("Zero"); // Trata 0 e -0
}
console.log('============================')

// Exercício 9
