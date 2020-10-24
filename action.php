<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'test@test.ru';
$email_subject = "New form Submission";
$email_body = "User name: $name.\n".
                  "User Email: $visitor_email.\n".
                      "User Message: $message.\n";

$to = "fakeyeg866@prekab.net";
$headers = "From: $email_from\r\n";
$headers .= "Reply-To: $visitors_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");

?>