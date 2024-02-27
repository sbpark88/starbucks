// @ts-check

import { $, render } from "../../utils/render.js";
import { gsap } from "gsap";
import {
  visualCup1,
  visualCup1Text,
  visualCup2,
  visualCup2Text,
  visualSpoon,
  visualTitle,
} from "../../utils/Images.js";

const container = $("body .visual");
const template = `
<div class="inner">
  <div class="title fade-in">
  <img
      src=${visualTitle}
      alt="STARBUCKS DELIGHTFUL START TO THE YEARS"
    />
    <a href="javascript:void(0)" class="btn btn--brown">자세히 보기</a>
  </div>
  <div class="fade-in">
    <img
      src=${visualCup1}
      alt="new OATMEAL LATTE"
      class="cup1 image"
    />
    <img
      src=${visualCup1Text}
      alt="오트밀 라떼"
      class="cup1 text"
    />
  </div>
  <div class="fade-in">
    <img
      src=${visualCup2}
      alt="new STARBUCKS CARAMEL CRUMBLE MOCHA"
      class="cup2 image"
    />
    <img
      src=${visualCup2Text}
      alt="스타벅스 카라멜 크럼블 모카"
      class="cup2 text"
    />
  </div>
  <div class="fade-in">
    <img src=${visualSpoon} alt="Spoon" class="spoon" />
  </div>
</div>
`;

render(container)(template);

const fadeEls = $(".visual .fade-in");
fadeEls.forEach((el, index) => {
  gsap.to(el, { opacity: 1, delay: 0.7 * (index + 1), duration: 1 });
});

/*
굳이 라이브러리 안 쓰고 이렇게 가볍게 직접 제어하는 게 더 낫지 않을까...?

.fade-in {
  opacity: 0;
  transition: opacity 1s;
}

.fade-out {
  opacity: 1;
}

fadeEls.forEach((el, index) =>
  setTimeout(
    () => {
      el.classList.add("fade-out");
    },
    700 * (index + 1),
  ),
);
*/
