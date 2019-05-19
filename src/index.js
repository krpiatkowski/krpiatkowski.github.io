import "normalize.css";

import "typeface-roboto-slab";

import "ionicons/dist/scss/ionicons.scss";
import "animate.css/animate.css";

import "./scss/index.scss";

import Pageable from "pageable";

document.addEventListener("DOMContentLoaded", () => {
  new Pageable("#container", {
    swipeThreshold: 300
  });
});
