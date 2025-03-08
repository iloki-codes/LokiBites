import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import uploadRouter from './routers/upload.router.js';

import { dbconnect } from './config/database.config.js';
import path, { dirname } from 'path';

dotenv.config();
dbconnect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://food-delivery-platform-bites.netlify.app/api", "http://localhost:3000/api", "https://lokibites.onrender.com/api"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);

const publicFolder = path.join(__dirname, './build');
app.use(express.static(publicFolder));

app.get("/", (req, res) => {
    res.send({
      activeStatus: true,
      error: false
    });
});

app.get('*', (req, res) => {
  const indexFilePath = path.join(publicFolder, 'index.html');
  res.sendFile(indexFilePath);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
