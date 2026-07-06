const screens = [...document.querySelectorAll(".screen")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        replay(entry.target);
      } else {
        entry.target.classList.remove("is-active");
      }
    });
  },
  {
    root: document.querySelector(".h5"),
    threshold: 0.62,
  }
);

screens.forEach((screen) => observer.observe(screen));

window.addEventListener("load", () => {
  window.setTimeout(() => {
    replay(screens[0]);
  }, 120);
});

function replay(screen) {
  if (!screen) return;

  screen.classList.remove("is-active");
  void screen.offsetWidth;
  screen.classList.add("is-active");
}
