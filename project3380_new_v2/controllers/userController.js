const Product = require('../models/Product');
const User = require('../models/User');
const {protectedUser} = require('../utils/Authorization');

//get cart contents, append product to cart, update quantity, delete product from cart
// Create and Save a new product
exports.appendToCart = async (req, res) => {

    try{
        const user = protectedUser(req.user);
        //body with product id 
        const {_id} = req.body;
       
        //append to user cart object with product id and quantity
        await User.findByIdAndUpdate(user._id,
            {$push: {"cart": {_id, quantity: 1}}},
            {safe: true, upsert: true, new : true});

        
        return res.status(201).json({
            message: "Product was added to cart",
            success: true,
            
        });

    }catch(err){
        console.log(err);
        res.status(400).send({err, message: "wrong data sent"});

    }
    
};


// "/"
exports.getCart = async (req, res) => {
    try{
        const {email, _id, cart} = protectedUser(req.user);
        
        return res.status(200).json({
            message: "Products are sent",
            success: true,
            cart
        });

    }catch(err){
        console.log(err);
        res.status(400).send({err, message: "something wrong with request"});

    }
  
};


// Find a single Product with an id
exports.updateProductQuantity = async (req, res) => {
    
    try{
        const user= protectedUser(req.user);
        const {_id, quantity} = req.body;

        const result = await User.updateOne(
            { _id: user._id, "cart._id": _id },
            { $set: { "cart.$.quantity" : quantity } }
         )
    
         return res.status(200).json({
            message: "Cart Updated",
            success: true,
        });
        

    }catch(err){
        console.log(err);
        res.status(400).send({err, message: "wrong request"});

    }
};



// Delete all Products
exports.deleteFromCart = async (req, res) => {

    try{
        const user = protectedUser(req.user);
        const {id} = req.params;

        await User.updateOne(
            { _id: user._id }, 
            { $pull: { cart: { _id: id } } },
            {upsert: true, multi : true}
        );

        return res.status(200).json({
            message: "Cart Updated",
            success: true,
        });

    }catch(err){
        console.log(err);
        res.status(400).send({err, message: "wrong request"});

    }
  
};

