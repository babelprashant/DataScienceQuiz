<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "quizportfolio");

$result = $conn->query("SELECT EMAIL_ID FROM QuizPortfolio.Quiz_Info;");
if($result->num_rows > 0){
    $data=array();
    while($row = $result->fetch_assoc()) {
    $data[] = $row;
    echo json_encode($data);
    }
}else{
    echo "0";
}
$conn->close();


?>