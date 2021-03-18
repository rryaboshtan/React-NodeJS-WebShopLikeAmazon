import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// app.get('/api/products', (req, res) => {
//     res.send(data);
// });


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find((x) => x._id === req.params.id);

//     if (product)
//         res.send(product)
//     else
//         res.status(404).send({ message: 'Product not found' })
// });

app.get('/', (req, res) => {
    res.send('Server is ready')
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
}
)