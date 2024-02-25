// @ts-check

import { $, render } from "../../utils/render.js";

render($(".youtube .inner .objects"))(`
<img src="../../../images/floating1.png" alt="Icon" class="floating floating1">
<img src="../../../images/floating2.png" alt="Icon" class="floating floating2">
`);

/*
 * .youtube 의 'overflow: hidden' 속성 때문에 가려지는 이미지는 z-index 로도 해결이 불가능.
 * 이를 해결하기 위해 'overflow: hidden' 속성이 없는 다음 섹션으로 이미지를 하나 이동함.
 * */
render($(".season-product .inner .objects"))(`
<img src="../../../images/floating3.png" alt="Icon" class="floating floating3">
`);

floatingObjectYaxis({ selector: ".floating1", delay: 1, ySize: 15 });
floatingObjectYaxis({ selector: ".floating2", delay: 0.5, ySize: 15 });
floatingObjectYaxis({ selector: ".floating3", delay: 1.5, ySize: 20 });

/**
 * Generate random floating number
 * @param min {number}
 * @param max {number}
 * @returns {number} - fractional digits is 2
 */
function randomNumber(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

/**
 * Animation target will move y-axis repeatedly
 * @param selector
 * @param delay
 * @param ySize
 */
function floatingObjectYaxis({ selector, delay, ySize }) {
  gsap.to(selector, {
    y: ySize,
    ease: "power1.inOut",
    duration: randomNumber(0.5, 2),
    repeat: -1, // 무한 반복
    yoyo: true,
    delay: randomNumber(0, delay),
  });
}
