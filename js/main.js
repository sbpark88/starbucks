// @ts-check

/* HEADER */
import "./components/header/index.js";

/* MAIN PAGE */
import "./components/main/Visual.js";
import "./components/main/Notice.js";
import "./components/main/Rewards.js";
import "./components/common/Youtube.js";
import "./components/main/animation-effect/top/SeasonProduct.js";
import "./components/main/animation-effect/top/ReserveCoffee.js";
import "./components/main/animation-effect/middle/PickYourFavorite.js";
import "./components/main/animation-effect/middle/ReserveStore.js";
import "./components/main/animation-effect/bottom/FindStore.js";
import "./components/main/FloatingObjects.js";
import "./components/main/Awards.js";
import { $ } from "./utils/render.js";

// 양방향
const createObserver = (callback, options = { threshold: 0.2 }) =>
  new IntersectionObserver(callback, {
    threshold: 0.2,
  });

const twoWayCallback = (entries) =>
  entries.forEach((entry) =>
    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show"),
  );

const downwardCallback = (entries) =>
  entries.forEach((entry) => {
    const topIsIntersecting = entry.boundingClientRect.top >= 0;
    if (topIsIntersecting) {
      entry.isIntersecting
        ? entry.target.classList.add("show")
        : entry.target.classList.remove("show");
    }
  });

const upwardCallback = (entries) =>
  entries.forEach((entry) => {
    const topIsHiding = entry.boundingClientRect.top < 0;
    if (topIsHiding) {
      entry.isIntersecting
        ? entry.target.classList.add("show")
        : entry.target.classList.remove("show");
    }
  });

const observer = createObserver(twoWayCallback);
const observerDownward = createObserver(downwardCallback);
const observerUpward = createObserver(upwardCallback);

const observeEls = $("section.observe");
observeEls.forEach((el) => observer.observe(el));
// observeEls.forEach((el) => observerDownward.observe(el));
// observeEls.forEach((el) => observerUpward.observe(el));
