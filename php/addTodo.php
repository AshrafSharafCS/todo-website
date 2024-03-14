<?php
session_start();

include('connection.php');

$description = $_POST['description'];

$user_id=$_SESSION['user_id'];
$query = $mysqli->prepare('insert into lists (description,`user-id`) values (?,?)');
$query->bind_param('si',  $description, $user_id);
$query->execute();

$response['status']=True;
echo json_encode($response);
