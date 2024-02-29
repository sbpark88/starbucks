// @ts-check

import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/mousewheel";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "../../css/common/swiperButton.scss";

import "../../css/main/index.scss";

import { $, render, init } from "../utils/render.js";
import template from "./Main.html";
import { observerDownward } from "../utils/observer.js";

init(template)(() => {
  import("../components/main/Visual.js");
  import("../components/main/Notice.js");
  import("../components/main/Rewards.js");
  import("../components/common/Youtube.js");
  import("../components/main/animation-effect/top/SeasonProduct.js");
  import("../components/main/animation-effect/top/ReserveCoffee.js");
  import("../components/main/animation-effect/middle/PickYourFavorite.js");
  import("../components/main/animation-effect/middle/ReserveStore.js");
  import("../components/main/animation-effect/bottom/FindStore.js");
  import("../components/main/FloatingObjects.js");
  import("../components/main/Awards.js");

  /* SCROLL OBSERVER */
  const observeEls = $("section.observe");
  observeEls.forEach((el) => observerDownward.observe(el));
});
