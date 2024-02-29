// @ts-check

import "../../../css/common/badges.scss";

import { $, render } from "../../utils/render.js";
import { eventBind } from "../../utils/eventBinding.js";
import { throttle } from "../../utils/performance.js";
import { gsap } from "gsap";
import template from "./Badges.html";
import K from "../../constant.js";

const container = $("#badges");

render(container)(template);

/*
 * Framer-motion 은 리액트 컴포넌트에서만 사용 가능한거로 기억하는데 GSAP 은 Vanilla JS 에서도 사용이 가능하다.
 * */
const toggleBadgeDisplay = () => {
  window.scrollY > K.badgeHidingPosition
    ? gsap.to(container, { opacity: 0, display: "none", duration: 0.6 })
    : gsap.to(container, { opacity: 1, display: "block", duration: 0.6 });
};

eventBind({
  $el: window,
  eventType: "scroll",
  listener: throttle(toggleBadgeDisplay, 200),
});
