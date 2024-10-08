<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JEED</title>
    <link rel="stylesheet" href="campeonatos.css">
    <script type="text/javascript" src="campeonatos.js"></script>
</head>
<body>
    <header class="header">
        <div class="logo">
            <img src="img/logoJEED.png" alt="Logo JEED">
        </div>
        <nav class="nav-menu">
            <a href="index.php">INICIO</a>
            <a href="index.php">CARACTERÍSTICAS</a>
            <a href="index.html#container4">CAMPEONATOS</a>
            <a href="index.html#contato">FALE CONOSCO</a>
        </nav>
        <div class="login-button">
            <a href="login.html">Acessar conta</a>
        </div>
    </header>
 
    <main>
        <section class="campeonatos">
            <h1>SEUS CAMPEONATOS</h1>
            <div class="search">
                <input type="text" placeholder="Pesquisar Campeonato" maxlength="25">
                <button><img src="img/lupa.png" alt="Pesquisar"></button>
            </div>
            <hr>

            <?php
              // Conexão com o banco de dados (assumindo que db_connect.php estabelece a conexão)
              include 'db_connect.php';

              // Consulta SQL para selecionar todas as imagens
              $sql = "SELECT * FROM imagens";
              $result = $conn->query($sql);

              // Verificando se há resultados
              if ($result->num_rows > 0) {
                  // Loop para exibir cada imagem
                  while($row = $result->fetch_assoc()) {
                      $imagem_blob = $row['imagem'];

                      // Determinando o tipo da imagem (ajuste conforme necessário)
                      // Você pode usar bibliotecas mais robustas para identificar o tipo da imagem
                      $tipo_imagem = 'image/jpeg'; // Por exemplo, se todas as imagens forem JPEG

                      // Exibindo a imagem
                      echo '<img src="data:' . $tipo_imagem . ';base64,' . base64_encode($imagem_blob) . '" alt="Imagem">';
                      echo '<br>';
                  }
              } else {
                  echo "Nenhuma imagem encontrada.";
              }

              $conn->close();
              ?>





            <p>Nenhum campeonato encontrado</p>
            <a href="criacao.html" class="btn">Criar Campeonato</a>
        </section>
    </main>

    <footer>
        <div class="footer-container">
          <div class="footer-section logo-section">
            <img src="img/logoredonda.png" alt="Logo JEED" class="footer-logo">
            <p id="contato">jeedetec@gmail.com</p>
            <a href="#">Política de privacidade</a>
          </div>
          <div class="footer-section menu-section">
            <h4>Menu</h4>
            <ul>
              <li><a href="#container">Início</a></li>
              <li><a href="#container3">Características</a></li>
              <li><a href="#container4">Campeonatos</a></li>
              <li><a href="#contato">Fale Conosco</a></li>
            </ul>
          </div>
          <div class="footer-section downloads-section">
            <h4>Redes Socias</h4>
            <p id="contato">Você pode usar nossas redes sociais para entrar em contato conosco:</p>
            <div class="download-buttons">
              <a href="#"><img src="img/face.png" alt="Facebook"></a>
              <a href="#"><img src="img/insta.png" alt="Instagram"></a>
            </div>
          </div>
        </div>
          <p class="rodapetext">© 2024 JEED. Todos os direitos reservados.</p>
        </div>
      </footer>
    
    <script type="text/javascript" src="campeonatos.js"></script>


</body>
 
</html>