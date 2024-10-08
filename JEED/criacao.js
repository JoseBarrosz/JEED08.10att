document.addEventListener('DOMContentLoaded', () => {
    const modalidades = document.querySelectorAll('.modalidade');
    const errorMessage = document.getElementById('error-message');
    const criarCampeonatoButton = document.getElementById('criar-campeonato');

    modalidades.forEach(modalidade => {
        modalidade.addEventListener('click', () => {
            modalidades.forEach(mod => mod.classList.remove('selected'));
            modalidade.classList.add('selected');
        });
    });

    criarCampeonatoButton.addEventListener('click', function(event) {
        errorMessage.textContent = '';

        const nomeCampeonato = document.getElementById('nome-campeonato').value;
        const dataHorario = document.getElementById('data-horario').value;
        const horaHorario = document.getElementById('hora-horario').value;
        const numeroEquipes = document.getElementById('numero-equipes').value;

        // Verifique se todos os campos estão preenchidos
        if (!nomeCampeonato || !dataHorario || !horaHorario || !numeroEquipes) {
            errorMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            return false;
        }

        const modalidadeSelecionada = document.querySelector('.modalidade.selected');
        if (!modalidadeSelecionada) {
            errorMessage.textContent = 'Por favor, selecione uma modalidade.';
            return false;
        }

        // Se tudo estiver validado, redirecionar para a página correspondente
        let url;
        const numeroEquipesValue = parseInt(numeroEquipes);
        switch (numeroEquipesValue) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                url = 'http://127.0.0.1:5500/equipes8.html'; // Modifique conforme necessário
                window.location.href = url;
                break;
        }
    });
});
