import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


const Cart = ({user, products}) => {
	const history = useHistory();
	const [cartProducts, setCartProducts] = useState(null);

	async function getCart(){
		try{
			if(!user.loggedIn){
				history.push('/signin');
			}
			const resp = await axios.get("http://localhost:5000/api/v1/users/cart",{
				headers: {
				  'Content-Type': 'application/json'
				},
				 withCredentials: true });
			setCartProducts(resp.data.cart);

			
		}catch(err){
		  console.log(err);
		}
	}

	async function updateCartQuantity(product, quantity){
		try{
			await axios.put("http://localhost:5000/api/v1/users/cart",{_id: product._id, quantity }, {
				headers: {
				  'Content-Type': 'application/json'
				},
				 withCredentials: true });

			//get updated cart
			getCart();
		}catch(err){
		  console.log(err);
		}
	}

	async function deleteCartItem(_id){
		try{
			await axios.delete("http://localhost:5000/api/v1/users/cart" + _id,{
				headers: {
				  'Content-Type': 'application/json'
				},
				 withCredentials: true });

			//get updated cart
			getCart();
		}catch(err){
		  console.log(err);
		}
	}



	const handleBack = () => {
		history.push('/products');
	};

	useEffect(()=>{getCart()}, []);

	
	if(!cartProducts){
		return "loading";
	}else{
	const populatedCart = cartProducts.map((product) => {
							
		products.forEach(prod=>{
			if(product._id == prod._id){
				product = {...product, title: prod.title, description: prod.description, price:prod.price };
			}
		});
		return product;
	});
		
	const total = populatedCart.reduce((acumulator, current)=>{
		return acumulator + (current.price *current.quantity);
	},0)

	return (
		<div>
			<table className="table">
				{populatedCart.map((filterCart, index) => (
						<div key={index} class="container">
							<div key={index} class="row">
								<div class="col">
									{filterCart.title}
									<br />
									<b>Unit price: ${filterCart.price}</b>
								</div>
								<div class="col">
									{/* minus quantity btn  */}
									<button
										className="btn btn-warning btn-sm"
										onClick={() => updateCartQuantity(filterCart, filterCart.quantity -1)}
									>
										-
									</button>

									{/* show quantity of the product  */}
									<button
										className="btn btn-outline-none"
										// onClick={() => onUpdate(filterCart)}
									>
										{filterCart.quantity}
									</button>

									{/* add quantity button  */}
									<button
										className="btn btn-warning btn-sm"
										onClick={() => updateCartQuantity(filterCart, filterCart.quantity +1)}
									>
										+
									</button>
								</div>

								{/* remove button  */}
								<div class="col">
									<button
										className="btn btn-danger btn-sm"
										onClick={() => deleteCartItem(filterCart._id) } 
									>
										Remove
									</button>
								</div>

								{/* show quantity multiple unit price  */}
								<div class="col">Total: ${filterCart.price * filterCart.quantity}</div>
							</div>
						</div>
					))}
			</table>

			<h3>
				Your Total: it should show the total money that user need to pay. In
				this case, it is ${total}
			</h3>

			{/* when user click this btn, it will go to all products page  */}
			<button class="btn btn-info" onClick={handleBack}>
				Continue shopping
			</button>
			
		</div>
	);

	}
	

}
export default Cart;
