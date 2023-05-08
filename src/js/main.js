/* imports */
import { dataPosts, dataPostsDetail } from "../utils/data.js";
import { blogsCards } from "./nodes.js";

/* theme */
const moonItem = document.getElementById("moon");
const sunItem = document.getElementById("sun");

const applyTheme = () => {
  console.log("applying theme");
  const theme = localStorage.getItem("theme");
  const body = document.body;

  body.classList.remove(theme === "dark" ? "light-theme" : "dark-theme");
  body.classList.add(theme === "dark" ? "dark-theme" : "light-theme");
};

/* events */
moonItem.addEventListener("click", () => {
  moonItem.src = "/src/assets/mon-light.png";
  sunItem.src = "/src/assets/sun-dark.png";
});

sunItem.addEventListener("click", () => {
  moonItem.src = "/src/assets/mon-dark.png";
  sunItem.src = "/src/assets/sun-light.png";
});

applyTheme();

/* mapping blogs */
const mapDataToCards = (data) => {
  return data.map(
    (item) => `

    <div class="blog-card-item">
        <figure><img src="${item.imageCourse}" alt=""></figure>
        <div class="card-item-content">
            <div class="item-content-title">
                <p>${item.tecnology}</p>
                <h2>${item.title}</h2>
            </div>
            <p>${item.description}</p>
            <div class="btn-blog-item">see the post</div>
        </div>
    </div>
    `
  );
};

const insertCardsToDOM = () => {
  const template = mapDataToCards(dataPosts);

  return (blogsCards.innerHTML = template.join(" "));
};

if (window.location.pathname.includes("blogs.html")) {
  insertCardsToDOM();
}
