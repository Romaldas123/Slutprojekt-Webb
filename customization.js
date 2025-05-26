document.addEventListener("DOMContentLoaded", () => {
  const optionButtons = document.querySelectorAll(".option-button");
  const colorOptions = document.querySelectorAll(".color-option");
  const mainTypeImage = document.getElementById("main-type-image");

  let selectedMainType = null;

  function updateImagePreview(value) {
    selectedMainType = value;
    switch (value) {
      case "Submariner":
        mainTypeImage.src = "Submarine-rolex.avif";
        break;
      case "Datejust":
        mainTypeImage.src = "Datejust-rolex.avif";
        break;
      case "Day-date":
        mainTypeImage.src = "Day-date.png";
        break;
      case "Explorer":
        mainTypeImage.src = "Explorer.webp";
        break;
      case "Daytona":
        mainTypeImage.src = "Daytona-rolex.png";
        break;
      case "GMT-Master II":
        mainTypeImage.src = "GMT-Master-rolex.png";
        break;
      default:
        mainTypeImage.src = "";
    }
  }

  function handleOptionSelect(button) {
    const value = button.dataset.value;

    document.querySelectorAll(`.option-button[data-type="main"]`).forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    updateImagePreview(value);
  }

  optionButtons.forEach(button => {
    button.addEventListener("click", () => {
      handleOptionSelect(button);
    });
  });

  colorOptions.forEach(color => {
    color.addEventListener("click", () => {
      const type = color.dataset.type;
      const value = color.dataset.value;

      console.log(`Selected ${type}: ${value}`);
    });
  });
});