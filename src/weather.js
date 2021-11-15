//I just followed a tutorial to do this LOL
//API: https://openweathermap.org/
window.addEventListener('load', () => {
    let long;
    let lat;
    const api = "830fec9be0d4f3e29aa0cf5b8cf3ced6";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
  
        fetch(base)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            const { temp } = data.main;
            const { feels_like } = data.main;
  
            const fahrenheit = (temp * 9) / 5 + 32;
            const feels_likeC = (feels_like * 9) / 5 + 32;
            const accuracy = position.coords.accuracy;
            const frounded = Math.round(fahrenheit);
            const flrounded = Math.round(feels_likeC);

            let tempF = document.getElementById("tempF").innerHTML = frounded;
            let accuracyB = document.getElementById("accuracy").innerHTML = accuracy;
            let feels_likeB = document.getElementById("feels_like").innerHTML = flrounded;
          });
      });
    }
  });