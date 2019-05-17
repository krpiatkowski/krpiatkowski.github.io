import "normalize.css";

import "typeface-roboto-slab";

import "ionicons/dist/scss/ionicons.scss";
import "animate.css/animate.css";

import "./scss/index.scss";

import Pageable from "pageable"



document.addEventListener('DOMContentLoaded', () => {
  new Pageable("#container", {
    onFinish: (data) => {
      let container = document.querySelector('.pg-active')
      container.querySelectorAll('.animated').forEach(el => {
        el.classList.remove('animated');
        console.log(el.classList)
        el.classList.add('animated');
      });
    }
  });
});