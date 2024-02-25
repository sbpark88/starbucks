// @ts-check

import { $, render } from "../../../../utils/render.js";

const container = $(".animation-effect .reserve-coffee");
const template = `
<div class="inner">
  <img src="../../../../../images/reserve_logo.png" alt="" class="reserve-logo" />
  <div class="text-group">
    <img src="../../../../../images/reserve_text.png" alt="" class="description" />
    <div class="more">
      <a href="javascript:void(0)" class="btn btn--gold">자세히 보기</a>
    </div>
  </div>
  <img src="../../../../../images/reserve_image.png" alt="" class="product" />
</div>
`;

render(container)(template);
