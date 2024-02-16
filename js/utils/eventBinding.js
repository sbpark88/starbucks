// @ts-check

/**
 * Event binding function
 * @param $el
 * @param eventType
 * @param listener
 * @returns {*}
 */
export const eventBind = ({ $el, eventType = "click", listener }) =>
  $el.addEventListener(eventType, listener);
