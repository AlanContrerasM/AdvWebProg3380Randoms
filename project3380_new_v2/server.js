const cors = require('cors');
const express = require('express');
const cookieParser = require("cookie-parser");
const {connect} = require('mongoose');
//bring in app constant
const {DB, PORT} = require('./config');
//dumy products getter
const {createDummyProducts} = require("./controllers/productController.js");
const {getWeather} = require("./utils/weather");



//create app
const app = express();

//extra mw

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'DELETE','OPTIONS', 'HEAD'],
    credentials: true
  }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//For authentication
const passport = require('passport');
//Stuff we need
app.use(cookieParser());
app.use(passport.initialize());
require('./middlewares/passport')(passport);


//these are our routes
app.use('/api/v1/users', require('./routes/users'));

app.use('/api/v1/products', require('./routes/products'));



const initializeApp = async () => {

    try{
        await connect(DB);
        console.log(`DB is connected and ready \n ${DB}`);
        //check if products are existing and add them if not, create user yana@yana.com password yana

        //checks if there are products in database and creates them if not.
        createDummyProducts();

        const port = PORT ?? 5000;
        app.listen(port, ()=>{
            console.log(`listening on port: ${port}`)
        })

    } catch (err){
        console.log(err);
    }
    
};

initializeApp();

app.get("/api/v1/weather", getWeather);


