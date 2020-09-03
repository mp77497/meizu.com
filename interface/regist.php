<?php
    include('./conn.php');
    $registObj = file_get_contents('php://input');
    $data =  json_decode($registObj);
    
   


    $username = $data->username;
    $password = $data->password;


    $sql = "insert into users(username,password) values ('$username','$password')";
    
    $res = $mysqli->query($sql);
    $mysqli->close();
    if($res) {
        echo '{"isRegist":true,"msg":"注册成功"}';
    } else {
        echo '{"isRegist":false,"msg":"注册失败"}';
    }
?>