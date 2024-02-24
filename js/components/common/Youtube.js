// @ts-check

import { $, render } from "../../utils/render.js";

const YOUTUBE_IFRAME_ELEMENT_ID = "player";

const container = $(".youtube");
const template = `
<div class="youtube__area">
  <div id="${YOUTUBE_IFRAME_ELEMENT_ID}"></div>
</div>
<div class="youtube__cover"></div>
`;

render(container)(template);
