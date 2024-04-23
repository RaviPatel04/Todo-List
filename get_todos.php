<?php
session_start();
include 'db.php';

if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];

    $sql = "SELECT * FROM todos WHERE user_id = (SELECT id FROM users WHERE username='$username')";
    $result = $conn->query($sql);

    $todos = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $todos[] = $row;
        }
    }

    echo json_encode($todos);
} else {
    echo json_encode(['error' => 'User not authenticated']);
}

$conn->close();
?>