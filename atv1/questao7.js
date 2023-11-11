function desconto(a, b) {
  return Number(a) * (1-Number(b / 100)) ;
}
const mortadelo1 = 199.9;
const mortadelo2 = 15;
const resultado = desconto(mortadelo1, mortadelo2);
console.log(resultado);
