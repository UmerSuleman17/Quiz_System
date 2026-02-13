<?php
include('function.php');
$obj= new quiz;
if (isset($_POST['submit'])) {
	$result=$obj->login($_POST['username'],$_POST['password']);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login - Quiz System</title>
  <link rel="stylesheet" type="text/css" href="style.css">

</head>
<body>
  <div class="form-container">
    <h2>Login</h2>
    <form action="" method="POST">
     <input type="text" name="username" placeholder="Username" required>
     <input type="password" name="password" placeholder="Password" required>
      <!-- <button type="submit" name="submit" class="btn">Login</button> -->
      <a type="submit" name="submit" class="btn btn-primary" href="start.php">Login</a><br>
      <a href="index.php" class="btn btn-warning">Register Now!</a>
    </form>
  </div>
  <script type="text/javascript">
    $_SESSION.setItem("register_id", "<?= $user['register_id']; ?>");

  </script>
</body>
</html>
