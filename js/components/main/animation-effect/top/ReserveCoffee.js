// @ts-check

import { $, render } from "../../../../utils/render.js";

const container = $(".animation-effect .reserve-coffee");
const template = `
<div class="inner">
  <img
    src="../../../../../images/reserve_logo.png"
    alt=""
    class="reserve-logo back-to-position to-right"
  />
  <div class="text-group">
    <img
      src="../../../../../images/reserve_text.png"
      alt=""
      class="description back-to-position to-right delay-300"
    />
    <div class="more back-to-position to-right delay-600">
      <a href="javascript:void(0)" class="btn btn--gold">자세히 보기</a>
    </div>
  </div>
  <img
    src="../../../../../images/reserve_image.png"
    alt=""
    class="product back-to-position to-left delay-900"
  />
</div>
`;

render(container)(template);
