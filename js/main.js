// @ts-check

import { $ } from "./utils/render.js";
import { eventBind } from "./utils/eventBinding.js";

const searchEl = $(".search");
const searchInputEl = $("#searchInput");

const focusIn = () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
};

const focusOut = () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
};

eventBind({ $el: searchEl, listener: () => searchInputEl.focus() });
eventBind({ $el: searchInputEl, eventType: "focus", listener: focusIn });
eventBind({ $el: searchInputEl, eventType: "blur", listener: focusOut });
