<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "quiz_system"); // adjust DB name

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['register_id']) || !isset($data['score']) || !isset($data['total_questions'])) {
  echo "Missing required data.";
  exit;
}

$register_id = $conn->real_escape_string($data['register_id']);
$score = (int)$data['score'];
$total_questions = (int)$data['total_questions'];
$created_at = date('Y-m-d H:i:s');

// Insert into results table
$sql = "INSERT INTO quiz_results (register_id, score, total_questions, created_at)
        VALUES ('$register_id', '$score', '$total_questions', '$created_at')";

if ($conn->query($sql) === TRUE) {
  echo "Result saved successfully.";
} else {
  echo "Error: " . $conn->error;
}

$conn->close();
?>
