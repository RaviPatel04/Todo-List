<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $description = $_POST['description'];
    $priority = $_POST['priority'];
<<<<<<< HEAD
    $dueDate = $_POST['dueDate'];

    $sql = "UPDATE todos SET name='$name', description='$description', priority='$priority', dueDate='$dueDate' WHERE id=$id";
=======

    $sql = "UPDATE todos SET name='$name', description='$description', priority='$priority' WHERE id=$id";
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327

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
<<<<<<< HEAD





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
=======
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
