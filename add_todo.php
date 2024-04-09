<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $description = $_POST["text"];
    $priority = $_POST["priority"];

    $sql = "INSERT INTO todos (name, description, priority) VALUES ('$name', '$description', '$priority')";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
