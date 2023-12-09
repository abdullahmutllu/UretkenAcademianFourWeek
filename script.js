const element = document.querySelector(".pictures");
let baseUrl = "https://source.unsplash.com/random/";
for (let i = 0; i < 21; i++) {
  const img = document.createElement("img");
  img.src = baseUrl + i;
  element.appendChild(img);
}
