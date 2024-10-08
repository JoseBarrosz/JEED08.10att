let setsA = 0;
let setsB = 0;
let jogoEncerrado = false;

function incrementarPonto(pontosId, setsId) {
    if (jogoEncerrado) return;

    let pontos = document.getElementById(pontosId);
    let sets = document.getElementById(setsId);
    let pontosAdversarioId = pontosId === 'pontosA' ? 'pontosB' : 'pontosA';
    let setsAdversarioId = setsId === 'setsA' ? 'setsB' : 'setsA';
    let pontosAdversario = document.getElementById(pontosAdversarioId);
    let setsAdversario = document.getElementById(setsAdversarioId);

    pontos.textContent = parseInt(pontos.textContent) + 1;

    // Define o número de pontos necessários para vencer
    let pontosParaVencer = (setsA === 2 && setsB === 2) ? 15 : 25;

    // Verifica se um dos times venceu o set
    if (pontos.textContent >= pontosParaVencer && (pontos.textContent - parseInt(pontosAdversario.textContent)) >= 2) {
        pontos.textContent = 0;
        pontosAdversario.textContent = 0;

        sets.textContent = parseInt(sets.textContent) + 1;

        if (setsId === 'setsA') {
            setsA++;
        } else {
            setsB++;
        }

        // Finaliza o jogo se algum time atingir 3 sets
        if (setsA === 3 || setsB === 3) {
            jogoEncerrado = true;

            // Permite reativar os botões após 5 segundos
            setTimeout(function() {
                jogoEncerrado = false; // Permite que os botões voltem a funcionar
            }, 500); //  segundos
        }
    }
}

function decrementarPonto(pontosId) {
    if (jogoEncerrado) return;

    let pontos = document.getElementById(pontosId);
    if (pontos.textContent > 0) {
        pontos.textContent = parseInt(pontos.textContent) - 1;
    }
}

// Função para abrir o modal e definir os times
function abrirModal(timeA, timeB) {
    document.getElementById('teamA').textContent = timeA;
    document.getElementById('teamB').textContent = timeB;

    // Mostra o modal
    const modal = document.getElementById('placarModal');
    modal.style.display = 'block';
}

// Função ao clicar em "Salvar Resultado"
document.getElementById('saveResultadoBtn').addEventListener('click', function() {
    const placar1 = document.getElementById('placar1');
    const placar2 = document.getElementById('placar2');

    // Atualiza o placar com os valores atuais
    placar1.textContent = document.getElementById('pontosA').textContent;
    placar2.textContent = document.getElementById('pontosB').textContent;

    // Reinicia a lógica do jogo
    // Não reiniciar o placar ou sets, apenas permitir a alteração de pontos
    jogoEncerrado = false; // Permitir que os botões voltem a funcionar

    // Fecha o modal
    const modal = document.getElementById('placarModal');
    modal.style.display = 'none';
});

// Lógica para abrir o modal de um novo jogo
function iniciarNovoJogo(timeA, timeB) {
    abrirModal(timeA, timeB);
}

// Chame iniciarNovoJogo('Time A', 'Time B') para abrir um novo jogo
