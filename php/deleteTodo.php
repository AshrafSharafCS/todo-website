<?php
session_start();

include('connection.php');

$todo_id= $_POST['todo-id'];


$query = $mysqli->prepare('delete from lists where id = ?;');
$query->bind_param('i',  $todo_id);
if ($query->execute()) {
    $response['status'] = true;
} else {
    $response['status'] = false;
}


echo json_encode($response);
