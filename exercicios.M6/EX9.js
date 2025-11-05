// Arquivo: exercicio9.js
function soma(a, b) {
  console.log("Antes da soma: a =", a, "b =", b); // Depuração: mostra valores
  const resultado = a + b;
  console.log("Depois da soma: resultado =", resultado); // Depuração: mostra resultado
  return resultado;
}

console.log(soma(2, )); // → NaN
// Comentário: O resultado é NaN porque o segundo parâmetro 'b' é undefined (vírgula solta), e 2 + undefined = NaN.