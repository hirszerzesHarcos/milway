document.querySelectorAll(".services-grid .card").forEach((card, index) => {

  card.style.transitionDelay =
      `${index * 120}ms`;

});

export function initStagger() {

  document
      .querySelectorAll(".stagger")
      .forEach(group => {

        [...group.children]
            .forEach((item, index) => {

              item.style.setProperty(
                  "--delay",
                  `${index * 90}ms`
              );

            });

      });

}