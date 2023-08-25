import 'dotenv/config';

import app from './app.js';
import connectDatabase from './config/connectDatabase.js';

//!connect database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `> Server is up and running on port:${process.env.PORT} in ${
      '{' + process.env.NODE_ENV + '}'
    } mode < `
  );
});

process.on('unhandledRejection', (err) => {
  console.log('Shutting down the server due to: ' + err.message);
  server.close(() => {
    process.exit(1);
  });
});
