const header = document.querySelector("header");
const h1 = document.querySelector("h1");
let image = true;
let title = true;

const changeImage = () => {
  image = !image;
  title = !title;
  header.style.backgroundImage = image ? "url(img1.webp)" : "url(img2.jpg)";
  h1.textContent = title ? "View 1" : "View 2";
};

header.addEventListener("click", changeImage);
