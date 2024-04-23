<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $description = $_POST['description'];
    $priority = $_POST['priority'];
    $dueDate = $_POST['dueDate'];  // Corrected dueDate to dueDate

    $sql = "UPDATE todos SET name='$name', description='$description', priority='$priority', due_date='$dueDate' WHERE id=$id";  // Corrected due_Date to due_date

    if (mysqli_query($conn, $sql)) {
        header('Location: todo.html');
    } else {
        echo "Error updating todo: " . mysqli_error($conn);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}

mysqli_close($conn);
?>