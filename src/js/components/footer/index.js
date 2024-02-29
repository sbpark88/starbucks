// @ts-check

import "../../../css/footer/index.scss";

import { $, render, init } from "../../utils/render.js";
import template from "./index.html";

const container = $("footer");

init(
  template,
  "footer",
)(() => {
  setThisYear();
});

function setThisYear() {
  const thisYear = $(".this-year");
  thisYear.textContent = new Date().getFullYear() + "";
}
