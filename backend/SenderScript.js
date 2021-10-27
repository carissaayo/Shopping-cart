require('dotenv').config();
const productsData = require("./data/products");
const connectDB = require('./config/db');
const Product = require('./models/Products');

connectDB();
const importData = async()=>{
    try {
        await Product.deleteMany ({});
        await Product.insertMany(productsData);
        console.log("data imported successfully");
        process.exit()
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

importData();