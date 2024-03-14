<?php
session_start();

include('connection.php');


$user_id=$_SESSION['user_id'];
$query = $mysqli->prepare('select description from lists where `user-id`=?');
$query->bind_param('i', $user_id);
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = 'no todos found';
} else {
    $todos = []; 
    $query->bind_result($description);
    while ($query->fetch()) {
        $todo = [
            'description' => $description,
        ];
        $todos[] = $todo;
    }
    $response['status'] = 'success';
    $response['todos'] = $todos;
} 
echo json_encode($response);

