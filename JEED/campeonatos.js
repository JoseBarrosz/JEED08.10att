// Array para armazenar os campeonatos
let campeonatos = [];

// Função para obter os campeonatos salvos localmente
function getCampeonatos() {
    const campeonatosString = localStorage.getItem('campeonatos');
    if (campeonatosString) {
        campeonatos = JSON.parse(campeonatosString);
    }
}

// Função para salvar os campeonatos localmente
function saveCampeonatos() {
    localStorage.setItem('campeonatos', JSON.stringify(campeonatos));
}

// Função para criar um novo campeonato
function criarCampeonato(nome, dataHora, numEquipes, modalidades) {
    const novoCampeonato = { nome, dataHora, numEquipes, modalidades };
    campeonatos.push(novoCampeonato);
    saveCampeonatos();
}

// Carregar os campeonatos ao iniciar a página
getCampeonatos();