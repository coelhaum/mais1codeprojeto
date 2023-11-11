
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número Netflixo: ", function(numero) {
    numero = parseFloat(numero);

    if (numero > 0) {
        console.log("O número é positivo.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero.");
    }

    rl.close();
});
