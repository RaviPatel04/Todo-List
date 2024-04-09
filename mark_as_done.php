<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $description = $_POST["description"];
    $priority = $_POST["priority"];

    $sql = "INSERT INTO completed_todos (name, description, priority) VALUES ('$name', '$description', '$priority')";
    $conn->query($sql);

    $sql = "DELETE FROM todos WHERE id = $id";
    if ($conn->query($sql) === TRUE) {
        header("Location: todo.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

