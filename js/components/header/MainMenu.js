// @ts-check

import { $, render } from "../../utils/render.js";
import MainMenuItem from "./MainMenuTemplate.js";

const container = $("header .main-menu");

render(container)(MainMenuItem);
