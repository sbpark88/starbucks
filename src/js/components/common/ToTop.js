// @ts-check

import { $ } from "../../utils/render.js";
import { eventBind } from "../../utils/eventBinding.js";
import { throttle } from "../../utils/performance.js";
import K from "../../../constant.js";

const template = `
<div id="to-top">
  <div class="material-icons">arrow_upward</div>
</div>
`;

$("body").insertAdjacentHTML("beforeend", template);

const toTop = $("#to-top");

eventBind({
  $el: toTop,
  listener: () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }),
});

const toggleToTopDisplay = () => {
  window.scrollY > K.toTopPosition
    ? toTop.classList.add("show")
    : toTop.classList.remove("show");
};

eventBind({
  $el: window,
  eventType: "scroll",
  listener: throttle(toggleToTopDisplay, 200),
});
