let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número de 1 a 7: ", function (numeroDia) {
  numeroDia = parseInt(numeroDia);

  let nomedodia;
  let nomeDia;

  switch (numeroDia) {
    case 1:
      nomeDia = "Domingo | soneca day";
      break;
    case 2:
      nomeDia = "Segunda-feira | leg day";
      break;
    case 3:
      nomeDia = "Terça-feira | peito day";
      break;
    case 4:
      nomeDia = "Quarta-feira | dorsal day";
      break;
    case 5:
      nomeDia = "Quinta-feira | triceps e biceps day";
      break;
    case 6:
      nomeDia = "Sexta-feira | ombro day";
      break;
    case 7:
      nomeDia = "Sábado | Netflix com a gotica";
      break;
    default:
      nomeDia = "escreva um numero valido rapa";
  }

  console.log(nomeDia);

  rl.close();
});
