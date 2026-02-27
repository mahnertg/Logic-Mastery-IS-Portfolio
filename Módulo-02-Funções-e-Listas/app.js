/**
 * SISTEMA INTEGRAL DE ENGENHARIA DE SOFTWARE - CURSOS 01 E 02 (ALURA)
 * DESENVOLVEDOR: Matheus - 5º Período de Sistemas de Informação
 * DATA: 26/02/2026
 * VERSÃO: 7.0 (Web Speech API Nativa, Memória de Sorteio e Portfólio Cumulativo)
 */

// ============================================================
// 🕹️ CAPÍTULO 1: PROJETO JOGO DO NÚMERO SECRETO (PRODUÇÃO)
// Este é o sistema principal com gerenciamento de estado e UX sonora.
// ============================================================

// CONFIGURAÇÕES DE ESTADO E MEMÓRIA
let listaDeNumerosSorteados = []; 
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

/**
 * Função de Abstração Visual e Sonora (UX/Acessibilidade).
 * Centraliza a atualização do DOM e utiliza a Web Speech API Nativa.
 */
function exibirTextoNaTela(seletor, texto) {
    let campo = document.querySelector(seletor);
    campo.innerHTML = texto;

    // INTEGRAÇÃO DE VOZ NATIVA (Substituindo ResponsiveVoice)
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("[AVISO] Web Speech API não suportada neste navegador.");
    }
}

/**
 * Define o estado inicial da interface (Textos Padrão).
 */
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('.container__texto-paragrafo', `Escolha um número entre 1 e ${numeroMaximo}`);
}

// Inicialização imediata do sistema
exibirMensagemInicial();

/**
 * Função verificarChute: Motor de verificação e controle de fluxo.
 * Acionada pelo botão 'Chutar' no HTML.
 */
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(`[DEBUG] Tentativa: ${tentativas} | Valor: ${chute} | Alvo: ${numeroSecreto}`);

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemVitoria = `🎯 Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('.container__texto-paragrafo', mensagemVitoria);
        
        // Ativa o botão de reinicialização (Remoção de Atributo)
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log('[SISTEMA] Vitória confirmada. Sistema aguardando reset.');

    } else {
        // Feedback Dinâmico (User Experience)
        if (chute > numeroSecreto) {
            exibirTextoNaTela('.container__texto-paragrafo', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('.container__texto-paragrafo', `O número secreto é maior que ${chute}`);
        }
        
        tentativas++;
        limparCampo(); // Organização de Interface
        console.log('[DEBUG] Chute incorreto. Preparando nova iteração.');
    }
}

/**
 * Algoritmo de Aleatoriedade com Memória e Recursividade.
 * Garante que o jogo não repita números em uma mesma sessão de jogo.
 */
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    // Reseta a memória se o limite de possibilidades for atingido
    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    // Verifica se o número já existe na lista (Recursividade Acadêmica)
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(`[MEMÓRIA] Histórico de sorteios: ${listaDeNumerosSorteados}`);
        return numeroEscolhido;
    }
}

/**
 * Helper: Reseta visualmente o campo de entrada.
 */
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

/**
 * Função de Reinicialização Total: Chamada pelo botão 'Novo Jogo'.
 * Linkagem: Requer onclick="reiniciarJogo()" no index.html.
 */
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    
    // Bloqueia o botão novamente até o próximo acerto
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log('[SISTEMA] Estado resetado. Novo ciclo iniciado.');
}


// ============================================================
// 📚 CAPÍTULO 2: LABORATÓRIO ACADÊMICO (HISTÓRICO INTEGRAL)
// Esta seção prova 100% da trajetória do Matheus em SI e Lógica.
// ============================================================

/* 

--- MÓDULO: LISTAS E ARRAYS (Curso 02) ---

// 1. Criação de lista genérica
let listaGenerica = [];

// 2. Lista de linguagens de programação
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Adição dinâmica de elementos
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

// 4, 5 e 6. Acesso por índices (Indexação Zero)
let listaNomesLab = ['Matheus', 'Ana', 'Bruno'];
// console.log(listaNomesLab[0]); // Matheus
// console.log(listaNomesLab[listaNomesLab.length - 1]); // Bruno


--- MÓDULO: ALGORITMOS MATEMÁTICOS (Curso 02) ---

// 1. Cálculo de IMC
function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// 2. Cálculo de Fatorial (Recursividade/Loop)
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let fatorial = 1;
    while (numero > 1) {
        fatorial *= numero;
        numero--;
    }
    return fatorial;
}

// 3. Conversor de Moeda (Dólar para Real)
function converterDolar(valorDolar) {
    let cotacao = 4.80;
    return valorDolar * cotacao;
}

// 4. Área e Perímetro de Sala Retangular
function calcularRetangulo(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`Área: ${area} | Perímetro: ${perimetro}`);
}

// 5. Geometria de Sala Circular (Pi = 3.14)
function calcularCirculo(raio) {
    let area = 3.14 * (raio * raio);
    let perimetro = 2 * 3.14 * raio;
    console.log(`Área: ${area.toFixed(2)} | Perímetro: ${perimetro.toFixed(2)}`);
}

// 6. Gerador de Tabuada (Iteração)
function mostrarTabuada(numero) {
    let i = 1;
    while (i <= 10) {
        console.log(`${numero} x ${i} = ${numero * i}`);
        i++;
    }
}


--- MÓDULO: FUNÇÕES E RETORNOS (Curso 02) ---

// 7. Média e Aprovação Escolar
function calcularMedia(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
}

function verificarAprovacao(media) {
    if (media >= 5) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}


--- CURSO 01: LÓGICA BÁSICA (O FUNDAMENTO) ---

// 8. Regras de Negócio (Jornada Milhas)
function desafioMilhas(milhas) {
    let desconto = 0;
    if (milhas >= 30000) {
        desconto = 20;
    } else if (milhas >= 5000) {
        desconto = 10;
    }
    return desconto;
}

// 9. Verificação Detran (Idade mínima)
function validarDirecao(idade) {
    if (idade >= 18) {
        console.log('Habilitado');
    } else {
        console.log('Menor de idade');
    }
}

// 10. Loops 1 a 10 (Primeiro contato com While)
function loopInicial() {
    let c = 1;
    while (c <= 10) {
        console.log(c);
        c++;
    }
}

// 11. Variáveis da Lua e Erros iniciais
let nomeBase = 'Lua';
let saldoBase = 1000;
let erroBase = 'Erro! Preencha todos os campos';

*/