const drawDisplay = async (data, unit) => {
  // DOM Cache for main display container
  const mainContainer = document.querySelector("#mainContainer");

  // switch for Unit Display
  const chosenUnit = (unit) => {
    if (unit === "metric") {
      return "°C";
    } else {
      return "°F";
    }
  };

  const unitSymbol = chosenUnit(unit);

  const loadIcon = async (name) => {
    try {
      const icon = await import(`./assets/icons/3rd Set - Color/${name}.svg`);
      console.log(icon.days);
      return icon.default;
    } catch (error) {
      console.warn(`Icon "${name}" not found, using fallback.`);
      console.log(error);
      return "";
    }
  };

  // Update UI
  mainContainer.innerHTML = `
        <div id="mainContainer">
      <!-- main section where current temp is displaied -->
      <div class="display-box" id="currentTemp">
        <div id="location">${data.resolvedAddress}</div>
        <div id="Temp">${data.currentConditions.temp}</div>
        <div id="tempUnit">${unitSymbol}</div>
        <div id="weatherIcon-container">
          <img src="${await loadIcon(data.days[0].icon)}" id="weatherIcon" class="icons" width="100" height="100"/>
        </div>
        <div id="windSpeed">Wind Speed: ${data.currentConditions.windspeed}</div>
        <div id="humidity">Humidity: ${data.currentConditions.humidity}</div>
        <div id="uvIndex">UV: ${data.currentConditions.uvindex}</div>
      </div>
      <!-- extra boxes for future hourly forcast -->
      <div class="display-box" id="nextHoursTemperaturs">
        <div class="nextHourBox" id="nextHour-01">
          <div id="Temp">--</div>
          <div id="weatherIcon-container">
            <img src="#" id="weatherIcon" class="icons" />
          </div>
        </div>
        <div class="nextHourBox" id="nextHour-02">
          <div id="Temp">--</div>
          <div id="weatherIcon-container">
            <img src="#" id="weatherIcon" class="icons" />
          </div>
        </div>
        <div class="nextHourBox" id="nextHour-03">
          <div id="Temp">--</div>
          <div id="weatherIcon-container">
            <img src="#" id="weatherIcon" class="icons" />
          </div>
        </div>
        <div class="nextHourBox" id="nextHour-04">
          <div id="Temp">--</div>
          <div id="weatherIcon-container">
            <img src="#" id="weatherIcon" class="icons" />
          </div>
        </div>
        <div class="nextHourBox" id="nextHour-05">
          <div id="Temp">--</div>
          <div id="weatherIcon-container">
            <img src="#" id="weatherIcon" class="icons" />
          </div>
        </div>
      </div>
      <!-- extra boxes for future daily forcast   -->
      <div class="display-box" id="nextDayTemperatures">
        <div class="nextDayBox" id="nextDay-01">
          <div id="weatherIcon-container">
            <img src="${await loadIcon(data.days[1].icon)}" id="weatherIcon" class="icons" width="45" height="45"/>
          </div>
          <div id="Temp">${data.days[1].tempmin}/${data.days[1].tempmax}</div>
        </div>
        <div class="nextDayBox" id="nextDay-02">
          <div id="weatherIcon-container">
            <img src="${await loadIcon(data.days[2].icon)}" id="weatherIcon" class="icons" width="45" height="45"/>
          </div>
          <div id="Temp">${data.days[2].tempmin}/${data.days[2].tempmax}</div>
        </div>
        <div class="nextDayBox" id="nextDay-03">
          <div id="weatherIcon-container">
            <img src="${await loadIcon(data.days[3].icon)}" id="weatherIcon" class="icons" width="45" height="45"/>
          <div id="Temp">${data.days[3].tempmin}/${data.days[3].tempmax}</div>
          </div>
        </div>
      </div>
        `;
};

export { drawDisplay };
