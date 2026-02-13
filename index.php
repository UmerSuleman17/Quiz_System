<?php
include('function.php');
$obj= new quiz;

if (isset($_POST['submit'])) {
   $obj->savedata($_POST['register_id'],$_POST['username'],$_POST['email'],$_POST['password']);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Register - Quiz System</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="form-container">
    <h2>Registeration Form</h2>
    <form action="index.php" method="POST">
      <input type="text" name="register_id" placeholder="Register ID" required>
      <input type="text" name="username" placeholder="Username" required>
      <input type="email" name="email" placeholder="Email" required>
      <input type="password" name="password" placeholder="Password" required>
      <!-- <button onclick="showPopup()" type="submit" name="submit" class="btn">Register</button> -->
      <a onclick="showPopup()" type="submit" name="submit" class="btn btn-primary" href="login.php">Register</a>
    </form>
  </div>
  <script type="text/javascript">
    function showPopup(){
      alert("Register Successfully!");
    }

    localStorage.setItem("register_id", "<?= $user['register_id']; ?>");

  </script>
</body>
</html>




