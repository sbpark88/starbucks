// @ts-check

import { $, render } from "../../../../utils/render.js";

const container = $(".animation-effect .season-product");
const template = `
<div class="inner">
  <div class="objects"></div>
  <img src="../../../../../images/season_product_image.png" alt="" class="product" />
  <div class="text-group">
    <img src="../../../../../images/season_product_text1.png" alt="" class="title" />
    <img
      src="../../../../../images/season_product_text2.png"
      alt=""
      class="description"
    />
    <div class="more">
      <a href="javascript:void(0)" class="btn">자세히 보기</a>
    </div>
  </div>
</div>
`;

render(container)(template);
