<?php
session_start();

include('connection.php');

$todo_id= $_POST['todo-id'];
$description=$_POST['description'];
$query = $mysqli->prepare('update lists set description = ? where id = ?;');
$query->bind_param('si', $description, $todo_id);
if ($query->execute()) {
    $response['status'] = true;
} else {
    $response['status'] = false;
}


echo json_encode($response);
