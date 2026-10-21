async function weatherFetch(query) {
  if (!query) {
    try {
      const response = await fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=PY8BDEZ4HAEL4Z2PGYM8QDU9Y",
      );
      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }
  //   } else {
  //     try {
  //       const searchParameters = new URLSearchParams({
  //         q: query,
  //         rating: "r",
  //       });
  //       console.log(searchParameters.toString());

  //       const response = await fetch(
  //         `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchParameters}?unitGroup=us&key=PY8BDEZ4HAEL4Z2PGYM8QDU9Y`,
  //       );
  //       const responseData = await response.json();

  //       if (responseData.data.length === 0) {
  //       } else {
  //         const arrayLength = responseData;
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
}

export { weatherFetch };
