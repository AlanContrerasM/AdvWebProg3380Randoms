const Product = require('../models/Product');

// title: {
//     type: String, 
// },
// description:{
//     type: String,
// },
// url:{
//     type: String,
// },
// numberInStock:{
//     type: Number,
// },
// price:{
//     type: Number,
// },
// topseller:{
//     type: Boolean,
// }, 
// newProduct:{
//     type: Boolean,
// }

// Create and Save a new product
exports.create = async (req, res) => {

    try{
        const {title, description, url, numberInStock, price, topSeller, newProduct} = req.body;
        
        const addProduct = new Product({
            title,
            description,
            url,
            numberInStock,
            price, 
            topSeller,
            newProduct
        });

        await addProduct.save();
        
        return res.status(201).json({
            message: "Event was created",
            success: true,
            addProduct
        });

    }catch(err){
        console.log(err);
        res.status(400).send({err, message: "wrong data sent to create new event"});

    }
    
};


// "/"
exports.findAll = async (req, res) => {
    try{
        

        const products = await Product.find();
        
        return res.status(200).json({
            message: "Products are sent",
            success: true,
            products
        });

    }catch(err){
        console.log(err);
        res.status(400).send({err, message: "soemthing wrong with request"});

    }
  
};


// Find a single Product with an id
exports.findOne = async (req, res) => {
    
    try{
        const {id} = req.params;

        let product = await Product.findById(id);

        return res.status(200).json({
            message: "product obtained",
            success: true,
            product
        });
        
        

    }catch(err){
        console.log(err);
        res.status(400).send({err, message: "wrong request"});

    }
};



// Delete all Tutorials from the database.
exports.deleteAll = async (req, res) => {

    try{
        const products = await Product.deleteMany({});

        return res.status(200).json({
            message: "products deleted",
            success: true,
            products
        });
        
        

    }catch(err){
        console.log(err);
        res.status(400).send({err, message: "wrong request"});

    }
  
};


exports.createDummyProducts = async () =>{

    try{

        const count = await Product.count();
        //if populated dont do anything
        if(count){
            console.log("database populated")
            return ;
        }
        console.log("populating database");
        products.forEach(async (product)=>{
            const {title, description, url, numberInStock, price, topSeller, newProduct} = product;
        
            const addProduct = new Product({
                title,
                description,
                url,
                numberInStock,
                price, 
                topSeller,
                newProduct
            });

            await addProduct.save();
        })
        console.log("done populating database with products")

    }catch(err){
        console.log("dummy database creation unsuccesful" , err);
    }

}


const products = [
	{
		_id: '101',
		url: 'https://i5.walmartimages.com/asr/3e3a87a2-4f59-4315-96ef-74da0a5f9aad.63699fbda9972247ca9984913e8e307e.jpeg',
		title: 'Corsair Vengeance LPX 32GB DDR4 SDRAM Memory Modul',
		description:
			"The DDR4 form factor is optimized for the latest DDR4 systems and offers higher frequencies, greater bandwidth, and lower power consumption than DDR3 modules. VENGEANCE LPX DDR4 modules are compatibility-tested across DDR4 systems for reliably fast performance. There's XMP 2.0 support for trouble-free automatic overclocking. And, they're available in multiple colors to match your personal preference",
		numberInStock: 5,
		price: 212.92,
		topSeller: true,
		newProduct: false,
		buy: false,
	},
	{
		_id: '102',
		url: 'https://i5.walmartimages.com/asr/faa9a6df-08e3-44a6-8926-d0867b98a3f2_1.16f61991a745d96ae8d0d06c8c1b05c8.jpeg',
		title: 'Corsair 8GB DDR3 SDRAM Memory Module',
		description:
			'Corsair 8GB DDR3 SDRAM Memory Module - 8 GB - DDR3 SDRAM - 1333 MHz DDR3-1333/PC3-10666 - Non-ECC - Unbuffered - 204-pin - SoDIMM',
		numberInStock: 4,
		price: 117.99,
		topSeller: true,
		newProduct: false,
		buy: false,
	},
	{
		_id: '103',
		url: 'https://i5.walmartimages.com/asr/ba27f881-35c2-4fb7-b2d2-10c0666d7563_1.b9ccb0421f061cd4480af8ed8134ee4f.jpeg',
		title:
			'Nvidia Quadro M4000 8GB GDDR5 256-bit PCI Express 3.0 x16 Full Height Video Card with Rear Bracket',
		description:
			'Digital Resolution: 4096 x 2160 | Analog Resolution: 2048 x 1536@85Hz | Memory: 8GB 256-bit GDDR5 | Ports: 4xDisplayport v1.2',
		numberInStock: 2,
		price: 559.99,
		topSeller: true,
		newProduct: false,
		buy: false,
	},
	{
		_id: '104',
		url: 'https://i5.walmartimages.com/asr/25bc9aeb-c36d-4ab3-a737-333b0af9cbf9.609fe0a8c0a34de6f51b56d526908e67.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
		title:
			'Yeston RX6800XT-16G D6 YA Gaming Graphics Card with 16G/256bit/GDDR6 Memory Dual Light Effect Mode DP+HD+Type-C Output Ports',
		description: '16G/256bit/GDDR6 memory, 16GHz memory clock frequency',
		numberInStock: 5,
		price: 2601,
		topSeller: false,
		newProduct: true,
		buy: false,
	},
	{
		_id: '105',
		url: 'https://i5.walmartimages.com/asr/798c1c3e-c724-4e77-ba68-2deaa2cbfd67.ce8d56990ca0bc2406a8d8c36740ea62.jpeg',
		title: 'AMD Athlon XP 2600 333MHz 256KB Socket A CPU',
		description:
			'CPU runs at 2.083 GHz and has a 256 KB L2 cache and a 333 MHz front side bus',
		numberInStock: 1,
		price: 2199.02,
		topSeller: false,
		newProduct: true,
		buy: false,
	},
	{
		_id: '106',
		url: 'https://i5.walmartimages.com/asr/20166c1a-20e3-4c63-8c04-ec936e8b125f_1.d060e9f5d47c4ca71ecf4aa7a7efb7d0.jpeg',
		title:
			'Nvidia Quadro 6000 6GB GDDR5 384-bit PCI Express 2.0 x16 Full Height Video Card',
		description:
			'Digital Resolution: 2560x1600 | Interface: PCI Express 2.0 x16, Full Height | Graphics APIs: DirectX 11, OpenGL 4.4',
		numberInStock: 5,
		price: 501.45,
		topSeller: false,
		newProduct: true,
		buy: false,
	},
];