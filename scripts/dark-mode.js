"use strict";

function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    html.setAttribute("data-theme", current === "light" ? "dark" : "light");
}

document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);