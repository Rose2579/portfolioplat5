let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", cargarCiudad);
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    cargarCiudad();
  }
});

function cargarCiudad() {
  let ciudad = input.value;
  if (ciudad.trim() === "") {
    alert("Por favor, ingresa el nombre de una ciudad.");
    return;
  }
  let apiKey = "fdd533266e28101881f610f2b8f1ebe1";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

  // getJSON
  $.getJSON(url, function (data) {
    document.querySelector(".container").style.visibility = "visible";
    document.querySelector("#ciudad").textContent = data.name;
    document.querySelector(
      "#temperatura"
    ).innerHTML = `${data.main.temp}<sup>°C</sup>`;
    let iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.querySelector("#wicon").src = iconUrl;
    document.querySelector("#descripcion").textContent =
      data.weather[0].description;
  }).fail(function () {
    alert("No se encontró información para la ciudad ingresada.");
  });

  input.value = "";
}
