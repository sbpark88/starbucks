// @ts-check

import { $, render } from "../../../../utils/render.js";

const container = $(".animation-effect .pick-your-favorite");
const template = `
<div class="inner">
  <div class="text-group">
    <img src="../../../../../images/favorite_text1.png" alt="" class="title" />
    <img src="../../../../../images/favorite_text2.png" alt="" class="description" />
    <div class="more">
      <a href="javascript:void(0)" class="btn btn--white">자세히 보기</a>
    </div>
  </div>
</div>
`;

render(container)(template);
