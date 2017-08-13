<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
	<script src="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.min.js"></script>
	<script src="login_js.js"></script>
</head>
<body>
	<h1>Login</h1>
	<p id="results"></p>

	<form action="login_ajax.php" method="post" id="login">
		<p id="emailP">
			<label for="email">Email Address:</label> 
			<input type="text" name="email" id="email" />
			<span class="errorMessage" id="emailError">Please enter your email address!</span>
		</p>
		<p id="passwordP">
			<label for="password">Password:</label>
			<input type="password" name="password" id="password" />
			<span class="errorMessage" id="passwordError">Please enter your password!</span>
		</p>
		<p><input type="submit" value="Login!" id="submit" /></p>

	</form>
</body>
</html>