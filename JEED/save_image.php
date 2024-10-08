<?php
// Conexão com o banco de dados (ajuste as informações)
include 'db_connect.php';

// Receber a imagem em base64
$imageData = json_decode($_POST['image'], true)['image'];

// Remover o header "data:image/png;base64,"
$filteredData = str_replace('data:image/png;base64,', '', $imageData);

// Decodificar a imagem base64
$decodedData = base64_decode($filteredData);

// Salvar a imagem no banco de dados
$sql = "INSERT INTO imagens (imagem) VALUES (?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $decodedData);
$stmt->execute();

if ($stmt) {
    echo json_encode(['message' => 'Imagem salva com sucesso!']);
} else {
    echo json_encode(['message ao salvar imagem: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>