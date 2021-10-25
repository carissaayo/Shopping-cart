require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const ProductRoutes = require('./routes/ProductRoutes')
connectDB();

const app = express();
app.use(express.json());

app.use('/api/products', ProductRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever listening on ${PORT}`));
