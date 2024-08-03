import express from "express";
import productsRouter from "./routers/products";
import fileDb from "./fileDb";

const app = express();
const port = 8000;

// MiddleWare
app.use(express.json());
app.use('/products', productsRouter)


const run = async ()=>{
    await fileDb.init();

    app.listen(port, ()=>{
        console.log(`Server started on port ${port}`);
    });
}

run().catch(console.error);