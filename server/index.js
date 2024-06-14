const products = require("./database/products")
const Product_model = require("./models/ProductsSchema")
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require ("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const Router=require ("./Routes/ApiRoutes");

dotenv.config(); // initialising dotenv
const userName = process.env.USER_DB;
const userPass = process.env.PASS_DB;
const app = express(); //creating instance
app.use(cors());

const PORT = process.env.PORT || 5003;
const URL = `mongodb+srv://${userName}:${userPass}@flipkartdb.dhsook9.mongodb.net/FLIPKART_DB?retryWrites=true&w=majority`;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

mongoose
  .connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(
    app.listen(PORT, () => console.log("The server is running on port", PORT))
  )
  .catch((error) => console.log(error));

  const DefaultData = async () => {
    try {
      await Product_model.insertMany(products.products);
      console.log("products inserted successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

DefaultData();
