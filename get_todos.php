<?php
include 'db.php';

$sql = "SELECT * FROM todos";
$result = $conn->query($sql);

$todos = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $todos[] = $row;
    }
}

echo json_encode($todos);

$conn->close();
?>
<<<<<<< HEAD






<?php
// include 'db.php';

// $sql = "SELECT * FROM todos";
// $result = $conn->query($sql);

// $todos = [];

// if ($result->num_rows > 0) {
//     while($row = $result->fetch_assoc()) {
//         $todos[] = $row;
//     }
// }

// echo json_encode($todos);

// $conn->close();
?>
=======
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
