<?php
require "db.php";
$data = $_POST;

if(isset($data['do_login']))
{
	$errors = array();
	$user = R::findOne('users', 'login = ?', array($data['login']));
	if ($user) 
	{	
		if(password_verify($data['password'], $user->password))
		{
			$_SESSION['logged_user'] = $user;
			echo '<h1 style="color:green; text-align:center;">YAY</h1>';
		} else 
		{
			$errors[] = 'Incorrect password';
		}

	} else 
	{
		$errors[] = 'Login not found';
	}
	if(!(empty($errors)))
	{
		echo '<h1 style="color:red; text-align:center;">'.array_shift($errors).'</h1>';
	}
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Учим пихашпэ</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
</head>
<body class="bg-dark">
<script type="text/javascript" src="js/jquery-2.0.0.min.js"></script>
<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
<form action="/login.php" method="POST">
	<p class="text-light text-center">Login</p>
	<input class="form-control" type="text" name="login" value="<?php echo @$data['login'];?>"/>
	<p class="text-light text-center">Password</p>
	<input class="form-control" type="password" name="password" value="<?php echo @$data['password'];?>"/>
	<p class="d-flex justify-content-center"> 
		<button type="submit" class="btn btn-primary mt-3 mr-3" name="do_login">Submit</button>
		<a href="/index.php" class="btn btn-danger mt-3 ml-3"> Go back </a>
	</p>
</form>
</body>
</html>

