// @ts-check

import { $, render } from "../../utils/render.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const container = $("body .awards");
const template = `
<div class="inner">
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../../images/awards_slide1.jpg" alt="대통령 표창" />
      </div>
      <div class="swiper-slide">
        <img
          src="../../../images/awards_slide2.jpg"
          alt="대통령 표창 (3년 연속)"
        />
      </div>
      <div class="swiper-slide">
        <img src="../../../images/awards_slide3.jpg" alt="우수사업주 인증" />
      </div>
      <div class="swiper-slide">
        <img src="../../../images/awards_slide4.jpg" alt="경연대회 대상" />
      </div>
      <div class="swiper-slide">
        <img src="../../../images/awards_slide5.jpg" alt="대한상의회장상" />
      </div>
      <div class="swiper-slide">
        <img
          src="../../../images/awards_slide6.jpg"
          alt="기업사회공헌 활동 부문"
        />
      </div>
      <div class="swiper-slide">
        <img src="../../../images/awards_slide7.jpg" alt="KSI 1위 (5년 연속)" />
      </div>
      <div class="swiper-slide">
        <img
          src="../../../images/awards_slide8.jpg"
          alt="KS-SQI 1위 (5년 연속)"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="../../../images/awards_slide9.jpg"
          alt="커피전문점 부문 (4년 연속)"
        />
      </div>
      <div class="swiper-slide">
        <img
          src="../../../images/awards_slide10.jpg"
          alt="동반성장 부문 (4년 연속)"
        />
      </div>
    </div>
  </div>

  <div class="swiper-button-prev">
    <div class="material-icons">arrow_back</div>
  </div>
  <div class="swiper-button-next">
    <div class="material-icons">arrow_forward</div>
  </div>
</div>
`;

render(container)(template);

new Swiper(".awards .swiper", {
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
