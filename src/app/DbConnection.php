<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "quizportfolio");

$result = $conn->query("SELECT * FROM QuizPortfolio.Quiz_Info;");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    $data[] = $rs
}
echo json_encode($data);
$conn->close();


?>