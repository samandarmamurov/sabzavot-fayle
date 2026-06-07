document.querySelectorAll(".product-img").forEach(img => {
  img.addEventListener("click", () => {

    // Oldin ochiq zoom bo'lsa yopamiz
    const existing = document.querySelector(".zoom-popup");
    if (existing) {
      // Xuddi shu rasmga qayta bosgan bo'lsa — yopib qo'yamiz
      if (existing.dataset.src === img.src) {
        existing.remove();
        return;
      }
      existing.remove();
    }

    // Zoom div yasaymiz
    const zoom = document.createElement("div");
    zoom.className = "zoom-popup";
    zoom.dataset.src = img.src;
    zoom.innerHTML = `
      <span class="zoom-close">&times;</span>
      <img src="${img.src}" alt="">
    `;

    // Rasmdan oldin qo'shamiz — tepasida chiqadi
    img.parentNode.insertBefore(zoom, img);

    // Scroll qilib zoom ga olib boramiz
    zoom.scrollIntoView({ behavior: "smooth", block: "center" });

    // Yopish tugmasi
    zoom.querySelector(".zoom-close").onclick = (e) => {
      e.stopPropagation();
      zoom.remove();
    };
  });
});

// ESC tugmasi bilan yopish
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const zoom = document.querySelector(".zoom-popup");
    if (zoom) zoom.remove();
  }
});