import logger from '@/config/logger.js';

export default async function init() {
  try {
    await this.go(location.pathname);
  } catch (err) {
    // TODO: display error screen
    console.error('Error during router initialization:', err);
  }

  window.on('popstate', (event) => {
    logger.debug('Router:popstate');
    this.go(event.state.route, false);
  });
}
