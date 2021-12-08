var dark = true;

function toggle() {
  dark = !dark; // To actually toggle the variable you need to invert the current value
  document.body.classList.toggle('dark-mode');
  changeTheme()
}

function changeTheme() {
  if (dark) {
    document.getElementById("logo").src="../src/img/Kevin D (Black).png";
  } else {
    document.getElementById("logo").src="../src/img/Kevin D (Black).png";
  }
}

changeTheme()