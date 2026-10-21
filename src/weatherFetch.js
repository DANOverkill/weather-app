async function weatherFetch(query) {
  if (!query) {
    try {
      const response = await fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=metric&key=PY8BDEZ4HAEL4Z2PGYM8QDU9Y",
      );
      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const params = new URLSearchParams({
        location: query,
        unit: "metric",
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
    } catch (error) {
      console.log(error);
    }
  }
}

export { weatherFetch };
