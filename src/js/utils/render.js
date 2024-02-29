// @ts-check

/**
 * DOM Selector
 * @param selector {string} - CSS selector
 * @returns {NodeListOf<Element> | Element}
 */
const $ = (selector) => {
  const nodeList = document.querySelectorAll(selector);
  return nodeList.length === 1 ? nodeList[0] : nodeList;
};

/**
 * Check Array
 * @param something {unknown}
 * @returns {boolean}
 */
const arrayCheck = (something) => something instanceof Array;

/**
 * Make HTML string for rendering.
 * @param html {string | string[]} - HTML string
 * @returns {string} - Normalized HTML string
 */
const normalizeHTML = (html) => (arrayCheck(html) ? html.join("") : html);

/**
 * Render template inside the child of the target element.
 * @param el {HTMLElement} - Target element to render a template.
 * @returns {function(string): void} - Render function
 */
const render =
  (el) =>
  (html = "") =>
    (el.innerHTML = normalizeHTML(html));

/**
 * Render page with components
 * @param template
 * @returns {Function}
 */
const init =
  (template, el = "#view") =>
  (components) => {
    const container = $(el);
    render(container)(template);

    components();
  };

export { $, render, init };
