<?php
    $email_to = "matt.wuring@gmail.com";
    $subject = "portfolio website contact";

    if (
        isset($_POST['name']) &&
        isset($_POST['email']) &&
        isset($_POST['message'])
    ) {
        $name = $_POST['name']; 
        $email = $_POST['email']; 
        $message = $_POST['message']; 
    }

    $message = $message . " " . $email;

    $headers = 'From: ' . $name . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    mail($email_to, $subject, $message);

    header('Location: index.html#contact');
?>