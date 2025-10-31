import logger from '@/config/logger.js';
import { ROUTE_CHANGED_EVENT } from '@/config/constants';

const pages = import.meta.glob('/pages/**/index.js');

// TODO: if it's same path as current, don't add to history (noticeed on reload)

async function go(route, addToHistory = true) {
  logger.debug('Router:go', { route, addToHistory });

  //TODO: display loading screen/animation dispatch event here or somewhere elase above?

  //TODO: If route is same as current one, return immedialtly
  //count in previous pathname
  // logger.debug(window.location.pathname);
  // if (currentLocation === route) {
  //   return;
  // }

  if (route === '/') {
    route = '/home';
  }

  const currentLocation = window.location.pathname;
  if (addToHistory && currentLocation !== route) {
    logger.debug('Router:pushToHistory', { route });
    history.pushState({ route }, 'null', route);
  }

  let path = `/pages${route}/index.js`;

  if (!pages[path]) {
    path = `/pages/error/index.js`;
  }

  const { html, css, preFetch } = await pages[path]();

  this.reloadContent(html, css);

  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });

  let prefetchedData = null;
  if (preFetch) {
    logger.debug('Router:prefetchData', { preFetch });
    prefetchedData = await preFetch();
  }

  logger.debug('Router:dispatchEvent', {});
  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGED_EVENT, {
      detail: { route, prefetchedData },
    }),
  );

  this.handleInternalLinks('inLink');
}

export default go;
