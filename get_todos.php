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
