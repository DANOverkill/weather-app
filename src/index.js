//Imports
import "./style.css";
import { drawDisplay } from "./drawDisplay.js";
import { weatherFetch } from "./weatherFetch.js";
import { geoLoc } from "./util/geoLoc.js";
import { cityName } from "./util/geoApifi.js";

console.log("Webpack template running!");

//DOM Cache
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchBar");
const unitswitch = document.querySelector("#unit");
const geoLocSwitch = document.querySelector("#geoLoc");

(async () => {
  if (searchInput.value === "") {
    return;
  } else {
    const weatherData = await weatherFetch("metric", searchInput.value);
    let unit = "metric";
    if (unitswitch.checked) {
      unit = "us";
    }
    drawDisplay(weatherData, unit);
  }
})();

//Event Listeners
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  let unit = "metric";
  if (unitswitch.checked) {
    unit = "us";
  }

  console.log(unit);
  geoLocSwitch.checked = false;
  const weatherData = await weatherFetch(unit, searchInput.value);
  console.log(weatherData.resolvedAddress);
  drawDisplay(weatherData, unit);
});

unitswitch.addEventListener("change", async (event) => {
  event.preventDefault();
  let unit = "metric";
  if (event.currentTarget.checked) {
    unit = "us";
  }
  console.log(unit);
  const weatherData = await weatherFetch(unit, searchInput.value);
  console.log(weatherData.resolvedAddress);
  drawDisplay(weatherData, unit);
});

geoLocSwitch.addEventListener("change", async (event) => {
  let unit = "metric";
  if (unitswitch.currentTarget.checked) {
    unit = "us";
  }
  if (event.currentTarget.checked) {
    event.preventDefault();
    const myCurrentLoc = await geoLoc();
    const locationData = await cityName(
      myCurrentLoc.latitude,
      myCurrentLoc.longitude,
    );

    const myCurrentCityName = locationData.results[0].city;
    const myCurrentCountryName = locationData.results[0].country;

    console.log(myCurrentCityName, myCurrentCountryName);

    const myLocationSearchValue = `${myCurrentCityName} ${myCurrentCountryName}`;

    const weatherData = await weatherFetch("metric", myLocationSearchValue);
    searchInput.value = myLocationSearchValue;
    drawDisplay(weatherData, unit);
  } else {
    const weatherData = await weatherFetch("metric", searchInput.value);
    drawDisplay(weatherData, unit);
  }
});
