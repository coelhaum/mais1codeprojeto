
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual a sua idade tchutchuco: ", function(idade) {
    idade = parseInt(idade);

    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }

    rl.close();
});