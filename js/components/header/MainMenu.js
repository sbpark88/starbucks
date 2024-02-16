// @ts-ignore

import { $, render } from "../../utils/render.js";
import Item, { mainMenuItems } from "./MainMenuItem.js";

const container = $(".main-menu");
const template = mainMenuItems.map(Item);

render(container)(template);
