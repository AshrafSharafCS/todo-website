<?php
include('connection.php');

$email_username = $_POST['email-username'];
$password = $_POST['password'];

$query = $mysqli->prepare('select username,email,password
from users
where email=? or username=?');
$query->bind_param('ss', $email_username ,$email_username);
$query->execute();
$query->store_result();
$query->bind_result($username, $email, $hashed_password);
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = "logged in";
    } else {
        $response['status'] = "incorrect credentials";
    }
}
echo json_encode($response);
