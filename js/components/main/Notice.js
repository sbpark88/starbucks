// @ts-check

import { $, render } from "../../utils/render.js";
import PromotionTemplate, {
  setSwiperOnPromotion,
} from "../common/PromotionTemplate.js";
import { eventBind } from "../../utils/eventBinding.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const container = $("body .notice");
const noticeTemplate = `
<div class="notice-line">
  <div class="bg-left"></div>
  <div class="bg-right"></div>
  <div class="inner">
    <div class="inner__left">
      <h2>공지사항</h2>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:void(0)"
              >크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내</a
            >
          </div>
          <div class="swiper-slide">
            <a href="javascript:void(0)"
              >[당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트</a
            >
          </div>
          <div class="swiper-slide">
            <a href="javascript:void(0)"
              >스타벅스커피 코리아 애플리케이션 버전 업데이트 안내</a
            >
          </div>
          <div class="swiper-slide">
            <a href="javascript:void(0)"
              >[당첨자 발표] 뉴이어 전자영수증 이벤트</a
            >
          </div>
        </div>
      </div>
      <a href="javascript:void(0)" class="notice-line__more">
        <div class="material-icons">add_circle</div>
      </a>
    </div>
    <div class="inner__right">
      <h2>스타벅스 프로모션</h2>
      <div class="toggle-promotion">
        <div class="material-icons">upload</div>
      </div>
    </div>
  </div>
</div>
`;

const template = noticeTemplate + PromotionTemplate;

render(container)(template);

new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: {
    delay: 2000,
  },
  loop: true,
});

setSwiperOnPromotion();

const promotionToggleBtn = $(".toggle-promotion");

// Toggle promotion display status
const togglePromotion = ((promotionToggleBtn) => {
  const promotionEl = $(".promotion");
  let isHidePromotion = false;

  return () => {
    isHidePromotion = !isHidePromotion;
    promotionToggleBtn.classList.toggle("revert");
    promotionEl.classList.toggle("hide");
  };
})(promotionToggleBtn);

eventBind({ $el: promotionToggleBtn, listener: togglePromotion });
