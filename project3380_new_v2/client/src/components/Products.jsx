import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { getProducts } from '../databaseProducts';
import Productdetails from './ProductsDetails';

const Products = ({ products }) => {


	return (
		<div class="row">
			{products.map((product) => (
				<div key={product._id} class="card" style={{ width: '33%' }}>
					<div class="card-body">
						{/* show picture of product  */}
						<img src={product.url} class="card-img-top" alt="..." />
						{/* show name of products. when user click to the name, it will navigate to productDetails page  */}
						<h5 class="card-title">
							<Link to={`/productsDetails/${product._id}`}>
								{product.title}
							</Link>
						</h5>
						{/* show the price  */}
						<h6 class="card-subtitle mb-2 text-muted">
							Price: ${product.price}
						</h6>
						<br /> <br />
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
