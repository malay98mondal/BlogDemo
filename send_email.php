<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "your-email@example.com";
  $subject = "New Student Enquiry";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  if (mail($to, $subject, $body)) {
    echo "Thank you for your enquiry. We will get back to you soon!";
  } else {
    echo "Oops! Something went wrong. Please try again later.";
  }
}
?>
