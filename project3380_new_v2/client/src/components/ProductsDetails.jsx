import React, { useState } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const Productdetails = ({products, user}) => {
	const params = useParams();
	const history = useHistory();


	async function addToCart(){
		try{
			if(!user.loggedIn){
				history.push('/signin');
			}
			const resp = await axios.post("http://localhost:5000/api/v1/users/cart", {_id: params.id},{
				headers: {
				  'Content-Type': 'application/json'
				},
				 withCredentials: true });
			console.log(resp.data);
			history.push('/cart');
			
		}catch(err){
		  console.log(err);
		}
	}


	return (
		<div>
			{/* {users
				.filter((user) => user.login == true)
				.map((filterUser) => {
					<h1>Welcome {filterUser.name}</h1>;
				})} */}
			{products
				.filter((product) => product._id == params.id)
				.map((filterProductDetail) => (
					<div keu={filterProductDetail._id} class="container">
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
								<button class="btn btn-info" onClick={addToCart}>
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
