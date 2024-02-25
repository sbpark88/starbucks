// @ts-check

import { $, render } from "../../../../utils/render.js";

const container = $(".animation-effect .reserve-store");
const template = `
<div class="inner">
  <div class="medal">
    <div class="front">
      <img src="./images/reserve_store_medal_front.png" alt="" />
    </div>
    <div class="back">
      <img src="./images/reserve_store_medal_back.png" alt="" />
      <a href="javascript:void(0)" class="btn">매장안내</a>
    </div>
  </div>
</div>
`;

render(container)(template);
