// @ts-check

import { $, render } from "../../utils/render.js";
import { attachYoutubeIframe } from "../../utils/YoutubeIframeModule.js";

const YOUTUBE_IFRAME_ELEMENT_ID = "player";
const YOUTUBE_VIDEO_ID = "An6LvWQuj_8";

const container = $(".youtube");
const template = `
<div class="youtube__area">
  <div id="${YOUTUBE_IFRAME_ELEMENT_ID}"></div>
</div>
<div class="youtube__cover"></div>
`;

render(container)(template);

await attachYoutubeIframe({
  elementId: YOUTUBE_IFRAME_ELEMENT_ID,
  videoId: YOUTUBE_VIDEO_ID,
});
