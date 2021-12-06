const {Schema, model} = require('mongoose');

//   _id: '101', created automatically
//   url: 'https://i5.walmartimages.com/asr/3e3a87a2-4f59-4315-96ef-74da0a5f9aad.63699fbda9972247ca9984913e8e307e.jpeg',
//   title: 'Corsair Vengeance LPX 32GB DDR4 SDRAM Memory Modul',
//   description:
//       "The DDR4 form factor is optimized for the latest DDR4 systems and offers higher frequencies, greater bandwidth, and lower power consumption than DDR3 modules. VENGEANCE LPX DDR4 modules are compatibility-tested across DDR4 systems for reliably fast performance. There's XMP 2.0 support for trouble-free automatic overclocking. And, they're available in multiple colors to match your personal preference",
//   numberInStock: 5,
//   price: 212.92,
//   topSeller: true,
//   newProduct: false,
//   buy: false, //not needed this is for cart?

const ProductSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    numberInStock:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    topSeller:{
        type: Boolean,
        required: true
    }, 
    newProduct:{
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('products', ProductSchema);