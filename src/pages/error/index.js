import html from './index.html?raw';
import css from './index.scss?inline';

import { ROUTE_CHANGED_EVENT } from '/config/constants';

window.on(ROUTE_CHANGED_EVENT, (ev) => {
  console.error('yes, it is err');
});

export { html, css };
