<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SESSION['username'])) {
    $id = $_POST["id"];
    $username = $_SESSION['username'];

    // Retrieve todo details
    $sql_select = "SELECT * FROM todos WHERE id = $id AND user_id = (SELECT id FROM users WHERE username='$username')";
    $result = $conn->query($sql_select);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        $name = $row["name"];
        $description = $row["description"];
        $priority = $row["priority"];
        $dueDate = $row["due_date"];
        $completedDate = date("y-m-d"); 

        // Insert into completed_todos
        $sql_insert = "INSERT INTO completed_todos (user_id, name, description, priority, due_date, completed_date) VALUES ((SELECT id FROM users WHERE username='$username'), '$name', '$description', '$priority', '$dueDate', '$completedDate')";
        $conn->query($sql_insert);

        // Delete from todos
        $sql_delete = "DELETE FROM todos WHERE id = $id AND user_id = (SELECT id FROM users WHERE username='$username')";
        
        if ($conn->query($sql_delete) === TRUE) {
            header("Location: todo.html");
        } else {
            echo "Error: " . $sql_delete . "<br>" . $conn->error;
        }
    } else {
        echo json_encode(['error' => 'Todo not found']);
    }
} else {
    echo json_encode(['error' => 'Invalid request method or user not authenticated']);
}

$conn->close();
?>