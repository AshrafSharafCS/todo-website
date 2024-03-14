<?php
include ("connection.php");
 
 
$name = $_POST['name'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
 
$check_email_username = $mysqli->prepare('select email, username from users where email=? or username=?');
$check_email_username ->bind_param('ss', $email,$username);
$check_email_username ->execute();
$check_email_username ->store_result();
$email__username_exists = $check_email_username ->num_rows();

if ($email__username_exists == 0) {
    $hashed_password=password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(name,username,email,password) values(?,?,?,?);');
    $query->bind_param('ssss', $name, $username,$email,$hashed_password);
    $query->execute();
    $response['status'] = "success";
    $response['isSigned']=true;

} else {
    $response["status"] = "user already exists";
    $response['isSigned']=false;

}
echo json_encode($response);

?>