// @ts-check

import { $, render } from "../../utils/render.js";

const container = $(".notice");
const template = `
<div class="notice-line">
  <div class="bg-left"></div>
  <div class="bg-right"></div>
  <div class="inner">
    <div class="inner__left">
      <h2>공지사항</h2>
      <div class="swiper-container"></div>
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

render(container)(template);
