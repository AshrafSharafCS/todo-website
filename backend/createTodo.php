<?php
session_start();

include('connection.php');

$description = $_POST['description'];

$user_id=$_SESSION['user_id'];
$query = $mysqli->prepare('insert into lists (description,`user-id`) values (?,?)');
$query->bind_param('si',  $description, $user_id);
if ($query->execute()) {
    $response['status'] = true;
} else {
    $response['status'] = false;
}

echo json_encode($response);



