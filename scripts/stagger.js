export function initStagger() {
  document.querySelectorAll(".stagger").forEach(group => {
    [...group.children].forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 120}ms`);
    });
  });
}