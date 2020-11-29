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

$floor = $_POST['floor'];
$Bedroom = $_POST['Bedroom'];
$toilet= $_POST['toilet'];
$car= $_POST['car'];
$land= $_POST['land'];
$price= $_POST['price'];
$equipment= $_POST['equipment'];
$numberhome= $_POST['numberhome'];
$phone= $_POST['phone'];
$status= $_POST['status'];
$line= $_POST['line'];
$email= $_POST['email'];
$contract= $_POST['contract'];
$Advice= $_POST['Advice'];
$Pic1 = $_POST['Pic1'];
$Pic2 = $_POST['Pic2'];
$Pic3 = $_POST['Pic3'];
$sql = "INSERT INTO `censiri` (`id`, `class`, `Bedroom`, `toilet`, `car`, `land`, `price`, `equipment`, `numberhome`, `phone`, `line`, `email`, `contract`, `Advice`, `status`, `image1`, `image2`, `image3`) VALUES (NULL, '$floor', '$Bedroom', '$toilet', '$car', '$land', '$price', '$equipment', '$numberhome', '$phone', '$line', '$email', '$contract', '$Advice', '$status', '$Pic1', '$Pic2', '$Pic3');";

// $userData = mysqli_query($conn,"select * from tbl_sample");
// $response = array();

// while($row = mysqli_fetch_assoc($userData)){

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