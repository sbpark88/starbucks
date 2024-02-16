// @ts-check

import { curry } from "./fp.js";

/**
 * Curried event binding function.
 * @param $el {HTMLElement} - Event attachment target
 * @param listener {Function} - callback function
 * @param eventType - event type (default: string)
 * @returns {*}
 * @private
 */
const _eventBind = ($el, listener, eventType = "click") =>
  $el.addEventListener(eventType, listener);

/**
 * Curried event binding function.
 * @param $el {HTMLElement} - Event attachment target
 * @param listener {Function} - callback function
 * @param eventType - event type (default: string)
 * @returns {function(...[unknown]): unknown | void}
 */
export const eventBind = curry(_eventBind);
