import reloadContent from './reloadContent.helper';


import logger from '@/config/logger.js';
import { ROUTE_CHANGED_EVENT } from '@/config/constants';

import { fetchProducts } from '/services/api.service';

const pages = import.meta.glob('/pages/**/index.js');

// TODO: if it's same path as current, don't add to history (noticeed on reload)

async function go(route, addToHistory = true) {
  logger.debug({ route, addToHistory }, 'Router:go');

  if (route === '/') {
    route = '/home';
  }


  if (addToHistory) {
    logger.debug({ route }, 'Router:pushToHistory');
    history.pushState({ route }, 'null', route);
  }

  let path = `/pages${route}/index.js`;

  if (!pages[path]) {
    path = `/pages/error/index.js`;
  }

  const { html, css, preFetch } = await pages[path]();

  reloadContent(html, css);

  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });

  let prefetchedData = null;
  if (preFetch) {
    logger.debug({ preFetch }, 'Router:prefetchData');
    prefetchedData = await preFetch();
  }


  logger.debug({ preFetch }, 'Router:dispatchEvent');
  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGED_EVENT, {
      detail: { route, prefetchedData },
    }),
  );

  this.handleInternalLinks('inLink');
}

export default go;
