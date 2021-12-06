import React, { useState } from 'react';
import { getCartProducts } from '../databaseCart';

const Cart = ({ history }) => {
	const [cartProducts, setcartProducts] = useState(getCartProducts());

	const handleBack = () => {
		history.replace('/products');
	};
	return (
		<div>
			{/* if the userId in databaseCart = the id of user who is login
            and the date in databsaeCart is today */}
			<table className="table">
				{cartProducts
					.filter(
						(cartProduct) =>
							cartProduct.userid == '1001' && cartProduct.date == 'Nov-30-20'
					)
					.map((filterCart, index) => (
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
										// onClick={() => onUpdate(filterCart)}
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
										// onClick={() => onUpdate(filterCart)}
									>
										+
									</button>
								</div>

								{/* remove button  */}
								<div class="col">
									<button
										className="btn btn-danger btn-sm"
										// onClick={() => onDelete(filterCart)}
									>
										Remove
									</button>
								</div>

								{/* show quantity multiple unit price  */}
								<div class="col">Total: ${filterCart.payment}</div>
							</div>
						</div>
					))}
			</table>

			<h3>
				Your Total: it should show the total money that user need to pay. In
				this case, it is $1198.75
			</h3>

			{/* when user click this btn, it will go to all products page  */}
			<button class="btn btn-info" onClick={handleBack}>
				Continue shopping
			</button>
		</div>
	);
};

export default Cart;
