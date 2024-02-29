// @ts-check

import "../../../css/header/index.scss";

import { $, render, init } from "../../utils/render.js";
import template from "./index.html";
init(
  template,
  "header",
)(() => {
  import("./SubMenu.js");
  import("./MainMenu.js");
  import("./Badges.js");
});
