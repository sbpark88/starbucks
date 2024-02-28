// @ts-check

import { $, render } from "../../utils/render.js";
import template from "./index.html";

const container = $("footer");

render(container)(template);

const thisYear = $(".this-year");
thisYear.textContent = new Date().getFullYear() + "";
