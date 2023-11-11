function calcularMedia(a, b, c) {
  const media = (Number(a) + Number(b) + Number(c)) / 3;
  let resultado;
  if (media >= 7) {
    resultado = "aprovado";
  } else {
    resultado = "reprovado";
  }
  return { media, resultado };
}
const ludimilo1 = 6;
const ludimilo2 = 6;
const ludimilo3 = 6;
const resultado = calcularMedia(ludimilo1, ludimilo2, ludimilo3);
console.log(resultado);

const ludimilo4 = 7;
const ludimilo5 = 7;
const ludimilo6 = 7;
const resultado2 = calcularMedia(ludimilo4, ludimilo5, ludimilo6);
console.log(resultado2);