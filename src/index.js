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

(async () => {
  const weatherData = await weatherFetch("metric");
  drawDisplay(weatherData);
  const myCurrentLoc = await geoLoc();
  console.log(myCurrentLoc);
  console.log(
    (await cityName(myCurrentLoc.latitude, myCurrentLoc.longitude)).results[0]
      .city,
  );
})();

//Event Listeners
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  let unit = "metric";
  if (unitswitch.checked) {
    unit = "us";
  }
  event.preventDefault();
  console.log(unit);
  const weatherData = await weatherFetch(unit, searchInput.value);
  console.log(weatherData.resolvedAddress);
  drawDisplay(weatherData);
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
  drawDisplay(weatherData);
});
