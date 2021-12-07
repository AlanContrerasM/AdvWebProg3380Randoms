//import express from 'express';
//import data from './data.js';
const express =require('express');
//const data = require('/data.js');
const mongoose = require('mongoose');
const cors = require('cors');
const ProductModel = require('./models/productModel.jsx');
const Cart=require('./models/cartModel.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const url = "mongodb://localhost:27017/GiftShop";

app.get("/api/ProductsInfo/", async (req,res)=>{

  try{
      await mongoose.connect(url);
      //console.log("Database connected");
      ProductModel.find((err, products)=>{
          if(err) console.log(err);
          else {
              console.log("Esto viene desdes el server");
              //console.log(products);
              res.send(products);
              mongoose.connection.close();
          }
      })
  }
  catch(error){
      console.log(error);
  }
 
})

//CREATE DATA
app.post("/api/ProductsInfo", async (req,res)=>{
  try{
    

      const newProduct = new ProductModel({
          ...req.body
      });

      await mongoose.connect(url);
      console.log("Database connected");
      newProduct.save((err)=>{
         if(err){
             console.log(err); //maybe suring data validation no name etc...
             res.send(err);
         }
         else{
              console.log("The document inserted successfully");
              res.send(newProduct);
              mongoose.connection.close();
         }
     });
  }
  catch(error){
      console.log(error);
  }
})




app.get('/api/product/:id',async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  //this is not working
});


//UPDATE DATA
app.put("/api/product/:id", async (req,res)=>{
  try{
    console.log(req.params);
         let _id = req.params.id;
         _id = mongoose.Types.ObjectId(_id);
         console.log(_id);
         console.log(req.body);
         //const {countInStock} = req.body;
         //console.log(countInStock);
         await mongoose.connect(url);
          console.log("Database connected");
          ProductModel.updateOne(
             {_id: _id},
             {countInStock: req.body},
              (err)=>{
                  if(err){
                      console.log(err);
                      res.send(err);
                  }
                  else{
                       console.log("The item updated successfully");
                       res.send("The item updated successfully");
                       mongoose.connection.close();
                  }
              });
      }
  catch(error){
      console.log(error);
  }
});

//READ OPERATION
app.get("/api/cart", async (req,res)=>{

  try{
      await mongoose.connect(url);
      //console.log("Database connected");
      Cart.find((err, cartItem)=>{
          if(err) console.log(err);
          else {
              //console.log(cartItem);
              res.send(cartItem);
              //mongoose.connection.close();
          }
      })
  }
  catch(error){
      console.log(error);
  }
 
})
//CREATE DATA
app.post("/api/cart", async (req,res)=>{
  try{
    
      const {user, name,category,image,price,count,brand,description,countInStock} = req.body;
      console.log(user, name,category,image,price,count,brand,description,countInStock);
      const cartItem = new Cart({
        user:user, 
        name:name,
        category:category,
        image:image,
        price:price,
        count:count,
        brand:brand,
        description:description,
        countInStock:countInStock
      });

      await mongoose.connect(url);
      console.log("Database connected");
      cartItem.save((err)=>{
         if(err){
             console.log(err);
             res.send(err);
         }
         else{
              console.log("The item inserted successfully");
              res.send(cartItem);
              mongoose.connection.close();
         }
     });
  }
  catch(error){
      console.log(error);
  }
})

//UPDATE DATA
app.put("/api/cart/:id", async (req,res)=>{
  try{
    //console.log(req.params);
         let _id = req.params.id;
         _id = mongoose.Types.ObjectId(_id);
         console.log(_id);

         const {count} = req.body
         console.log(count);
         await mongoose.connect(url);
          console.log("Database connected");
          Cart.updateOne(
             {_id: _id},
             {count: count},
              (err)=>{
                  if(err){
                      console.log(err);
                      res.send(err);
                  }
                  else{
                       console.log("The item updated successfully");
                       res.send("The item updated successfully");
                       mongoose.connection.close();
                  }
              });
      }
  catch(error){
      console.log(error);
  }
});

//DELETE DATA
app.delete("/api/cart/:id", async (req,res)=>{
  try{
         let _id = req.params.id;
         _id = mongoose.Types.ObjectId(_id);
         console.log(_id);

       
         await mongoose.connect(url);
          console.log("Database connected");
         Cart.deleteOne(
             {_id: _id},
             (err)=>{
                  if(err){
                      console.log(err);
                      res.send(err);
                  }
                  else{
                       console.log("The item deleted successfully");
                       res.send("The item deleted successfully");
                       mongoose.connection.close();
                  }
              });
      }
  catch(error){
      console.log(error);
  }
});




// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });


// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and listening at port ${port}`);
});
