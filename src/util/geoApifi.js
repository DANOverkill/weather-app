const cityName = async (latitude, longitude) => {
  try {
    const locationRequest = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=1ec84738d1364e5d88b5fd8d99176e78`,
    );
    const currentCity = await locationRequest.json();

    console.log(currentCity);

    return currentCity;
  } catch (error) {
    console.log(error);
  }
};

export { cityName };
