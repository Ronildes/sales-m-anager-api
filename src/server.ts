import express from 'express';
import cors from 'cors';
import localTunnel from 'localtunnel';

import routes from './routes/index';

import './database/index';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333, async () => {
  const tunnel = await localTunnel({ port: 3333, subdomain: 'ronildes' });
  console.log(`URL server: ${tunnel.url}`);

  console.log('Server is online in port 3333');
});
