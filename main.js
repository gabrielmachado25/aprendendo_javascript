
//STRINGS
//const message = 'Olá mundo'

//message.length //isso aqui dá quantos caracteres essa string ali tem

//console.log(message.length) //utilizamos com essa escrita para aparecer lá no console do navegador

const firstName = 'Gabriel'
const lastName = 'Machado'

console.log('Meu nome é ' + firstName + ' ' + lastName) //uma forma de fazer
console.log(`Meu nome é ${firstName} ${lastName}`) //outra forma, o cara disse ser mais fácil

//toUpperCase() deixa tudo Maiúsculo
//toLowerCase()ndeixa tudo Minúsculo

console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`) //deixou o firstName maiúsculo e o lastName minúsculo


//o Split é utilizado para 'cortar'
const names = 'Felipe,João,Julia' //aqui eu coloquei alguns nomes

console.log(names.split(",")); //aqui ele faz o "split", corta o string ali em cada vírgula e joga tudo em uma lista

//NÚMEROS
const number = 5;

console.log(number);
console.log(number + 10); //aqui posso fazer operações matemáticas
console.log(number.toString()); //aqui eu converti esse número ali para uma String

console.log(typeof number) //isso eu uso para "checar" o tipo de uma variável...) nesse exemplo aqui ele vai dizer que é um 'number'
// se eu colocar o 'toString' ele vai me dizer que é uma String:
console.log(typeof number.toString())

//BOOLEANOS
false //falso
true //verdadeiro

console.log(2 == 3) //se salvar isso e for ver lá, vou ter 'false' pq 2 não é igual a 3
console.log(2 == 2) //se salvar isso e for ver lá, vou ter 'true' pq 2 é igual a 2

//NULL & UNDEFINED

const x = null; //aqui estou dizendo que o 'x' é nulo, vazio
const y = undefined;  //aqui estou dizendo que a varíavel ainda não foi definida, ainda não sei o que vou colocar ali dentro, 
//só quero deixar isso ali

//LISTAS:
