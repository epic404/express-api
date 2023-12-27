import express from 'express';
import setRoutes from './routes';

const app = express();

setRoutes(app);

app.listen(3000, () => console.log('Listening on port 3000'));