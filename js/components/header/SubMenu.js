// @ts-check

import { $, render } from "../../utils/render.js";
import { eventBind } from "../../utils/eventBinding.js";

const container = $(".sub-menu");
const template = `
<ul class="menu">
  <li>
    <a href="/signin">Sign In</a>
  </li>
  <li>
    <a href="javascript:void(0)">My Starbucks</a>
  </li>
  <li>
    <a href="javascript:void(0)">Customer Service & Ideas</a>
  </li>
  <li>
    <a href="javascript:void(0)">Find a Store</a>
  </li>
</ul>
<div class="search">
  <input type="text" name="" id="searchInput" class="text" />
  <div class="material-icons">search</div>
</div>
`;

render(container)(template);

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
