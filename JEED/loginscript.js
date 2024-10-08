
        function validateForm() {
            var rm = document.getElementById("rm").value;
            var senha = document.getElementById("senha").value;
            var errorMessage = document.getElementById("errorMessage");

            if (rm === "1234" && senha === "12345678") {
                // Credenciais válidas, redirecionar para outra página
                window.location.href = "campeonatos.html";
                return false; // Evita que o formulário seja enviado
            } else {
                // Credenciais inválidas, exibir mensagem de erro
                errorMessage.innerText = "Credenciais inválidas. Por favor, tente novamente.";
                errorMessage.style.color = "#ff0000"; // Cor vermelha
                return false; // Evita que o formulário seja enviado
            }
        }