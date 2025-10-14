import reloadContent from './reloadContent.helper';

import { ROUTE_CHANGED_EVENT } from '@/config/constants';

import { fetchProducts } from '/services/api.service';

const pages = import.meta.glob('/pages/**/index.js');

async function go(route, addToHistory = true) {
  if (route === '/') {
    route = '/home';
  }

  if (addToHistory) {
    history.pushState({ route }, 'null', route);
  }

  let path = `/pages${route}/index.js`;

  if (!pages[path]) {
    path = `/pages/error/index.js`;
  }


  const { html, css, preFetch } = await pages[path]();

  reloadContent(html, css);

  let prefetchedData = null;
  if(preFetch){
    prefetchedData = await preFetch();
  }

  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGED_EVENT, {
      detail: { route, prefetchedData },
    }),
  );

  this.handleInternalLinks('inLink');
}

export default go;
