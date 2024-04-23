<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SESSION['username'])) {
    $name = $_POST["name"];
    $description = $_POST["text"];
    $priority = $_POST["priority"];
    $dueDate = $_POST["dueDate"];
    $username = $_SESSION['username'];

    $sql = "INSERT INTO todos (user_id, name, description, priority, due_date) VALUES ((SELECT id FROM users WHERE username='$username'), '$name', '$description', '$priority', '$dueDate')";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo json_encode(['error' => 'Invalid request method or user not authenticated']);
}

$conn->close();
?>