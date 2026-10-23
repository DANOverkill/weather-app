//Imports
import "./style.css";
import { weatherFetch } from "./weatherFetch.js";

console.log("Webpack template running!");

//DOM Cache
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchBar");
const unitswitch = document.querySelector("#unit");

weatherFetch("metric");

//Event Listeners
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let unit = "metric";
  if (unitswitch.checked) {
    unit = "us";
  }
  event.preventDefault();
  console.log(unit);
  weatherFetch(unit, searchInput.value);
});

unitswitch.addEventListener("change", (event) => {
  event.preventDefault();
  let unit = "metric";
  if (event.currentTarget.checked) {
    unit = "us";
  }
  console.log(unit);
  weatherFetch(unit, searchInput.value);
});
