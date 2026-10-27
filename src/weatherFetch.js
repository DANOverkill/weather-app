async function weatherFetch(unit, query) {
  if (!query) {
    const params = new URLSearchParams({
      location: "Ottawa Canada",
      unit: unit,
      key: "PY8BDEZ4HAEL4Z2PGYM8QDU9Y",
    });
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${params.get("location")}?unitGroup=${params.get("unit")}&key=${params.get("key")}`,
      );
      const responseData = await response.json();

      console.log(responseData);
      console.log(responseData.currentConditions.icon);
      return responseData;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const params = new URLSearchParams({
        location: query,
        unit: unit,
        key: "PY8BDEZ4HAEL4Z2PGYM8QDU9Y",
      });
      console.log(params.toString());
      console.log(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${params.get("location")}?unitGroup=${params.get("unit")}&key=${params.get("key")}`,
      );

      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${params.get("location")}?unitGroup=${params.get("unit")}&key=${params.get("key")}`,
      );

      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData.currentConditions.icon);
      return responseData;
    } catch (error) {
      console.log(error);
    }
  }
}

export { weatherFetch };
