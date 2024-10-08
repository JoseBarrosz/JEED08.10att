<!DOCTYPE html>
<!-- PAREI AQUIIIIIIIIIIIIIIIIIIIIIIIIIIII, TEM Q ARRUMAR TAMBÉM O save_image.php -->
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chaveamento</title>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <link rel="stylesheet" href="chaveamentoQueimada.css">
    <script type="text/javascript" src="chaveamentoQueimada.js" defer></script>
</head>
<body>

    <header class="header">
        <div class="logo">
            <img src="img/logoJEED.png" alt="Logo JEED">
        </div>
        <nav class="nav-menu">
            <a href="index.html">INICIO</a>
            <a href="index.html#container3">CARACTERÍSTICAS</a>
            <a href="index.html#container4">CAMPEONATOS</a>
            <a href="index.html#contato">FALE CONOSCO</a>
        </nav>
        <div class="login-button">
            <a href="campeonatos.php">FINALIZAR AGORA</a>
            <button id="screenshotButton">Tirar Print</button>
        </div>
    </header>
    
    <div class="container">
        <main>
            <h1>Chaveamento Queimada</h1>
            <div class="bracket">

                 <div class="quartas">
                    <div class="match">
                        <div class="team1">
                            <div class="team-name"></div>
                            <div class="placar1"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                        <div class="team2">
                            <div class="team-name"></div> <div class="placar2"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                    </div>
                    <div class="match">
                        <div class="team3"><div class="team-name"></div> <div class="placar1"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                        <div class="team4"><div class="team-name"></div> <div class="placar2"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                    </div>
                    <div class="match">
                        <div class="team5"><div class="team-name"></div> <div class="placar1"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                        <div class="team6"><div class="team-name"></div> <div class="placar2"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                    </div>
                    <div class="match">
                        <div class="team7"><div class="team-name"></div> <div class="placar1"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                        <div class="team8"><div class="team-name"></div> <div class="placar2"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                    </div>
                    </div>
                    <div class="linha1">
                        <img src="img/linha1.png" class="ftlinha1">

                        <div class="linha2">
                              <img src="img/linha1.png" class="ftlinha2">
                        </div>
                  </div>


                <div class="semi">
                    <div class="match2">
                        <div class="team9"><div class="team-name"></div> <div class="placar1"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                        <div class="team10"><div class="team-name"></div> <div class="placar2"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                    </div>
                    <div class="match3">
                        <div class="team11"><div class="team-name"></div> <div class="placar1"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                        <div class="team12"><div class="team-name"></div> <div class="placar2"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                    </div>
                  </div>

                  <div class="linha3">
                        <img src="img/linha3.png" class="ftlinha3">
                  </div>

                                

                <div class="final">
                    <div class="match4">
                        <div class="team13"><div class="team-name"></div> <div class="placar1"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                        <div class="team14"><div class="team-name"></div> <div class="placar2"><img src="img/setaDupla.png" class="seta-dupla"></div></div>
                    </div>
                </div>
                <div class="linha4">
                    <img src="img/linha4.png" class="ftlinha4">
              </div>
              <div class="campeao">
                <img src="img/trofeu.png" class="trofeu">
                <div class="match5">
                    <div class="team15"><div class="team-name"></div></div>
                </div>
            </div>
            </div>
        </main>
    </div>
</body>

<script>
        const screenshotButton = document.getElementById('screenshotButton');

        screenshotButton.addEventListener('click', () => {
            html2canvas(document.body).then(canvas => {
                const base64image = canvas.toDataURL('image/png');

                // Enviar os dados para o servidor via POST
                fetch('/salvar_image.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ image: base64image })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data.message); 
 // Mensagem de sucesso ou erro
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            });
        });
    </script>
       
</html>
