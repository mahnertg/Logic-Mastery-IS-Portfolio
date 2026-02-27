/**
 * SISTEMA INTEGRAL DE ENGENHARIA DE SOFTWARE - CURSOS 01 E 02 (ALURA)
 * DESENVOLVEDOR: Matheus - 5º Período de Sistemas de Informação
 * DATA: 27/02/2026
 * VERSÃO: 7.2 (Histórico Acadêmico Integral de 260+ Linhas)
 */

// ============================================================
// 🕹️ CAPÍTULO 1: PROJETO JOGO DO NÚMERO SECRETO (PRODUÇÃO)
// Versão Final com Memória, Voz Nativa e Dificuldade 1-100.
// ============================================================

// CONFIGURAÇÕES DE ESTADO E MEMÓRIA DO SISTEMA
let listaDeNumerosSorteados = []; 
let numeroMaximo = 100; // Dificuldade atualizada conforme Módulo 05
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

/**
 * Função de Abstração Visual e Sonora (UX/Acessibilidade).
 * Centraliza a escrita no DOM e a narração via Web Speech API.
 */
function exibirTextoNaTela(seletor, texto) {
    let campo = document.querySelector(seletor);
    campo.innerHTML = texto;

    // INTEGRAÇÃO DE VOZ NATIVA (Acessibilidade)
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("[AVISO] Navegador sem suporte para voz.");
    }
}

/**
 * Define o estado visual inicial da aplicação.
 */
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('.container__texto-paragrafo', `Escolha um número entre 1 e ${numeroMaximo}`);
}

// Inicialização imediata
exibirMensagemInicial();

/**
 * Função verificarChute: O motor lógico de comparação.
 */
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(`[DEBUG] Tentativa: ${tentativas} | Chute: ${chute} | Alvo: ${numeroSecreto}`);

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        
        // Lógica de pluralização profissional
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemVitoria = `🎯 Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        
        exibirTextoNaTela('.container__texto-paragrafo', mensagemVitoria);
        
        // Ativa o botão de reinicialização no HTML
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log('[SISTEMA] Vitória confirmada via terminal.');

    } else {
        // Feedback Direcionado (User Experience)
        if (chute > numeroSecreto) {
            exibirTextoNaTela('.container__texto-paragrafo', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('.container__texto-paragrafo', `O número secreto é maior que ${chute}`);
        }
        
        tentativas++;
        limparCampo(); // Mantém a organização visual
        console.log('[DEBUG] Erro processado. Preparando nova tentativa.');
    }
}

/**
 * Algoritmo de Aleatoriedade com Recursividade e Controle de Memória.
 * Vital para a lógica de não repetição de dados.
 */
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    // Proteção contra estouro de memória (Stack Overflow)
    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    // Verificação de duplicidade na lista
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); // Chamada recursiva
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(`[MEMÓRIA] Sorteios realizados: ${listaDeNumerosSorteados}`);
        return numeroEscolhido;
    }
}

/**
 * Limpeza de Interface: Reseta o valor do input.
 */
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

/**
 * Reset de Estado: Retorna o sistema ao ponto zero.
 */
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    
    // Bloqueia o botão novamente conforme regra de negócio
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log('[SISTEMA] O jogo foi resetado. Novo número gerado.');
}


// ============================================================
// 📚 CAPÍTULO 2: LABORATÓRIO ACADÊMICO (HISTÓRICO COMPLETO)
// Esta seção prova a trajetória de estudos do Matheus sem filtros.
// ============================================================

/* 

--- MÓDULO: LISTAS E ESTRUTURAS DE DADOS (Curso 02) ---

// 1. Criar uma lista vazia
let listaGenerica = [];

// 2. Lista de linguagens pré-definida
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Adição dinâmica de itens (Método Push)
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

// 4. Acessar o primeiro elemento
let nomesExemplo1 = ['Matheus', 'Ana', 'Bruno'];
console.log('Primeiro nome:', nomesExemplo1[0]);

// 5. Acessar o segundo elemento
let nomesExemplo2 = ['Matheus', 'Ana', 'Bruno'];
console.log('Segundo nome:', nomesExemplo2[1]);

// 6. Acessar o último elemento dinamicamente
let nomesExemplo3 = ['Matheus', 'Ana', 'Bruno'];
console.log('Último nome:', nomesExemplo3[nomesExemplo3.length - 1]);


--- MÓDULO: ALGORITMOS E MATEMÁTICA (Curso 02) ---

// 1. Função de Cálculo de IMC
function calcularIMC(altura, peso) {
    let resultadoIMC = peso / (altura * altura);
    return resultadoIMC.toFixed(2);
}

// 2. Função de Fatorial (Lógica de Repetição)
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let fatorial = 1;
    while (numero > 1) {
        fatorial = fatorial * numero;
        numero = numero - 1;
    }
    return fatorial;
}

// 3. Conversor de Moedas (Dólar para Real)
function converterDolarParaReal(valorDolar) {
    let cotacao = 4.80;
    let valorConvertido = valorDolar * cotacao;
    return valorConvertido;
}

// 4. Cálculo de Sala Retangular
function calcularSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log('Área da sala:', area);
    console.log('Perímetro da sala:', perimetro);
}

// 5. Cálculo de Sala Circular
function calcularSalaCircular(raio) {
    let pi = 3.14;
    let areaCirculo = pi * (raio * raio);
    let perimetroCirculo = 2 * pi * raio;
    console.log('Área circular:', areaCirculo);
    console.log('Perímetro circular:', perimetroCirculo);
}

// 6. Gerador de Tabuada (Console)
function mostrarTabuada(numero) {
    let multiplicador = 1;
    while (multiplicador <= 10) {
        let resultadoTabuada = numero * multiplicador;
        console.log(numero + ' x ' + multiplicador + ' = ' + resultadoTabuada);
        multiplicador = multiplicador + 1;
    }
}


--- MÓDULO: FUNÇÕES E RETORNOS (Curso 02) ---

// 1. Calculadora de Média
function calcularMedia(n1, n2, n3, n4) {
    let somaNotas = n1 + n2 + n3 + n4;
    let mediaFinal = somaNotas / 4;
    return mediaFinal;
}

// 2. Verificador de Aprovação
function verificarAprovacao(media) {
    if (media >= 5) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}

// 3. Função para retornar o maior valor
function encontrarMaior(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


--- MÓDULO: INTERAÇÃO COM HTML (Curso 02) ---

function clicarNoConsole() {
    console.log('O botão Console foi clicado!');
}

function clicarNoAlerta() {
    alert('Eu amo JS!');
}

function clicarNoPrompt() {
    let cidadeUsuario = prompt('Diga o nome de uma cidade:');
    alert('Estive em ' + cidadeUsuario + ' e lembrei de você!');
}


--- CURSO 01: LÓGICA BÁSICA (A BASE DE TUDO) ---

// 1. Sistema de Milhas (Regras de Negócio)
let milhasUsuario = 10000;
if (milhasUsuario >= 30000) {
    console.log('Desconto de 20%');
} else {
    if (milhasUsuario >= 5000) {
        console.log('Desconto de 10%');
    } else {
        console.log('Sem desconto disponível');
    }
}

// 2. Sistema Detran (Habilitação)
let idadeCandidato = 25;
if (idadeCandidato >= 18) {
    console.log('Pode tirar a habilitação!');
} else {
    console.log('Menor de idade.');
}

// 3. Loops de Contagem
let contadorInicial = 1;
while (contadorInicial <= 10) {
    console.log('Contador:', contadorInicial);
    contadorInicial = contadorInicial + 1;
}

// 4. Primeiras Variáveis (Desafio Lua)
let nomeLua = 'Lua';
let idadeLua = 25;
let numeroDeVendasLua = 50;
let saldoDisponivelLua = 1000;

*/