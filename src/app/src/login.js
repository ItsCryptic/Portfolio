function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Kevin" && password == "Kevinjd1") {
        window.location = "dashboard/";
        return false;
    }else {
        alert("Invalid username or password!");
        console.log("Invalid username or password!");
    }
}