<?php
include('cors.php');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "projecthomecensiri";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$id = $_POST['id'];

$sql = mysqli_query($conn,"DELETE FROM `censiri` WHERE `id` = $id");
//    $response[] = $row;
// }

// echo json_encode($response);

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>