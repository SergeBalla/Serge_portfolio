<?php
$data = json_decode(file_get_contents("php://input"),true);

$name = $data['name'];
$email =$data['email'];
$subject = $data['subject'];
$msg = $data['msg']


$response = [
    'status' => 'success',
    'message' => 'Data received successfully',
];

header('Content-Type : application/json');
echo json_encode($response);
?>