<?php
session_start();
include 'db.php';

if (isset($_GET['id']) && isset($_SESSION['username'])) {
    $id = $_GET['id'];
    $username = $_SESSION['username'];

    $sql = "SELECT * FROM todos WHERE id = $id AND user_id = (SELECT id FROM users WHERE username='$username')";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row);
    } else {
        echo json_encode(['error' => 'Todo not found']);
    }
} else {
    echo json_encode(['error' => 'ID parameter is missing or user not authenticated']);
}

mysqli_close($conn);
?>