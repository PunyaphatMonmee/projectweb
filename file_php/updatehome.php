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
$floor = $_POST['floor'];
$Bedroom = $_POST['Bedroom'];
$toilet= $_POST['toilet'];
$car= $_POST['car'];
$land= $_POST['land'];
$price= $_POST['price'];
$equipment= $_POST['equipment'];
$numberhome= $_POST['numberhome'];
$phone= $_POST['phone'];
$status = $_POST['status'];
$line= $_POST['line'];
$email= $_POST['email'];
$contract= $_POST['contract'];
$Advice= $_POST['Advice'];
$Pic1 = $_POST['Pic1'];
$Pic2 = $_POST['Pic2'];
$Pic3 = $_POST['Pic3'];
$sql = "UPDATE `censiri` SET `class`= $floor,`Bedroom`= $Bedroom,`toilet`=$toilet,`car`=$car,`land`='$land',`price`=$price,`equipment`='$equipment',`numberhome`='$numberhome',`phone`=$phone,`line`='$line',`email`='$email',`contract`=$contract,`Advice`='$Advice',`status`='$status',`image1`='$Pic1',`image2`='$Pic2',`image3`='$Pic3' WHERE `id` = $id ";
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