# DANOverkill Weather App

A weather application built as part of [The Odin Project](https://www.theodinproject.com/) curriculum, focusing on asynchronous JavaScript and working with APIs.

**Live Demo:** [DANOverkill Weather App](https://danoverkill.github.io/weather-app/)

### APIs Used

- **Visual Crossing Weather API** — Retrieves weather data and forecasts.
- **Browser Geolocation API** — Allows users to request their current location.
- **Geoapify API** — Converts geographic coordinates into a city and country through reverse geocoding.

## Features

- Search for weather by location.
- Switch between Celsius (°C) and Fahrenheit (°F).
- Enable or disable geolocation.
- View detailed current weather conditions.
- View the forecast for the next five hours.
- View the forecast for the next three days.

## Setup

Clone the repository:

```bash
git clone https://github.com/DANOverkill/weather-app.git
cd weather-app
npm install
```

### Development

Start the development server and open the app in your browser:

```bash
npm run start
```

### Build

Create an optimized production build:

```bash
npm run build
```

Create a development-mode build without starting the development server:

```bash
npm run dev
```

### Linting and Formatting

Check the project for JavaScript issues with ESLint:

```bash
npm run lint
```

Format the project files with Prettier:

```bash
npm run format
```

## Project Structure

```text
src/
├── assets/
│   └── icons/
├── util/
│   ├── geoApifi.js
│   ├── geoLoc.js
│   └── searchParameters.js
├── drawDisplay.js
├── index.js
├── style.css
├── template.html
└── weatherFetch.js
```

## Known Issues and Future Improvements

- **Geolocation response time:** Reverse geocoding can take a little while to resolve in some circumstances. Adding a loading indicator while the location is being processed would improve the user experience.
