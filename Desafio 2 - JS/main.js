// alert("Helo World!")

// let numberOne = 5
// let numberTwo = 20

// alert(numberOne + numberTwo)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

// let nnumber = 654
// let sstring = 1

// let knwonunber = typeof nnumber
// let knowstring = typeof sstring

// if (knwonunber === knowstring) {
//   alert("É um Number")
// } else {
//   alert("Não é um Number")
// }


//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

// let nnumber = 658
// let sstring = "stringg"

// let knwonunber = typeof nnumber
// let knowstring = typeof sstring

// if (knwonunber === knowstring) {
//   alert("É uma string")
// } else {
//   alert("Não é uma string")
// }

/* 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/

// let nnumber = false
// let sstring = true

// let knwonunber = typeof nnumber
// let knowstring = typeof sstring

// if (knwonunber === knowstring) {
//   alert("É um booleano")
// } else {
//   alert("Não é um booleano")
// }

/*6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.*/

let numberOne = prompt("Digite um número")
let numberTwo = prompt("Digite o segundo número")
alert(`A Subtração dos dois é: ${Number(numberOne) - Number(numberTwo)}`)
alert(`A Multiplicação dos dois é: ${Number(numberOne) * Number(numberTwo)}`)
alert(`A Divisão dos dois é: ${Number(numberOne) / Number(numberTwo)}`)


/*9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */

let parOne = Number(numberOne)%2

if(parOne === 0) {
  alert("Seu primeiro número era par")
} else {
  alert("Seu primeiro número era impar")
}