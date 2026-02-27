/**
 * FORMAÇÃO: Lógica de Programação (Módulo 01)
 * DESENVOLVEDOR: Matheus - Sistemas de Informação (5º Período)
 * VERSÃO: 3.0 (Projeto Final de Fundamentos)
 */

// ============================================================
// 🕹️ PROJETO: JOGO DO NÚMERO SECRETO (v1.0 - Lógica Pura)
// ============================================================

alert("Bem-vindo ao Jogo do Número Secreto - Versão de Fundamentos");

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

console.log(`[DEBUG] Alvo aleatório gerado: ${numeroSecreto}`);

while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
  console.log(`[DEBUG] Tentativa nº ${tentativas}: ${chute}`);

  if (chute == numeroSecreto) {
    break; 
  } else {
    // Feedback de UX via Alerta (Padrão do Curso 01)
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

// Boas práticas: Operador Ternário para pluralização
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`🎯 Vitória! Você descobriu o segredo ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
console.log("[SISTEMA] Fluxo de fundamentos concluído.");

// ============================================================
// 📚 LABORATÓRIO DE DESAFIOS (MÓDULO 01)
// Registro cumulativo de todos os exercícios de fixação do curso.
// ============================================================

/*
// --- DESAFIOS FINAIS ---
// 1. Saudação
console.log('Bem-vindo ao laboratório!');
// 2. Variável Nome
let nomeLab = 'Matheus';
console.log(`Olá, ${nomeLab}!`);
// 3 e 4. Alert/Prompt
alert(`Olá, ${nomeLab}!`);
let favLang = prompt('Qual linguagem você mais gosta?');
// 5. Soma
let v1 = 10, v2 = 5;
console.log(`A soma de ${v1} e ${v2} é ${v1 + v2}`);
// 6. Subtração
console.log(`A diferença é ${v1 - v2}`);
// 7. Idade
let age = prompt('Idade:');
console.log(age >= 18 ? 'Maior de idade' : 'Menor de idade');
// 8. Positivo/Negativo/Zero
let n = prompt('Número:');
if (n > 0) console.log('Positivo'); else if (n < 0) console.log('Negativo'); else console.log('Zero');
// 9. Loop 1 a 10
let i = 1; while(i <= 10) { console.log(i); i++; }
// 10. Nota
let notaLab = 8;
console.log(notaLab >= 7 ? 'Aprovado' : 'Reprovado');
// 11, 12, 13. Aleatórios
console.log(Math.random());
console.log(parseInt(Math.random() * 10 + 1));
console.log(parseInt(Math.random() * 1000 + 1));

// --- DESAFIOS INICIAIS ---
// Variáveis da Lua e Erros:
let nomeLua = "Lua";
let idadeLua = 25;
let mensagemErro = "Erro! Preencha todos os campos";
*/