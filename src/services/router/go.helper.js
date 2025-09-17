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

  console.log(pages);
  if (pages[path]) {
    const { html, css } = await pages[path]();
    // TODO: let's reload content here and then inject data into the page via ajax
    // how to do it though?
    reloadContent(html, css);
  } else {
    console.error(`Page not found: ${contentPath}`);
  }

  let data = null;
  switch (contentPath) {
    case 'home':
      data = await fetchProducts();
      break;
    // case 'landing':
    //   data = await fetchProduct();
    //   break;
    // default:
  }

  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGED_EVENT, {
      detail: { route: route, contentPath: contentPath, data: data },
    }),
  );

  this.handleInternalLinks('inLink');
}

export default go;
