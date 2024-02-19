// @ts-check

/**
 * Promotion Slider Component
 * @param item {array<{imgSrc: string, imgAlt: string, linkUrl: string}>}
 * @returns {string}
 * @constructor
 */
const Promotion = (item) => `
<div class="promotion">
  <div class="swiper">
    <div class="swiper-wrapper">
      ${item
        .map(
          ({ imgSrc, imgAlt, linkUrl }) => `
      <div class="swiper-slide">
        <img src="${imgSrc}" alt="${imgAlt}" />
        <a href="${linkUrl}" class="btn">자세히 보기</a>
      </div>
      `,
        )
        .join("\n")}
    </div>
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev">
    <div class="material-icons">arrow_back</div>
  </div>
  <div class="swiper-button-next">
    <div class="material-icons">arrow_forward</div>
  </div>
</div>
`;

const promotionItems = [
  {
    imgSrc: "../../../images/promotion_slide1.jpg",
    imgAlt: "2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!",
    linkUrl: "javascript:void(0)",
  },
  {
    imgSrc: "../../../images/promotion_slide2.jpg",
    imgAlt:
      "기간 내 스타벅스 카드 e-Gift를 3만원 이상 선물 시, 아메리카노 e-쿠폰을 드립니다.",
    linkUrl: "javascript:void(0)",
  },
  {
    imgSrc: "../../../images/promotion_slide3.jpg",
    imgAlt:
      "뉴이어 푸드와 제조 음료를 세트로 구매 시, 뉴이어 음료 BOGO(1+1) 쿠폰을 드립니다.",
    linkUrl: "javascript:void(0)",
  },
  {
    imgSrc: "../../../images/promotion_slide4.jpg",
    imgAlt:
      "신년 MD 상품 포함 3만원 이상 구매 고객께 아메리카노(톨사이즈) 쿠폰을 드립니다.",
    linkUrl: "javascript:void(0)",
  },
  {
    imgSrc: "../../../images/promotion_slide5.jpg",
    imgAlt: "2017 DIGITAL LUCKY DRAW 100% 당첨의 행운을 드립니다!",
    linkUrl: "javascript:void(0)",
  },
];

export default Promotion(promotionItems);

/**
 * Apply swiper js to swiper container
 */
const setSwiperOnPromotion = () => {
  new Swiper(".promotion .swiper", {
    direction: "horizontal",
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".promotion .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      prevEl: ".promotion .swiper-button-prev",
      nextEl: ".promotion .swiper-button-next",
    },
    mousewheel: {
      direction: "horizontal",
      forceToAxis: true,
    },
  });
};

export { setSwiperOnPromotion };
