const idade = 17


if(idade >= 18) {
    console.log("É maior de idade")
}
else{
    console.log("É menor de idade: ")
}


const notaDoAluno = 3

if(notaDoAluno >= 9) {
    console.log("A nota do aluno foi excelente!!!")
} else if (notaDoAluno >= 7) {
    console.log("A nota do aluno foi boa")
} else if (notaDoAluno >= 4) {
    console.log("A nota do alno foi mediana")
} else {
    console.log("A nota do aluno foi péssima!")
}

// operador ternário 
idade >= 18 ? console.log('maior de idade') : console.log('menor de idade')

