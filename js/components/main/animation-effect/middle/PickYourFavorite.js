// @ts-check

import { $, render } from "../../../../utils/render.js";

const container = $(".animation-effect .pick-your-favorite");
const template = `
<div class="inner">
  <div class="text-group">
    <img
      src="../../../../../images/favorite_text1.png"
      alt=""
      class="title back-to-position to-right"
    />
    <img
      src="../../../../../images/favorite_text2.png"
      alt=""
      class="description back-to-position to-right delay-300"
    />
    <div class="more back-to-position to-right delay-600">
      <a href="javascript:void(0)" class="btn btn--white">자세히 보기</a>
    </div>
  </div>
</div>
`;

render(container)(template);
