<?php
session_start();

include('connection.php');

$email_username = $_POST['email-username'];
$password = $_POST['password'];

$query = $mysqli->prepare('select id,username,email,password,score
from users
where email=? or username=?');
$query->bind_param('ss',  $email_username, $email_username);
$query->execute();
$query->store_result();
$query->bind_result($id,$username, $email, $hashed_password,$score);
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = "user not found";
    $response['isLogged']=false;
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = "logged in";
        $response['isLogged']=true;
        $_SESSION['user_id'] = $id;
        $_SESSION['user_score'] = $score;
    } else {
        $response['status'] = "incorrect credentials";
        $response['isLogged']=false;
    }
}
echo json_encode($response);
