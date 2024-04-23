<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Server-side password validation
    $passwordRegex = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/';
    if (!preg_match($passwordRegex, $password)) {
        echo json_encode(['error' => 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.']);
        exit;
    }

    // Check if username already exists
    $sql_check = "SELECT * FROM users WHERE username='$username'";
    $result_check = $conn->query($sql_check);
    if ($result_check->num_rows > 0) {
        echo json_encode(['error' => 'You have already registered!!']);
        exit;
    }

    // Insert new user with password
    $sql_insert = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    if ($conn->query($sql_insert) === TRUE) {
        session_start();
        $_SESSION['username'] = $username;
        echo json_encode(['redirect' => 'index.html']);
    } else {
        echo json_encode(['error' => 'Error registering user']);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}

$conn->close();
?>