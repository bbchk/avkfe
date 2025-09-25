import './assets/styles/index.scss';

import './utils/dom.utils.js';

// TODO: introduce logging
// import logger from './config/logger.js';

import { Router } from './services/router/index.service.js';

window._app = {
  router: Router,
};

document.addEventListener('DOMContentLoaded', () => {
  window._app.router.init();
});


// TODO: implement all catchers below
// process.on('uncaughtException', (err) => {
//   // log the exception
//   logger.fatal(err, 'uncaught exception detected');
//   // shutdown the server gracefully
//   server.close(() => {
//     process.exit(1); // then exit
//   });
//
//   // If a graceful shutdown is not achieved after 1 second,
//   // shut down the process completely
//   setTimeout(() => {
//     process.abort(); // exit immediately and generate a core dump file
//   }, 1000).unref()
//   process.exit(1);
// });
//
//
// const cleanupSignals = ['SIGINT', 'SIGTERM', 'SIGTSTP', 'SIGQUIT']
// cleanupSignals.forEach((signal) => {
//   process.on(signal, () => {
//     ml.info(`Received ${signal}`)
//     cleanup(server)
//   })
// })
//
// process.on('unhandledRejection', (err) => {
//   ml.error(err.message)
//   cleanup(server, ERROR_EXIT_CODE)
// })
