document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const headerHeight = header.offsetHeight;
  let lastScrollTop = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    header.style.transform =
      currentScroll > headerHeight && currentScroll > lastScrollTop
        ? "translateY(-100%)"
        : "translateY(0)";
    lastScrollTop = Math.max(currentScroll, 0);
  });

  const searchBtn = document.getElementById("search-btn");
  const searchOverlay = document.getElementById("search-overlay");
  const searchInput = document.getElementById("search-input");
  const closeSearch = document.getElementById("close-search");

  const toggleSearch = (show) =>
    searchOverlay.classList.toggle("active", show);

  searchBtn.addEventListener("click", () => {
    toggleSearch(true);
    searchInput.focus();
  });

  closeSearch.addEventListener("click", () => toggleSearch(false));

  document.addEventListener("click", (e) => {
    if (
      !header.contains(e.target) &&
      !searchOverlay.contains(e.target) &&
      searchOverlay.classList.contains("active")
    ) toggleSearch(false);
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) =>
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const id = anchor.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        let offsetTop = el.offsetTop - headerHeight;
        if (["watches", "choose-model", "find-store"].includes(id))
          offsetTop += 200;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    })
  );
});
