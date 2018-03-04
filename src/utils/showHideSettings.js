export const showHideSettings = () => {
  const settingsElement = document.getElementById("settings"),
    modalElement = document.getElementById("modal");

  if (settingsElement.classList.contains("show")) {
    settingsElement.classList.remove("show");
    modalElement.classList.remove("show");
  } else {
    settingsElement.classList.add("show");
    modalElement.classList.add("show");
  }
};
