document.addEventListener("DOMContentLoaded", function () {
    console.log("Webbsidan är laddad och redo!");

    document.querySelectorAll(".catalog-item").forEach(item => {
        item.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#b0b0b0";
        });
        item.addEventListener("mouseout", function () {
            this.style.backgroundColor = "#dcdcdc";
        });
    });

    const header = document.getElementById("header");
    const headerHeight = header.offsetHeight;
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;
        if (currentScroll > headerHeight) {
            header.style.transform = currentScroll > lastScrollTop ? "translateY(-100%)" : "translateY(0)";
        } else {
            header.style.transform = "translateY(0)";
        }
        lastScrollTop = currentScroll;
    });

    const searchBtn = document.getElementById("search-btn");
    const searchOverlay = document.getElementById("search-overlay");
    const searchInput = document.getElementById("search-input");

    searchBtn.addEventListener("click", function () {
        
        searchOverlay.classList.add("active");
        
        searchInput.focus();
    });

    document.addEventListener('click', function(event) {
        const isClickInsideHeader = header.contains(event.target);
        const isClickInsideSearchOverlay = searchOverlay.contains(event.target);

        if (!isClickInsideHeader && !isClickInsideSearchOverlay && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });
});