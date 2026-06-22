"use strict";

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "light" ? "dark" : "light");
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -10% 0px"
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

function dispSize() {
  document.body.style.backgroundColor = "blue";
  console.log("valami");
  document.getElementById("adat").innerHTML = "valami " + window.innerWidth + " x " + window.innerHeight;
}

/*document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);*/
console.log(document.body);
window.addEventListener("resize", dispSize);