let jogadorAtual = 'X';
let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogoAtivo = true;

const combinacoesVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

document.querySelectorAll('.celula').forEach(celula => {
    celula.addEventListener('click', () => fazerJogada(celula));
});

document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);

function fazerJogada(celula) {
    const index = celula.getAttribute('data-index');
    
    if (tabuleiro[index] === '' && jogoAtivo) {
        tabuleiro[index] = jogadorAtual;
        celula.textContent = jogadorAtual;
        
        if (verificarVitoria()) {
            alert(`Jogador ${jogadorAtual} venceu!`);
            jogoAtivo = false;
            return;
        }
        
        if (verificarEmpate()) {
            alert('Empate!');
            jogoAtivo = false;
            return;
        }
        
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    }
}

function verificarVitoria() {
    return combinacoesVitoria.some(combinacao => {
        return combinacao.every(index => {
            return tabuleiro[index] === jogadorAtual;
        });
    });
}

function verificarEmpate() {
    return tabuleiro.every(celula => celula !== '');
}

function reiniciarJogo() {
    jogadorAtual = 'X';
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    jogoAtivo = true;
    
    document.querySelectorAll('.celula').forEach(celula => {
        celula.textContent = '';
    });
}