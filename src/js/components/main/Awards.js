// @ts-check

import { $, render } from "../../utils/render.js";
import Swiper from "swiper";
import template from "./Awards.html";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";

const container = $("body .awards");

render(container)(template);

new Swiper(".awards .swiper", {
  modules: [Navigation, Pagination, Mousewheel, Autoplay],
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-button-prev",
    nextEl: ".awards .swiper-button-next",
  },
  mousewheel: {
    direction: "horizontal",
    forceToAxis: true,
  },
});
