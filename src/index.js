//Imports
import "./style.css";
import { weatherFetch } from "./weatherFetch.js";

console.log("Webpack template running!");

//DOM Cache
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchBar");

weatherFetch();

//Event Listeners
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  weatherFetch(searchInput.value);
});
