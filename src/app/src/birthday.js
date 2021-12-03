/*var birthdayDate = new Date("June 21 2022").getTime();
var newDate = new Date();
var hour = newDate.getHours();
//I broke this in testing so I have to use 16 instead of 17 ;-;
var age = 16;
var minutes = newDate.getMinutes();
if (newDate = birthdayDate) {
  var age = age + 1;
}
document.getElementById("age").innerHTML = age;

var birthday = setInterval(function() {
    var now = new Date().getTime();
    var distance = date - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = "(in " + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s" + ")";
    if (distance < 0) {
        clearInterval(birthday);
        document.getElementById("countdown").innerHTML = "(It's my birthday! 🥳)";
      }
}, 1000);*/