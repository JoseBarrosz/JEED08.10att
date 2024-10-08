<?php
// Conexão com o banco de dados (assumindo que db_connect.php estabelece a conexão)
include 'db_connect.php';

// Obtendo os dados do formulário
$nome_campeonato = $_POST['nome-campeonato'];
$data_horario = $_POST['data-horario'];
$hora_horario = $_POST['hora-horario'];
$modalidade = $_POST['modalidade_selecionada'];
$numero_equipes = $_POST['numero-equipes'];

// Preparando a consulta SQL com todos os parâmetros
$sql = "INSERT INTO Campeonato (nomeCampeonato, dataCampeonato, horario, modalidade, numeroEquipes) 
        VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssi", $nome_campeonato, $data_horario, $hora_horario, $modalidade, $numero_equipes); // sss para strings, i para inteiro
$stmt->execute();

if ($stmt->error) {
    echo "Erro ao criar o campeonato: " . $stmt->error;
} else {
    echo "Novo campeonato criado com sucesso";
    
}
switch ($modalidade) {
    case 'futsal':
        header('Location: equipes8.html');
        break;
    case 'volei':
        header('Location: equipesVolei.html');
        break;
    case 'queimada':
        header('Location: equipesQueimada.html');
        break;
    case 'basquete':
        header('Location: equipes8.html');
        break;
    default:
        header('Location: pagina_default.html'); // Página padrão para modalidades não definidas
}

exit; // 

$stmt->close();
$conn->close();



?>



