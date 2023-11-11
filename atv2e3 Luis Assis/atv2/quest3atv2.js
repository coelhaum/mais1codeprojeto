
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número Samsungo: ", function(numero) {
    numero = parseInt(numero);

    
    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }

    rl.close();
});
