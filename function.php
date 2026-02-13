<?php
include('connection.php');

class quiz extends system
{
    // Save registration data
    public function savedata($register_id, $username, $email, $password)
    {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT); // Secure password
        $sql = "INSERT INTO table_20 (`register_id`, `username`, `email`, `password`) 
                VALUES (:register_id, :username, :email, :password)";
        $query = $this->db->prepare($sql);
        $query->bindParam(':register_id', $register_id);
        $query->bindParam(':username', $username);
        $query->bindParam(':email', $email);
        $query->bindParam(':password', $hashed_password);

        if ($query->execute()) {
            return "Data saved successfully!";
        } else {
            return "Error saving data.";
        }
    }

    // Fetch all users
    public function getdata()
    {
        $sql = "SELECT * FROM table_20";
        $query = $this->db->prepare($sql);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    // Login
    public function login($username, $password)
    {
        $sql = "SELECT * FROM table_20 WHERE username = :username";
        $query = $this->db->prepare($sql);
        $query->bindParam(':username', $username);
        $query->execute();
        $user = $query->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            session_start();
            $_SESSION['login'] = $user['username'];
            header("Location: index.php");
            exit();
        } else {
            echo "Invalid username or password.";
        }
    }

    // ✅ Save Quiz Result
    public function saveResult($register_id, $score, $total_questions)
    {
        $percentage = ($total_questions > 0) ? ($score / $total_questions) * 100 : 0;

        $sql = "INSERT INTO quiz_results (register_id, score, total_questions, percentage)
                VALUES (:register_id, :score, :total_questions, :percentage)";
        
        $query = $this->db->prepare($sql);
        $query->bindParam(':register_id', $register_id);
        $query->bindParam(':score', $score);
        $query->bindParam(':total_questions', $total_questions);
        $query->bindParam(':percentage', $percentage);

        if ($query->execute()) {
            return "Result saved successfully!";
        } else {
            return "Failed to save result.";
        }
    }
}
?>
