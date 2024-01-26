import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import uploadRouter from './routes/uploadRoutes.js';

import rutinaRouter from './routes/rutinaRouter.js';
import notes from './routes/notes.js';
import userAdmNote from './routes/userAdmNote.js';
import userAdm from'./routes/userAdm.js';


dotenv.config();

mongoose
  .connect("mongodb+srv://eduardgamerx66:19631964EDD@cluster0.hsugtcw.mongodb.net/", {
    useNewUrlParser: true, 

    useUnifiedTopology: true 
  })
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get('/api/keys/google', (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || '' });
})

app.use('/api/upload', uploadRouter);
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/rutina', rutinaRouter);
app.use('/api/notes', notes);
app.use('/api/adm/notes', userAdmNote);
app.use('/api/adm/users',userAdm);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
