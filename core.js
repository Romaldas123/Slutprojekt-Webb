document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const headerHeight = header.offsetHeight;
  let lastScrollTop = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > headerHeight && currentScroll > lastScrollTop) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  const searchBtn = document.getElementById("search-btn");
  const searchOverlay = document.getElementById("search-overlay");
  const searchInput = document.getElementById("search-input");
  const closeSearch = document.getElementById("close-search");

  searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    searchInput.focus();
  });

  closeSearch.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
  });

  document.addEventListener("click", (event) => {
    if (
      !header.contains(event.target) &&
      !searchOverlay.contains(event.target) &&
      searchOverlay.classList.contains("active")
    ) {
      searchOverlay.classList.remove("active");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        let offsetTop = targetElement.offsetTop - headerHeight;

        if (targetId === "watches" || targetId === "choose-model" || targetId === "find-store") {
          offsetTop += 200;
        }

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});