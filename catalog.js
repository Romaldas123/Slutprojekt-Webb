document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".catalog-item").forEach((item) => {
    item.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-10px)";
      this.style.boxShadow = "0 20px 30px rgba(0, 0, 0, 0.3)";
    });
    item.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
});