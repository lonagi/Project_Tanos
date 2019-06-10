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

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<?php
echo '<div class="jumbotron container mt-3">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">';
echo '<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>';
if($_SERVER["REMOTE_ADDR"] == "188.0.227.214"){
  echo '<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
  </div>';
};

echo '<footer class="bg-dark">
  <div class="container d-flex justify-content-center align-items-center">';
if(isset($_GET['variable'])){
//1 
$page = $_GET['variable']; 
//2

//кое-где в файле есть ошибка на уровне html. ну, раз хотел, ищи сама
if($page == "reg"){
  echo'<h1 class="text-light">Just me</h1>';
}
elseif($page == "main"){
  echo'<h1 class="text-light">'.date("d (l), m (F), Y").'</h1>';
};
}

else{
echo '</div></footer>';
}
?>
</body>
</html>