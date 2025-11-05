// Arquivo: exercicio5.js
function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

// Testes
console.log(safeParse('{"nome": "Leandromeda"}')); // → { nome: "Leandromeda" }
console.log(safeParse('texto inválido'));     // → null