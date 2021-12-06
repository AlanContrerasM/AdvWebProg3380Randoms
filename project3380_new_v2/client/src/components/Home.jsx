import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../images/header.jpg';
import { getProducts } from '../databaseProducts';

const Home = () => {
	const [products, setProducts] = useState(getProducts());

	return (
		<div>
			{/* show header image  */}
			<img src={Header} alt="Header Image" width="100%" height="300px" />

			{/* show top seller products  */}
			<h1>
				<span className="badge bg-primary">&#10020; Top Seller &#10020; </span>
			</h1>
			<div class="row">
				{products
					.filter((product) => product.topSeller == true)
					.map((filterTopSeller) => (
						<div class="card" style={{ width: '33%' }}>
							<div class="card-body">
								<img src={filterTopSeller.url} class="card-img-top" alt="..." />
								<h5 class="card-title">
									<Link to={`/productsDetails/${filterTopSeller._id}`}>
										{filterTopSeller.title}
									</Link>
								</h5>
								<h6 class="card-subtitle mb-2 text-muted">
									Price: ${filterTopSeller.price}
								</h6>
								<br /> <br />
							</div>
						</div>
					))}
			</div>

			{/* show new products  */}
			<h1>
				<span className="badge bg-primary">&#10020; New Products &#10020;</span>
			</h1>
			<div class="row">
				{products
					.filter((product) => product.newProduct == true)
					.map((filterNewProduct) => (
						<div class="card" style={{ width: '33%' }}>
							<div class="card-body">
								<img
									src={filterNewProduct.url}
									class="card-img-top"
									alt="..."
								/>
								<h5 class="card-title">
									<Link to={`/productsDetails/${filterNewProduct._id}`}>
										{filterNewProduct.title}
									</Link>
								</h5>
								<h6 class="card-subtitle mb-2 text-muted">
									Price: ${filterNewProduct.price}
								</h6>
								<br /> <br />
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Home;
