<?php
include 'db.php';

$sql = "SELECT * FROM completed_todos";
$result = $conn->query($sql);

$completedTodos = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $completedTodos[] = $row;
    }
}

echo json_encode($completedTodos);

$conn->close();
?>