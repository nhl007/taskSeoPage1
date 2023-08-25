//!imports package
import express from 'express';
import cors from 'cors';
import uploadRouter from './routes/upload.route.js';

//! app
const app = express();

const whitelist = process.env.WHITELIST;

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(
  express.json({
    limit: '50mb',
  })
);

//!routes
app.get('/', (req, res) => {
  res.send({
    projectName: 'Job Assignment Api',
  });
});

app.use('/api/v1', uploadRouter);

export default app;
