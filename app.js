const products = [
  { src:"./img/1-rasm.svg",  name:"Red Chili",       price:"$14.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Hot, Spicy, Fresh",             sku:"1,234" },
  { src:"./img/2-rasm.svg",  name:"Big Potato",       price:"$14.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Starchy, Fresh",                sku:"2,341" },
  { src:"./img/3-rasm.svg",  name:"Chinese Cabbage",  price:"$17.28", oldPrice:"$48.00",discount:"64% Off", category:"Vegetables", tags:"Vegetables, Healthy, Chinese",  sku:"2,515" },
  { src:"./img/4-dars.svg",  name:"Sweet Corn",       price:"$14.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Sweet, Fresh, Corn",            sku:"3,421" },
  { src:"./img/5-rasm.svg",  name:"Red Tomato",       price:"$14.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Tomato, Fresh, Organic",        sku:"4,512" },
  { src:"./img/6-rasm.svg",  name:"Eggplant",         price:"$14.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Purple, Rich, Healthy",         sku:"5,123" },
  { src:"./img/7-rasm.svg",  name:"Cauliflower",      price:"$16.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"White, Healthy, Fresh",         sku:"6,234" },
  { src:"./img/8-rasm.svg",  name:"Green Apple",      price:"$14.99", oldPrice:"",      discount:"",        category:"Fruits",     tags:"Green, Sweet, Fresh",           sku:"7,345" },
  { src:"./img/9-rasm.svg",  name:"Fresh Mango",      price:"$15.99", oldPrice:"",      discount:"",        category:"Fruits",     tags:"Tropical, Sweet, Fresh",        sku:"8,456" },
  { src:"./img/10-rasm.svg", name:"Green Capsicum",   price:"$14.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Green, Crunchy, Healthy",       sku:"9,567" },
  { src:"./img/11-rasm.svg", name:"Green Chili",      price:"$14.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Hot, Green, Spicy",             sku:"1,678" },
  { src:"./img/12-rasm.svg", name:"Green Cucumber",   price:"$14.99", oldPrice:"$18.99",discount:"30% Off", category:"Vegetables", tags:"Fresh, Cooling, Healthy",       sku:"2,789" },
  { src:"./img/13-rasm.svg", name:"Sweet Onion",      price:"$10.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Onion, Sweet, Organic",         sku:"3,890" },
  { src:"./img/14-rasm.svg", name:"Green Lettuce",    price:"$13.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Leafy, Green, Fresh",           sku:"4,901" },
  { src:"./img/15-rasm.svg", name:"Lettuce Pepper",   price:"$14.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Pepper, Fresh, Crunchy",        sku:"5,012" },
  { src:"./img/16-rasm.svg", name:"Green Capsicum 2", price:"$14.99", oldPrice:"",      discount:"",        category:"Vegetables", tags:"Green, Bell Pepper, Fresh",     sku:"6,123" },
];

let qty = 1;

document.querySelectorAll(".product-img").forEach((img, i) => {
  img.addEventListener("click", () => openModal(i));
});

function openModal(i) {
  const p = products[i];
  qty = 1;
  document.getElementById("qNum").textContent = 1;
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalSku").textContent = p.sku;
  document.getElementById("modalNew").textContent = p.price;
  document.getElementById("modalOld").textContent = p.oldPrice;
  document.getElementById("modalDisc").textContent = p.discount;
  document.getElementById("modalCat").textContent = p.category;
  document.getElementById("modalTags").textContent = p.tags;
  document.getElementById("modalMainImg").src = p.src;

  const thumbs = document.getElementById("modalThumbs");
  thumbs.innerHTML = "";
  for (let t = 0; t < 4; t++) {
    const d = document.createElement("div");
    d.className = "modal-thumb" + (t === 0 ? " active" : "");
    d.innerHTML = `<img src="${p.src}" alt="">`;
    d.onclick = () => {
      document.querySelectorAll(".modal-thumb").forEach(x => x.classList.remove("active"));
      d.classList.add("active");
      document.getElementById("modalMainImg").src = p.src;
    };
    thumbs.appendChild(d);
  }

  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

document.getElementById("modalClose").onclick = () => {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
};

document.getElementById("modal").onclick = (e) => {
  if (e.target === document.getElementById("modal")) {
    document.getElementById("modal").classList.remove("open");
    document.body.style.overflow = "";
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal").classList.remove("open");
    document.body.style.overflow = "";
  }
});

document.getElementById("qMinus").onclick = () => {
  qty = Math.max(1, qty - 1);
  document.getElementById("qNum").textContent = qty;
};

document.getElementById("qPlus").onclick = () => {
  qty++;
  document.getElementById("qNum").textContent = qty;
};

// yurkacha qizaradi 
const wishBtn = document.querySelector(".modal-wish-btn");
const heartIcon = wishBtn.querySelector("i");

wishBtn.addEventListener("click", () => {
  wishBtn.classList.toggle("active");

  if (wishBtn.classList.contains("active")) {
    heartIcon.classList.remove("fa-regular");
    heartIcon.classList.add("fa-solid");
  } else {
    heartIcon.classList.remove("fa-solid");
    heartIcon.classList.add("fa-regular");
  }
});