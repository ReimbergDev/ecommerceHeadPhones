<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dados do formulário
    $corFone = $_POST["corFone"];
    $abafadorFone = $_POST["abafadorFone"];
    $adesivarFone = $_POST["adesivarFone"];
    $tamanhoFone = $_POST["tamanhoFone"];

    // Conexão com o banco de dados
    $servername = "localhost";  // ou "127.0.0.1" se estiver executando localmente
    $username = "root";
    $password = "";
    $dbname = "formulario";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    // Insere os dados na tabela
    $sql = "INSERT INTO respostas (corFone, abafadorFone, adesivarFone, tamanhoFone) VALUES ('$corFone', '$abafadorFone', '$adesivarFone', '$tamanhoFone')";

    if ($conn->query($sql) === TRUE) {
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
} else {
    header("Location: index.html");
    exit();
}
?>
