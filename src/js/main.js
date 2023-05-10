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
        <figure><img class="image-blog" src="${item.imageCourse}" alt=""></figure>
        <div class="card-item-content">
            <div class="item-content-title">
                <p>${item.tecnology}</p>
                <h2>${item.title}</h2>
            </div>
            <p>${item.description}</p>
            <div class="btn-blog-item" data-blog-id="${item.id}">see the post</div>
        </div>
    </div>
    `
  );
};

/* mapping data blogs */
const mapDataToBlogDetailed = (data, blogId) => {
  const blog = data.find((item) => item.id === blogId);

  if (!blog) {
    return "<p>The selected blog was not found.</p>";
  }

  const { title, subtitle, image, description, information } = blog;
  const { institution, date, instructor } = information;

  const otherBlogs = data.filter((item) => item.id !== blogId);
  const otherBlogsHtml = otherBlogs
    .map((blog) => {
      return `<p><a href="blog.html?id=${blog.id}">${blog.title}</a></p>`;
    })
    .join("");




  return ``
};

/* insert DOM blogs */
const insertCardsToDOM = () => {
  const template = mapDataToCards(dataPosts);

  return (blogsCards.innerHTML = template.join(" "));
};

if (window.location.pathname.includes("blogs.html")) {
  insertCardsToDOM();
}

/* blog.html */
const goToBlog = (e) => {
  const blogId = e.currentTarget.getAttribute("data-blog-id");
  window.location.href = `blog.html?id=${blogId}`;
};

document.addEventListener("DOMContentLoaded", () => {
  const goPostButtons = document.querySelectorAll(".btn-blog-item");

  goPostButtons.forEach((button) => {
    button.addEventListener("click", goToBlog);
  });
});


const parrafo = document.getElementById('parrafo');
parrafo.innerHTML = parrafo.innerHTML.replace(/\./g, '.<br>');
