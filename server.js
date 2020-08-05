

    
// this file will implement the backend. some libraries will be installed:
//  express will be used as a web server
// body-parser will be used to parse the data inside the post request to the server
// mongoose connects us to the mongodb database
// shortid is a library to create user friendly id to be saved as a product id
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

// run express as a function, and set result in an app variable
// call the json() function of the bodyParser object
const app = express();
app.use(bodyParser.json());

// initialize mongoose database. connect has 2 parameters:
// first = url of connection to the Mongoose database 
// second = options
mongoose.connect("mongodb://localhost/chinese-auction-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// define the Product model. 
// mongoose.model is responsible for creating a model.
// it accepts 2 parameters: the name of the collection inside the database, 
// and a list of fields in this model
//
const Product = mongoose.model(
    "products",
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        description: String,
        image: String,
        price: Number,
        availableSeasons: [String],
    })
);
    
// define end point, go inside products API and get the list of products from database. 
// if find has no parameters, it means that there are no conditions, it will return all products.
// find is a promise, so to get the real data, await is used.
// res.send(products) will send the data to the client, 
app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});
    
// create a new product inside the database
// req.body will have the data of the new product
app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

// delete a product
app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

// listen to a port and launch the server
// use process.env.Port, a special variable that sets the port number, or the default 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
