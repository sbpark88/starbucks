// @ts-check

/**
 * Event binding function
 * @param $el {Window | Element}
 * @param eventType {String}
 * @param listener {Function}
 * @returns {*}
 */
export const eventBind = ({ $el, eventType = "click", listener }) =>
  $el.addEventListener(eventType, listener);
