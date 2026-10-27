// const geoLoc = async () => {
//   if (!navigator.geolocation) {
//     return alert("no geolocation available in your browser");
//   } else {
//     const currentPos = await navigator.geolocation.getCurrentPosition(
//       await (function (position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         return { latitude, longitude };
//       },
//       function (error) {
//         return error;
//       }),
//     );
//     console.log(`This valie is regarding geoLoc: ${currentPos}`);
//     return currentPos;
//   }
// };

const geoLoc = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not available in your browser"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        resolve({ latitude, longitude });
      },
      (error) => {
        console.error("Geolocation failed!");
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
        console.error("Secure context:", window.isSecureContext);
        reject(
          new Error(
            `Geolocation failed (code ${error.code}): ${error.message}`,
          ),
        );
      },
    );
  });
};

export { geoLoc };
