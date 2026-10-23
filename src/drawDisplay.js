const drawDisplay = (data) => {
  const mainContainer = document.querySelector("#mainContainer");
  mainContainer.innerHTML = `
        <p>Location: ${data.resolvedAddress}</p><b>
        <p>Temperatur: ${data.currentConditions.temp}</p>
        <p>Current Conditions: ${data.description}</p><b>`;
};

export { drawDisplay };
