/* imports */
import { dataPosts, dataPostsDetail } from "../utils/data.js";
import { blogsCards, blogContainer, homeLink, blogsLink, moonItem, sunItem, btnGithub, btnInstagram, btnLinkedin } from "./nodes.js";

/* theme */
const applyTheme = () => {
  const theme = localStorage.getItem("theme");
  const body = document.body;


  
  body.classList.remove(theme === "dark" ? "light-theme" : "dark-theme");
  body.classList.add(theme === "dark" ? "dark-theme" : "light-theme");
  
  if (theme === "dark") {
    moonItem.src = "/src/assets/mon-light.png";
    sunItem.src = "/src/assets/sun-dark.png";

    btnGithub.src = "./src/assets/github-dark.png"
    btnInstagram.src = "./src/assets/insta-dark.png"
    btnLinkedin.src = "./src/assets/link-dark.png";

  } else {
    moonItem.src = "/src/assets/mon-dark.png";
    sunItem.src = "/src/assets/sun-light.png";
    
    btnGithub.src = "./src/assets/github.png"
    btnInstagram.src = "./src/assets/instagram.png"
    btnLinkedin.src = "./src/assets/linkedin.png";
  }


};

/* events */
moonItem.addEventListener("click", () => {
  moonItem.src = "/src/assets/mon-light.png";
  sunItem.src = "/src/assets/sun-dark.png";

  const body = document.body;
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');

  localStorage.setItem('theme', 'dark');
  applyTheme();
});

sunItem.addEventListener("click", () => {
  moonItem.src = "/src/assets/mon-dark.png";
  sunItem.src = "/src/assets/sun-light.png";

  const body = document.body;
  body.classList.remove("dark-theme");
  body.classList.add("light-theme")

  localStorage.setItem('theme', 'light');
  applyTheme();

});

applyTheme();

/* mapping blogs */
const mapDataToCards = (data) => {
  return data.map(
    (item) => `

    <div class="blog-card-item hidden">
        <figure><img class="image-blog" src="${item.imageCourse}" alt=""></figure>
        <div class="card-item-content">
            <div class="item-content-title">
                <p>${item.tecnology}</p>
                <h2>${item.title}</h2>
            </div>
            <p>${item.description}</p>
            <div class="btn-blog-item style-btn" data-blog-id="${item.id}">see the post</div>
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
      return `<p class="other-links-item"><a href="blog.html?id=${blog.id}">- ${blog.title}</a></p>`;
    })
    .join("");
  return `
     
      <div class="blog-container-description">
        <div class="blog-title">
            <div class="blog-title-item">
                <h1>${title}</h1>
            </div>
        </div>
        <div class="blog-card">
            <figure><img class="image-blog-item" src="./src/assets/blog-img.png" alt=""></figure>
            <div class="blog-content">
                <h2>${subtitle}</h2>
                <p id="parrafo">${description}</p>
                    <div class="blog-item-btn style-btn"><a href="/blogs.html">Back to Blogs</a></div>
            </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="sidebar-item">
            <div class="blog-title">
                <div class="sidebar-title-item">
                    <h2>Information</h2>
                </div>
            </div>
            <p>Author: ${institution}</p>
            <p>Posted: ${date}</p>
        </div>
        <div class="blog-title">
            <div class="sidebar-title-item">
                <h2>Other Blogs</h2>
            </div>
        </div>
        <div class="other-blogs">
          ${otherBlogsHtml}
        </div>


      </div>

  `
};

/* insert DOM blogs */
const insertCardsToDOM = () => {
  const template = mapDataToCards(dataPosts);

  return (blogsCards.innerHTML = template.join(" "));
};

if (window.location.pathname.includes("blogs.html")) {
  insertCardsToDOM();
  blogsLink.classList.add("active-link");
  const body = document.body;
  body.style.zoom = '80%';
}

if(window.location.pathname.includes("index.html")){
  console.log(homeLink)
  homeLink.classList.add("active-link");
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




if (window.location.pathname.includes("blog.html")) {
  const searchParams = new URLSearchParams(window.location.search);
  const blogId = parseInt(searchParams.get('id'));
  const template = mapDataToBlogDetailed(dataPostsDetail, blogId);
  blogsLink.classList.add("active-link");

  blogContainer.innerHTML = template;

  const parrafo = document.getElementById('parrafo');
  parrafo.innerHTML = parrafo.innerHTML.replace(/\./g, '.<br>'); 

  const body = document.body;
  body.style.zoom = '80%';
  
}


function showCard(card, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      card.classList.remove("hidden");
      card.classList.add("show");
      resolve();
    }, delay);
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  var cards = Array.from(document.getElementsByClassName("blog-card-item"));
  var delay = 200;

  cards.forEach(function(card, index) {
    showCard(card, delay * index);
  });
});