// @ts-check

import { $, render } from "../../../../utils/render.js";

const container = $(".animation-effect .find-store");
const template = `
<div class="inner">
  <img
    src="./images/find_store_texture1.png"
    alt=""
    class="texture1"
  />
  <img
    src="./images/find_store_texture2.png"
    alt=""
    class="texture2"
  />
  <img
    src="./images/find_store_picture1.jpg"
    alt=""
    class="picture picture1 back-to-position to-right"
  />
  <img
    src="./images/find_store_picture2.jpg"
    alt=""
    class="picture picture2 back-to-position to-right delay-300"
  />

  <div class="text-group">
    <img
      src="./images/find_store_text1.png"
      alt=""
      class="title back-to-position to-left"
    />
    <img
      src="./images/find_store_text2.png"
      alt=""
      class="description back-to-position to-left delay-300"
    />
    <div class="more back-to-position to-left delay-600">
      <a href="javascript:void(0)" class="btn">매장찾기</a>
    </div>
  </div>
</div>
`;

render(container)(template);
