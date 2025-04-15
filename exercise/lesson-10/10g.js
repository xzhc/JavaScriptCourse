function clickButton(className) {
  const buttons = document.querySelectorAll(".toggle-button");

  const clickedButton = document.querySelector(`.${className}`);

  buttons.forEach((button) => {
    button.classList.remove("is-toggled");
  });

  if (!clickedButton.classList.contains("is-toggled")) {
    clickedButton.classList.add("is-toggled");
  }
}
