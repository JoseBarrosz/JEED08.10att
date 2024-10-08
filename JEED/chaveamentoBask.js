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
  