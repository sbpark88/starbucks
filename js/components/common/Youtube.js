// @ts-check

import { $, render } from "../../utils/render.js";
import { attachYoutubeIframe } from "../../utils/YoutubeIframeModule.js";

const YOUTUBE_IFRAME_ELEMENT_ID = "player";
const YOUTUBE_VIDEO_ID = "An6LvWQuj_8";

const container = $(".youtube");
const template = `
<div class="youtube__area">
  <div id="${YOUTUBE_IFRAME_ELEMENT_ID}"></div>
</div>
<div class="youtube__cover"></div>
<div class="inner">
  <img src="../../../images/floating1.png" alt="Icon" class="floating floating1">
  <img src="../../../images/floating2.png" alt="Icon" class="floating floating2">
  <img src="../../../images/floating3.png" alt="Icon" class="floating floating3">
</div>
`;

render(container)(template);

// await attachYoutubeIframe({
//   elementId: YOUTUBE_IFRAME_ELEMENT_ID,
//   videoId: YOUTUBE_VIDEO_ID,
// });

/**
 * Generate random floating number
 * @param min {number}
 * @param max {number}
 * @returns {number} - fractional digits is 2
 */
const randomNumber = (min, max) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2));

const floatingObject = ({ selector, delay, ySize }) => {
  gsap.to(selector, {
    y: ySize,
    ease: "power1.inOut",
    duration: randomNumber(0.5, 2),
    repeat: -1, // 무한 반복
    yoyo: true,
    delay: randomNumber(0, delay),
  });
};

floatingObject({ selector: ".floating1", delay: 1, ySize: 15 });
floatingObject({ selector: ".floating2", delay: 0.5, ySize: 15 });
floatingObject({ selector: ".floating3", delay: 1.5, ySize: 20 });
