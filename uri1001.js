//IMPORTAÇÕES DO PROJETO:
let teclado = require('prompt-sync')();

//Exercício URI:
    //ENTRADA DE DADOS:
        let A = teclado();
        let B = teclado();

    //PROCESSAMENTO:
        let v1 = parseInt(A); //criou uma variável 'v1' que recebe o valor1 'String' convertido em número
        let v2 = parseInt(B); //criou uma variável 'v2' que recebe o valor1 'String' convertido em número
        let soma = v1 + v2;

    // SAÍDA DE DADOS:
        console.log(`X = ${soma}`);




