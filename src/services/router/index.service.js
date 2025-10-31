import init from './init.helper';
import go from './go.helper';
import handleInternalLinks from './handleInternalLinks.helper';
import reloadContent from './reloadContent.helper';

const Router = {
  handleInternalLinks,
  reloadContent,
  init,
  go, // TODO: rename to navigate
};

export { Router };
