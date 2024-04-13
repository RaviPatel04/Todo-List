<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $description = $_POST["text"];
    $priority = $_POST["priority"];
    $dueDate = $_POST["dueDate"];

    $sql = "INSERT INTO todos (name, description, priority, dueDate) VALUES ('$name', '$description', '$priority', '$dueDate')";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>