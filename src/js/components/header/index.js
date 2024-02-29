// @ts-check

import "../../../css/header/index.scss";

import { init } from "../../utils/render.js";
import template from "./index.html";
init(
  template,
  "header",
)(() => {
  import("./SubMenu.js");
  import("./MainMenu.js");
});
