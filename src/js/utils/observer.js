const createObserver = (callback, options = { threshold: 0.2 }) =>
  new IntersectionObserver(callback, {
    threshold: 0.2,
  });

const twoWayCallback = (entries) =>
  entries.forEach((entry) =>
    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show"),
  );

const downwardCallback = (entries) =>
  entries.forEach((entry) => {
    const topIsIntersecting = entry.boundingClientRect.top >= 0;
    if (topIsIntersecting) {
      entry.isIntersecting
        ? entry.target.classList.add("show")
        : entry.target.classList.remove("show");
    }
  });

const upwardCallback = (entries) =>
  entries.forEach((entry) => {
    const topIsHiding = entry.boundingClientRect.top < 0;
    if (topIsHiding) {
      entry.isIntersecting
        ? entry.target.classList.add("show")
        : entry.target.classList.remove("show");
    }
  });

const observer = createObserver(twoWayCallback);
const observerDownward = createObserver(downwardCallback);
const observerUpward = createObserver(upwardCallback);

export { observer, observerDownward, observerUpward };
