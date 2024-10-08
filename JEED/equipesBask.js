
function salvarEquipes(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Coleta os nomes das equipes
      const equipes = [];
      for (let i = 1; i <= 8; i++) {
          const nomeEquipe = document.getElementById(`team${i}`).value;
          if (nomeEquipe) {
              equipes.push(nomeEquipe);
          }
      }
  
      // Armazena os nomes no localStorage
      localStorage.setItem('equipes', JSON.stringify(equipes));
  
      // Redireciona para a página do chaveamento
      window.location.href = 'chaveamentoBask.html';
  }
  