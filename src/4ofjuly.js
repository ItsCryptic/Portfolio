var date = new Date();
var month = date.getMonth();
var day = date.getDay();
var minutes= date.getMinutes();
var seconds = date.getSeconds();
var daynumber = date.getDate();

if (month == 6 && daynumber == 4) {
    document.getElementById("container").style.background = 'linear-gradient(#B31942, white, #0A3161)';
    document.getElementById("heading1").innerHTML = "This is where you can find my current & previous work!<br />Happy 4th of July! This will be active for the rest of the day!";
}