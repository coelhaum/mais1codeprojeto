


let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o preço do produto: ", function(precoProduto) {
    rl.question("Digite a quantidade comprada: ", function(quantidadeComprada) {
        precoProduto = parseFloat(precoProduto);
        quantidadeComprada = parseInt(quantidadeComprada);

        
        let total = precoProduto * quantidadeComprada;

        
        if (total >= 100) {
            let desconto = total * 0.10; // 10% de desconto
            total -= desconto;
        }

        
        console.log("Valor total a ser pago: R$" + total.toFixed(2));

        rl.close();
    });
});