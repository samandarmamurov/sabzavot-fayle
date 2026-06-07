const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

// 16 ta rasmning hammasiga bitta event
document.querySelectorAll(".product-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src; // 👈 aynan bosilgan rasm chiqadi
  });
});

// yopish
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// tashqariga bosilsa ham yopiladi
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};