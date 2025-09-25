import pino from 'pino';

import { APP_ENV, PINO_LOG_LEVEL } from '@/config/constants';

const pino_pretty_transport = {
  target: 'pino-pretty',
  options: {
    colorize: true,
    translateTime: 'HH:MM:ss Z',
    ignore: 'pid,hostname',
  },
};

const stdout_transport = {
  target: 'pino/file',
  options: {
    destination: 1,
  },
};

const customLevels = {
  emerg: 80,
  alert: 70,
  crit: 60,
  error: 50,
  warn: 40,
  notice: 30,
  info: 20,
  debug: 10,
};

const logger = pino(
  {
    transport: APP_ENV === 'dev' ? pino_pretty_transport : stdout_transport,

    level: PINO_LOG_LEVEL,
    customLevels,
    useOnlyCustomLevels: true,

    base: null,
    redact: {
      paths: [
        // 'name',
        // 'address',
        // 'passport',
        // 'phone',
        // 'user.name',
        // 'user.address',
        // 'user.passport',
        // 'user.phone',
        // '*.user.name', // * is a wildcard covering a depth of 1
        // '*.user.address',
        // '*.user.passport',
        // '*.user.phone',
      ],
      censor: '[REDACT]',
    },
    timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
  },
);

export default logger;
