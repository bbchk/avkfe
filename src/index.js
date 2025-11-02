import './assets/styles/index.scss';

import './utils/dom.utils.js';

import utils from './utils/index.export.js';

// TODO: introduce logging
import logger from '@/config/logger.js';

import { Router } from './services/router/index.service.js';
import { ui } from './services/ui/index.ui.service.js';

window._app = {
  router: Router,
  ui: ui,
};

document.on('DOMContentLoaded', () => {
  logger.debug('Router:init', { Router });

  window._app.router.init();

  utils.effects.header.init('.header');

  $('#cartBtn').on('click', () => {
    logger.debug("cartBtn:click");
    window._app.ui.openModal('cart');
  });
});
