const {Schema, model} = require('mongoose');

const cartSubSchema = new Schema({
    _id:{
        type: Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    quantity:{
        type: Number, 
        required: true
    }
  });

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    }, 

    password: {
        type: String,
        required: true
    },
    //array of cart including product id
    cart: [{
        type: cartSubSchema
      }]
}, {
    timestamps: true
});

module.exports = model('users', UserSchema);