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

    let lastScrollTop = 0;
    const header = document.getElementById("header");
    const headerHeight = header.offsetHeight; 

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        if (currentScroll > headerHeight) {
            if (currentScroll > lastScrollTop) {
                header.style.top = `-${headerHeight}px`;
            } else {
                header.style.top = "0";
            }
        }

        lastScrollTop = currentScroll;
    });
});
