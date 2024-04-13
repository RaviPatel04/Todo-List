<?php
include 'db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "SELECT * FROM todos WHERE id = $id";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row);
    } else {
        echo json_encode(['error' => 'Todo not found']);
    }
} else {
    echo json_encode(['error' => 'ID parameter is missing']);
}

mysqli_close($conn);
?>
<<<<<<< HEAD









<?php
// include 'db.php';

// if (isset($_GET['id'])) {
//     $id = $_GET['id'];

//     $sql = "SELECT * FROM todos WHERE id = $id";
//     $result = mysqli_query($conn, $sql);

//     if (mysqli_num_rows($result) > 0) {
//         $row = mysqli_fetch_assoc($result);
//         echo json_encode($row);
//     } else {
//         echo json_encode(['error' => 'Todo not found']);
//     }
// } else {
//     echo json_encode(['error' => 'ID parameter is missing']);
// }

// mysqli_close($conn);
?>
=======
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
