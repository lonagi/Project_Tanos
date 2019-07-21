<?php
require "db.php";
$data = $_POST;
if(isset($data['do_signup']))
{
	$errors = array();
	if(trim($data['login']) == '')
	{
		$errors[]  = 'Enter login';
	}
	if(trim($data['email']) == '')
	{
		$errors[]  = 'Enter email';
	}
	if($data['password'] == '')
	{
		$errors[]  = 'Enter password';
	}
	if($data['password_2'] != $data['password'])
	{
		$errors[]  = 'Passwords dont match';
	}
	
	if(R::count('users', "login = ?", array($data['login'])) > 0)
	{
		$errors[] = 'Login already exists';
	}
	if(R::count('users', "email = ?", array($data['email'])) > 0) 
	{
		$errors[] = 'Email already exists';
	}
	if(empty($errors))
	{
		$user = R::dispense('users');
		$user->login = $data['login'];
		$user->email = $data['email'];
		$user->password = password_hash($data['password'], PASSWORD_DEFAULT);
		echo '<h1 style="color:green; text-align:center;">YAY</h1>';
		R::store($user);
	} else 
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
<form action="/signup.php" method="POST">
	<p>
		<p class="text-light text-center">Username</p>
		<input class="form-control" type="text" name="login" value="<?php echo @$data['login'] ?>"/>
	</p>
	<p>
		<p class="text-light text-center">Email</p>
		<input class="form-control" type="email" name="email" value = "<?php echo @$data['email'] ?>"/>
	</p>
	<p>
		<p class="text-light text-center">Password</p>
		<input class="form-control" type="password" name="password" value = "<?php echo @$data['password'] ?>"/>
	</p>
	<p>
		<p class="text-light text-center">Enter Password Again</p>
		<input class = "form-control" type="password" name="password_2" value = "<?php echo @$data['password_2'] ?>"/>
	</p>
	<p class="d-flex justify-content-center">
		<button type="submit" name="do_signup" class="btn btn-primary mt-3 mr-3"> Submit </button>
		<a href="/index.php" class="btn btn-danger mt-3 ml-3"> Go back </a>
	</p>
</form>
</body>
</html>

