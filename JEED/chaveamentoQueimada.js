document.addEventListener("DOMContentLoaded", function() {
    // Função para mover o texto do nome do time
    function moveTeamText(sourceTeam, targetTeam) {
        // Verifica se o nome do time não está vazio ou "Vazio"
        if (sourceTeam.textContent && sourceTeam.textContent.trim() !== 'Vazio') {
            targetTeam.textContent = sourceTeam.textContent;
        }
    }

    // Configurações das quartas de final para as semifinais
    const teamMappings = [
        { source: ".team1 .seta-dupla", sourceTeam: ".team1 .team-name", targetTeam: ".team9 .team-name" },
        { source: ".team2 .seta-dupla", sourceTeam: ".team2 .team-name", targetTeam: ".team9 .team-name" },
        { source: ".team3 .seta-dupla", sourceTeam: ".team3 .team-name", targetTeam: ".team10 .team-name" },
        { source: ".team4 .seta-dupla", sourceTeam: ".team4 .team-name", targetTeam: ".team10 .team-name" },
        { source: ".team5 .seta-dupla", sourceTeam: ".team5 .team-name", targetTeam: ".team11 .team-name" },
        { source: ".team6 .seta-dupla", sourceTeam: ".team6 .team-name", targetTeam: ".team11 .team-name" },
        { source: ".team7 .seta-dupla", sourceTeam: ".team7 .team-name", targetTeam: ".team12 .team-name" },
        { source: ".team8 .seta-dupla", sourceTeam: ".team8 .team-name", targetTeam: ".team12 .team-name" },
        // Configurações das semifinais para a final
        { source: ".team9 .seta-dupla", sourceTeam: ".team9 .team-name", targetTeam: ".team13 .team-name" },
        { source: ".team10 .seta-dupla", sourceTeam: ".team10 .team-name", targetTeam: ".team13 .team-name" },
        { source: ".team11 .seta-dupla", sourceTeam: ".team11 .team-name", targetTeam: ".team14 .team-name" },
        { source: ".team12 .seta-dupla", sourceTeam: ".team12 .team-name", targetTeam: ".team14 .team-name" },
        { source: ".team13 .seta-dupla", sourceTeam: ".team13 .team-name", targetTeam: ".team15 .team-name" },
        { source: ".team14 .seta-dupla", sourceTeam: ".team14 .team-name", targetTeam: ".team15 .team-name" },
    ];

    // Itera sobre as configurações e adiciona os eventos de clique
    teamMappings.forEach(mapping => {
        const setaDupla = document.querySelector(mapping.source);
        const sourceTeam = document.querySelector(mapping.sourceTeam);
        const targetTeam = document.querySelector(mapping.targetTeam);

        setaDupla.addEventListener("click", function() {
            moveTeamText(sourceTeam, targetTeam);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Recupera os nomes das equipes do localStorage
    const equipes = JSON.parse(localStorage.getItem('equipes')) || [];
    
    // Embaralha as equipes
    const equipesEmbaralhadas = equipes.sort(() => Math.random() - 0.5);
    
    // Preenche as divs de acordo com o número de equipes
    const totalEquipes = equipesEmbaralhadas.length;

    if (totalEquipes <= 2) {
        // Preenche team13 e team14
        for (let i = 0; i < totalEquipes; i++) {
            const teamDiv = document.querySelector(`.team${13 + i} .team-name`);
            if (teamDiv) {
                teamDiv.textContent = equipesEmbaralhadas[i] || 'Vazio';
            }
        }
    } else if (totalEquipes <= 4) {
        // Preenche team9, team10, team11 e team12
        for (let i = 0; i < totalEquipes; i++) {
            const teamDiv = document.querySelector(`.team${9 + i} .team-name`);
            if (teamDiv) {
                teamDiv.textContent = equipesEmbaralhadas[i] || 'Vazio';
            }
        }
    } else {
        // Preenche todas as divs de equipe (team1 a team8)
        for (let i = 0; i < 8; i++) {
            const teamDiv = document.querySelector(`.team${i + 1} .team-name`);
            if (teamDiv) {
                teamDiv.textContent = equipesEmbaralhadas[i] || 'Vazio';
            }
        }
    }
});
