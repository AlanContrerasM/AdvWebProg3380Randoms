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
    await userLogin(req.body, 'user', res);
})
//body containing email and password.


//needs user login to change their carts contents,
//get all cart contents
router.get('/cart', userAuthorization, async(req, res) => {
    return res.json(protectedUser(req.user));
});

//add product id to user cart, body with product id 
router.post('/cart/', userAuthorization, async(req, res) => {
    return res.json(protectedUser(req.user));
});

//edit quantity for a product inside the cart
router.put('/cart/:id', userAuthorization, async(req, res) => {
    return res.json(protectedUser(req.user));
});



router.get('/logout', async(req,res)=>{
    res.clearCookie('jwt');
    res.status(200).json({
        message: "Logged out was successful",
        success: true
    })
});


module.exports = router;