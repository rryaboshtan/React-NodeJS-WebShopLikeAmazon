import express from 'express';
import asyncHandler from 'express-async-handler';
// import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/',
    asyncHandler(async (req, res) => {
        // await Product.deleteMany();
        const products = await Product.find({});

        res.send({ products });
    }));

productRouter.get('/seed',
    asyncHandler(async (req, res) => {
        // await Product.deleteMany();
        const createdProducts = await Product.insertManyfind({});

        res.send({ createdProducts });
    }));

productRouter.get('/:id',
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product)
            res.send(product)
        else
            res.status(404).send({ message: 'Product Not Found' });
    }));

export default productRouter;