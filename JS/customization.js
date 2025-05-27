document.addEventListener("DOMContentLoaded", () => {
  const watches = [
    {
      name: "Submariner",
      image: "img/Submarine-rolex.avif",
      description: "The Submariner's design has been entirely dedicated to its function as a diving watch since 1953. Its robust case, luminescent hands and indices, and rotating bezel make it the ultimate underwater companion."
    },
    {
      name: "Datejust",
      image: "img/Datejust-rolex.avif",
      description: "The Datejust is the archetype of the modern watch. Created in 1945, it was the first self-winding waterproof chronometer wristwatch to display the date in a window at 3 o'clock on the dial."
    },
    {
      name: "Day-date",
      image: "img/Day-date.png",
      description: "The Day-Date was the first calendar wristwatch to display the day of the week spelt out in full. Worn by influential people, the Day-Date is available only in precious metals."
    },
    {
      name: "Explorer",
      image: "img/Explorer.webp",
      description: "The Explorer was born of Rolex's involvement in the first successful ascent of Mount Everest. A robust timepiece, it became the watch of choice for mountaineers and adventurers alike."
    },
    {
      name: "Daytona",
      image: "img/Daytona-rolex.png",
      description: "The Cosmograph Daytona was designed to meet the demands of professional racing drivers. With its chronograph function and tachymetric scale, it allows drivers to perfectly measure average speeds up to 400 km/h."
    },
    {
      name: "GMT-Master II",
      image: "img/GMT-Master-rolex.png",
      description: "The GMT-Master II was made for long-haul flights and transcontinental journeys. Its bidirectional rotatable bezel and 24-hour graduated Cerachrom insert allows travelers to read the time in two different time zones simultaneously."
    }
  ];

  let currentIndex = 0;
  const watchDisplay = document.getElementById("watch-display");
  const watchName = document.getElementById("watch-name");
  const watchDescription = document.getElementById("watch-description");
  const prevButton = document.getElementById("prevWatch");
  const nextButton = document.getElementById("nextWatch");

  const updateWatch = i => {
    watchDisplay.style.opacity = watchDescription.style.opacity = "0";
    setTimeout(() => {
      const w = watches[i];
      watchDisplay.src = w.image;
      watchName.textContent = w.name;
      watchDescription.textContent = w.description;
      watchDisplay.style.opacity = watchDescription.style.opacity = "1";
    }, 300);
  };

  updateWatch(currentIndex);

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + watches.length) % watches.length;
    updateWatch(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % watches.length;
    updateWatch(currentIndex);
  });

  document.querySelectorAll(".color-option").forEach(c =>
    c.addEventListener("click", () => {
      document.querySelectorAll(`.color-option[data-type="${c.dataset.type}"]`).forEach(opt => opt.classList.remove("active"));
      c.classList.add("active");
      console.log(`Selected ${c.dataset.type} color: ${c.dataset.value} for ${watches[currentIndex].name}`);
    })
  );

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") prevButton.click();
    if (e.key === "ArrowRight") nextButton.click();
  });
});
