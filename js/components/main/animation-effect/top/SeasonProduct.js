// @ts-check

import { $, render } from "../../../../utils/render.js";

const container = $(".animation-effect .season-product");
const template = `
<div class="inner">
  <div class="objects"></div>
  <img
    src="./images/season_product_image.png"
    alt=""
    class="product back-to-position to-right"
  />
  <div class="text-group">
    <img
      src="./images/season_product_text1.png"
      alt=""
      class="title back-to-position to-left delay-300"
    />
    <img
      src="./images/season_product_text2.png"
      alt=""
      class="description back-to-position to-left delay-600"
    />
    <div class="more back-to-position to-left delay-900">
      <a href="javascript:void(0)" class="btn">자세히 보기</a>
    </div>
  </div>
</div>
`;

render(container)(template);
