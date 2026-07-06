const observer = new IntersectionObserver(onReveal, {

  threshold: .12,

  rootMargin: "0px 0px -12% 0px"

});

function onReveal(entries) {

  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");

    observer.unobserve(entry.target);

  });

}

export function initReveal() {

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

}