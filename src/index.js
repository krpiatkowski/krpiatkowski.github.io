import "normalize.css";

import "typeface-roboto-slab";

import "ionicons/dist/scss/ionicons.scss";
import "animate.css/animate.css";

import "./scss/index.scss";

import inViewPort from "./js/inViewPort";

window.addEventListener("scroll", () => {
  document.querySelectorAll(".inViewPort").forEach(el => {
    if (inViewPort(el)) {
      el.classList.add("animate");
    } else {
      el.classList.remove("animate");
    }
  });
});
