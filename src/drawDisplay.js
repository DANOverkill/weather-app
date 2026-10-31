import pumpkin from "./assets/decorations/pumpkin.png";

const drawDisplay = async (data, unit) => {
  // DOM Cache for main display container
  const mainContainer = document.querySelector("#mainContainer");

  // switch for Unit Display
  const chosenTemUnit = (unit) => {
    if (unit === "metric") {
      return "°C";
    } else {
      return "°F";
    }
  };

  const tempUnitSymbol = chosenTemUnit(unit);
  const speedUnitSymbol = tempUnitSymbol === "°C" ? "km/h" : "m/h";

  const loadIcon = async (name) => {
    try {
      const icon = await import(`./assets/icons/3rd Set - Color/${name}.svg`);
      return icon.default;
    } catch (error) {
      console.warn(`Icon "${name}" not found, using fallback.`);
      console.log(error);
      return "";
    }
  };

  const dayName = (i) => {
    const date = new Date(data.days[i].datetimeEpoch * 1000);

    const dayName = date.toLocaleDateString("en-CA", {
      weekday: "short",
      timeZone: data.timezone,
    });
    return dayName;
  };

  const drawHourForecast = async (data) => {
    let currentHour = Number(
      new Date().toLocaleString("en-US", {
        timeZone: data.timezone,
        hour: "2-digit",
        hour12: false,
      }),
    );

    let nextFiveHours = [];

    for (let i = 1; i <= 5; i++) {
      if (currentHour + i <= 23) {
        nextFiveHours.push({ hour: currentHour + i, day: 0 });
      } else {
        nextFiveHours.push({ hour: (currentHour + i) % 24, day: 1 });
      }
    }

    const htmlElements = await Promise.all(
      nextFiveHours.map(async (forcastHour) => {
        let htmlElement = `<div class="nextHourBox" id="nextHour-${forcastHour.hour}">
            <div id="hours">hr: ${forcastHour.hour}:00</div>
            <div id="weatherIcon-container">
              <img src="${await loadIcon(data.days[forcastHour.day].hours[forcastHour.hour].icon)}" id="weatherIcon" class="icons" width="45" height="45"/>
            </div>
            <div id="Temp">${data.days[forcastHour.day].hours[forcastHour.hour].temp} ${tempUnitSymbol}</div>
          </div>`;
        return htmlElement;
      }),
    );
    return htmlElements.join("");
  };

  // Update UI
  mainContainer.innerHTML = `
      <!-- main section where current temp is displaied -->
      <div class="display-box" id="currentTemp">
        <div id="location">${data.resolvedAddress}</div>
        <div id="Temp">Temp: ${data.currentConditions.temp} ${tempUnitSymbol}</div>
        <div id="Feels Like">Feels Like: ${data.currentConditions.feelslike} ${tempUnitSymbol}</div>
        <div id="weatherIcon-container">
          <img src="${await loadIcon(data.currentConditions.icon)}" id="weatherIcon" class="icons" width="100" height="100"/>
        </div>
        <div id="windSpeed">Wind Speed: ${data.currentConditions.windspeed} ${speedUnitSymbol}</div>
        <div id="humidity">Humidity: ${data.currentConditions.humidity}</div>
        <div id="uvIndex">UV: ${data.currentConditions.uvindex}</div>
        <img src=${pumpkin} class="pumpkinDecoration" alt="" />
      </div>
      <!-- extra boxes for future hourly forcast -->
      <div class="display-box" id="nextHoursTemperaturs">
        ${await drawHourForecast(data)}
      </div>
      <!-- extra boxes for future daily forcast   -->
      <div class="display-box" id="nextDayTemperatures">
        <div class="nextDayBox" id="nextDay-01">
          <div id="dayName">${dayName(1)}</div>
          <div id="weatherIcon-container">
            <img src="${await loadIcon(data.days[1].icon)}" id="weatherIcon" class="icons" width="45" height="45"/>
          </div>
          <div id="Temp">${data.days[1].tempmin}/${data.days[1].tempmax} ${tempUnitSymbol}</div>
        </div>
        <div class="nextDayBox" id="nextDay-02">
          <div id="dayName">${dayName(2)}</div>
          <div id="weatherIcon-container">
            <img src="${await loadIcon(data.days[2].icon)}" id="weatherIcon" class="icons" width="45" height="45"/>
          </div>
          <div id="Temp">${data.days[2].tempmin}/${data.days[2].tempmax} ${tempUnitSymbol}</div>
        </div>
        <div class="nextDayBox" id="nextDay-03">
          <div id="dayName">${dayName(3)}</div>
          <div id="weatherIcon-container">
            <img src="${await loadIcon(data.days[3].icon)}" id="weatherIcon" class="icons" width="45" height="45"/>
          <div id="Temp">${data.days[3].tempmin}/${data.days[3].tempmax} ${tempUnitSymbol}</div>
          </div>
        </div>
        `;
};

export { drawDisplay };
