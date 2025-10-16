/**
 * Handles automatic show/hide of the header element based on scroll direction.
 * @param {string} selector - CSS selector for the header element.
 * @param {number} delay - Delay (ms) before hiding header after scroll down.
 */
function initHeaderEffects(selector = '.header') {
  const header = $(selector);
  if (!header) return;

  let prevScrollPos = window.pageYOffset;
  const headerBottom = header.offsetTop + header.offsetHeight;

  function onScroll() {
    const currentScrollPos = window.pageYOffset;

    const isScrollingUp = prevScrollPos > currentScrollPos;
    const isBeforeHeader = currentScrollPos < headerBottom;

    if (isScrollingUp || isBeforeHeader) {
      header.style.top = '0';
    } else {
      header.style.top = '-7.2rem';
    }

    prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

const effects = {
  header: { init: initHeaderEffects },
};

export default effects;
