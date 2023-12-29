import 'dotenv/config';
import express from 'express';
import { initRoutes } from './utils';

const app = express();

initRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});