import routes from './routes';
import reloadContent from './reloadContent.helper';

import { ROUTE_CHANGED_EVENT } from '@/config/constants';

import { fetchProducts } from '/services/api.service';

const pages = import.meta.glob('../../pages/*/index.js');

async function go(route, addToHistory = true) {
  if (addToHistory) {
    history.pushState({ route }, 'null', route);
  }

  const contentPath = routes[route] || routes['default'];

  const path = `../../pages/${contentPath}/index.js`;

  const { html, css, preFetch } = await pages[path]();
  reloadContent(html, css);

  let prefetchedData = null;
  if(preFetch){
    prefetchedData = await preFetch();
  }

  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGED_EVENT, {
      detail: { route, contentPath, prefetchedData },
    }),
  );

  this.handleInternalLinks('inLink');
}

export default go;
