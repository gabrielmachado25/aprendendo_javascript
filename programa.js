//IMPORTAÇÕES DO PROJETO:
let teclado = require('prompt-sync')(); /*aqui estou carregando para utilizar aquela
dependência que instalamos antes */
    //posso chamar também de 'prompt' ali no lugar do teclado (é mais padrão)

/*Variáveis são objetos que guardam estados, valores... para que eu posso reutilizar em
outros lugares...
    em javascript temos var, let e const*/

// "console.log" é a escrita que vai aparecer no console
// SAÍDA DE DADOS:
    //Exemplos:
        //console.log('Olá, mundo JS');
        //console.log('Aula 01 de JS');

        /* Como executar: rodar em node - colocar no terminal: node programa.js
        (node - espaço - e o nome do programa) */


    //Sempre vou ter a entrada de dados, o processamento e a saída de dados...


//2. Exercício: Ler dois números e apresentar a soma
    //ENTRADA DE DADOS:
        console.log('Digite o primeiro valor: ');
        let valor1 = teclado(); //to dizendo que "valor1" recebe o que for digitado no teclado
        console.log('Digite o segundo valor: ');
        let valor2 = teclado(); //aqui eu leio outro valor
    //(esse 'teclado' é a leitura lá em cima que coloquei 'let teclado')

    //outra opção mais simplificada:
        //let valor1 = teclado('Digite o primeiro valor: ');
        //let valor2 = teclado('Digite o segundo valor: ');

    //PROCESSAMENTO:
        //parseFloat(valor1); //aqui converte 'valor1' que é uma String para Float (poderia ser inteiro também...)
        //parseFloat(valor2); //aqui converte 'valor1' que é uma String para Float (poderia ser inteiro também...)
    //como ele fez no vídeo:
    let v1 = parseFloat(valor1); //criou uma variável 'v1' que recebe o valor1 'String' convertido em número
    let v2 = parseFloat(valor2); //criou uma variável 'v2' que recebe o valor1 'String' convertido em número
    let soma = v1 + v2;


    // SAÍDA DE DADOS:
    // 'Você digitou o valor X'
    //console.log('Você digitou o valor: ' + valor1);
        //posso usar também:
        //console.log(`Você digitou o valor: ${valor1}`);
    //console.log('Você digitou o valor: ' + valor2);
        //posso usar também:
        // console.log(`Você digitou o valor: ${valor2}`);
        console.log(`O resultado da soma é: ${soma}`);




