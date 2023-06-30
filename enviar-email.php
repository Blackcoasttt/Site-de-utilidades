<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtém os valores dos campos do formulário
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Configurações do email
  $to = "alysonpr2011@gmail.com"; // Substitua pelo seu endereço de email
  $subject = "Novo formulário de contato";
  $body = "Nome: " . $name . "\n" .
          "Email: " . $email . "\n" .
          "Mensagem: " . $message;

  // Envia o email
  if (mail($to, $subject, $body)) {
    echo "Email enviado com sucesso!";
  } else {
    echo "Erro ao enviar o email.";
  }
}
?>
