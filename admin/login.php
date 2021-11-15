<?php
$mysqli = new mysqli("HOST", "USERNAME", "PASSWORD", "DATABASE");

if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}

?>