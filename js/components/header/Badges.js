// @ts-check

import { $, render } from "../../utils/render.js";
import { eventBind } from "../../utils/eventBinding.js";
import { throttle } from "../../utils/performance.js";

const BADGE_HIDING_POSITION = 500;

const container = $("header .badges");
const template = `
<div class="badge">
  <img src="../../../images/badge1.jpg" alt="Badge" />
</div>
<div class="badge">
  <img src="../../../images/badge2.jpg" alt="Badge" />
</div>
`;

render(container)(template);

const toggleBadgeDisplay = () => {
  container.style.display =
    window.scrollY > BADGE_HIDING_POSITION ? "none" : "block";
};

eventBind({
  $el: window,
  eventType: "scroll",
  listener: throttle(toggleBadgeDisplay, 200),
});
