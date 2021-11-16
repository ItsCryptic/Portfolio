<?php
 include('config.yml');
 
?>
<!DOCTYPE html>
<head>
    <title>Kevin D - Login</title>
    <link rel="stylesheet" href="css/css.css">
    <link rel="icon" type="image/png" href="../img/profilepicture.png"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
</head>

<body>
    <img id="logo" src="../img/Kevin D (White).png" draggable="false"></img>
    <br />
    <br />
    <div id="login">
        <form method="POST">
            <div id="form-container">
                <label for="uname"><i class="fas fa-user"></i> <b>Username: </b></label>
                <input id="username" type="text" placeholder="Enter username" name="uname" required>
                <br />
                <label for="pw"><i class="fas fa-lock"></i> <b>Password: </b></label>
                <input id="password" type="password" placeholder="Enter password" name="psw" required>
                <br />
                <input type="button" value="Login" id="submit" onclick="validate()"/>
            </div>
        </form>
    </div>
</body>
<script src="js/login.js"></script>