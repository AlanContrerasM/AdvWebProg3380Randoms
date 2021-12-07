const {userRegister, userLogin, userAuthorization, protectedUser} = require('../utils/Authorization');
const router = require('express').Router();
const users = require("../controllers/userController");



//users Registration route
router.post('/register', async(req, res) => {
    await userRegister(req.body, res);
})
//body containing email, password

//users login route, user user
router.post('/login', async(req, res) => {
    await userLogin(req.body, res);
})
//body containing email and password.

router.get('/signedin',userAuthorization,  async(req, res) => {
    res.status(200).send(protectedUser(req.user));
})
//just to confirm if user is signed in.


//needs user login to change their carts contents,
//get all cart contents
router.get('/cart', userAuthorization, users.getCart);

//add product id to user cart, body with product id 
router.post('/cart', userAuthorization, users.appendToCart);

//edit quantity for a product inside the cart, body with id and quantity
router.put('/cart', userAuthorization, users.updateProductQuantity);

//delete product from cart, body of id, could be param too
router.delete('/cart:id', userAuthorization, users.deleteFromCart);



router.get('/logout', async(req,res)=>{
    res.clearCookie('jwt');
    res.status(200).json({
        message: "Logged out was successful",
        success: true
    })
});


module.exports = router;