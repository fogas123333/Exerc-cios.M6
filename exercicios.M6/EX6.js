// Arquivo: exercicio6.js
function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    } else {
      throw error; // Relança erros inesperados
    }
  }
}

// Testes (adicionei um teste para erro não-SyntaxError, como TypeError)
console.log(safeParse('{"nome": "Leandromeda"}')); // → { nome: "Leandromeda" }
console.log(safeParse('texto inválido'));     // → null
// console.log(safeParse(null)); // Lançaria TypeError, pois JSON.parse(null) falha com TypeError