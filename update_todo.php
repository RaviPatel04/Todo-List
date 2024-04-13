<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $description = $_POST['description'];
    $priority = $_POST['priority'];
    $dueDate = $_POST['dueDate'];

    $sql = "UPDATE todos SET name='$name', description='$description', priority='$priority', dueDate='$dueDate' WHERE id=$id";

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





<?php
// include 'db.php';

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $id = $_POST['id'];
//     $name = $_POST['name'];
//     $description = $_POST['description'];
//     $priority = $_POST['priority'];

//     $sql = "UPDATE todos SET name='$name', description='$description', priority='$priority' WHERE id=$id";

//     if (mysqli_query($conn, $sql)) {
//         header('Location: todo.html');
//     } else {
//         echo "Error updating todo: " . mysqli_error($conn);
//     }
// } else {
//     echo json_encode(['error' => 'Invalid request method']);
// }

// mysqli_close($conn);
?>
