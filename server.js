import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './routers/jobRouter.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/jobs', router);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => console.log(`PORT: ${port}`));
} catch (error) {
  console.log(error);
  process.exit();
}
