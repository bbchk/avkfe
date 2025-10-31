import log from 'loglevel';

import { LOG_LEVEL } from '@/config/constants';

// trace, debug, info, warn, error, silent
log.setLevel(LOG_LEVEL);

export default log;
