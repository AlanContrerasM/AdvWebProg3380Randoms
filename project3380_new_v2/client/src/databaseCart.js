const cartProducts = [
	{
		userid: '1001',
		userName: 'Jame',
		title: 'Corsair Vengeance LPX 32GB DDR4 SDRAM Memory Modul',
		quantity: 3,
		price: 212.92,
		payment: 638.76,
		date: 'Nov-30-20',
	},
	{
		userid: '1001',
		userName: 'Jame',
		title:
			'Nvidia Quadro M4000 8GB GDDR5 256-bit PCI Express 3.0 x16 Full Height Video Card with Rear Bracket',
		quantity: 1,
		price: 559.99,
		payment: 559.99,
		date: 'Nov-30-20',
	},
	{
		userid: '1001',
		userName: 'Jame',
		title:
			'Yeston RX6800XT-16G D6 YA Gaming Graphics Card with 16G/256bit/GDDR6 Memory Dual Light Effect Mode DP+HD+Type-C Output Ports',
		quantity: 1,
		price: 2601,
		payment: 2601,
		date: 'Nov-29-20',
	},
	{
		userid: '1002',
		userName: 'John',
		title:
			'Nvidia Quadro M4000 8GB GDDR5 256-bit PCI Express 3.0 x16 Full Height Video Card with Rear Bracket',
		quantity: 2,
		price: 559.99,
		payment: 1119.98,
		date: 'Nov-15-20',
	},
];

export function getCartProducts() {
	return cartProducts;
}
