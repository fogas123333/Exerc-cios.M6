// Arquivo: exercicio12.js
function externo(n) {
  return interno(n) + 1;
}

function interno(m) {
  return m * 3;
}

externo(4);

// Dissertativo: Diferenças práticas.
// - Step Over: Executa a linha atual (chamada de externo) sem entrar em interno, pulando para o retorno.
// - Step Into: Entra na função interno, permitindo depurar linha por linha dentro dela.
// - Step Out: Sai da função atual (interno) e volta para externo, útil para pular o resto da função.
console.log("Step Over: Pula interno. Step Into: Entra em interno. Step Out: Sai de interno para externo.");