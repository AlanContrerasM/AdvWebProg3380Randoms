import React, { useState } from 'react';
import { getProducts } from '../databaseProducts';
import { getUsers } from '../databaseUser';

const Productdetails = ({ match, history }) => {
	const [products, setProducts] = useState(getProducts());
	// const [users, setUsers] = useState(getUsers());

	console.log(match);
	const handleCart = () => {
		// history.push("/events");
		history.replace('/cart');
	};
	return (
		<div>
			{/* {users
				.filter((user) => user.login == true)
				.map((filterUser) => {
					<h1>Welcome {filterUser.name}</h1>;
				})} */}
			{products
				.filter((product) => product._id == match.params.id)
				.map((filterProductDetail) => (
					<div class="container">
						<div class="row">
							{/* show picture of product  */}
							<div class="col-sm">
								<img
									src={filterProductDetail.url}
									class="card-img-top"
									alt="..."
								/>
							</div>

							{/* show name, price and button. 
							when button is clicked => id of product, name of product, price, userId and date (today)
							will go to databaseCart  */}
							<div class="col-sm">
								<h4 class="card-title">{filterProductDetail.title}</h4>
								<h5 class="card-subtitle mb-2 text-muted">
									Price: ${filterProductDetail.price}
								</h5>
								<br />
								<button class="btn btn-info" onClick={handleCart}>
									Buy it
								</button>
							</div>

							{/* show description of product  */}
							<div class="col-sm">
								<h3>Description: </h3>
								{filterProductDetail.description}
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default Productdetails;
