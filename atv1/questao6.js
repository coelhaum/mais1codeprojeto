function dividireResto(a, b) {
  const quociente = parseInt(a / b);
  const resto = a % b;
  return { quociente, resto };
}
const tadalafilo1 = 62;
const tadalafilo2 = 18;
const resultado = dividireResto(tadalafilo1, tadalafilo2);
console.log(resultado);
