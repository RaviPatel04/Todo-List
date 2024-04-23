<?php
session_start();
include 'db.php';

if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];

    $sql = "SELECT *, DATE_FORMAT(due_date, '%Y-%m-%d') as formatted_due_date, DATE_FORMAT(completed_date, '%Y-%m-%d') as formatted_completed_date FROM completed_todos WHERE user_id = (SELECT id FROM users WHERE username='$username')";
    $result = $conn->query($sql);

    $completedTodos = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $completedTodos[] = $row;
        }
    }

    echo json_encode($completedTodos);
} else {
    echo json_encode(['error' => 'User not authenticated']);
}

$conn->close();
?>