<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $description = $_POST["text"];
    $priority = $_POST["priority"];
<<<<<<< HEAD
    $dueDate = $_POST["dueDate"];

    $sql = "INSERT INTO todos (name, description, priority, dueDate) VALUES ('$name', '$description', '$priority', '$dueDate')";
=======

    $sql = "INSERT INTO todos (name, description, priority) VALUES ('$name', '$description', '$priority')";
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327

    if ($conn->query($sql) === TRUE) {
        header("Location: index.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
<<<<<<< HEAD
?>






<?php
// include 'db.php';

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = $_POST["name"];
//     $description = $_POST["text"];
//     $priority = $_POST["priority"];

//     $sql = "INSERT INTO todos (name, description, priority) VALUES ('$name', '$description', '$priority')";

//     if ($conn->query($sql) === TRUE) {
//         header("Location: index.html");
//     } else {
//         echo "Error: " . $sql . "<br>" . $conn->error;
//     }
// }

// $conn->close();
=======
>>>>>>> 97679468aacb1fa16e43c128db2432430d456327
?>