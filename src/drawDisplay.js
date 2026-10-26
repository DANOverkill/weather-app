const drawDisplay = async (data) => {
  const mainContainer = document.querySelector("#mainContainer");
  const currentConditionsIcon = (
    await import(
      `./assets/icons/3rd Set - Color/${data.currentConditions.icon}.svg`
    )
  ).default;
  console.log(currentConditionsIcon);
  mainContainer.innerHTML = `
        <p>Location: ${data.resolvedAddress}</p><b>
        <p>Temperatur: ${data.currentConditions.temp}</p>
        <p>Current Conditions: ${data.description}</p><b>
        <img src="${currentConditionsIcon}" width="100" height="100">
        `;
};

export { drawDisplay };
