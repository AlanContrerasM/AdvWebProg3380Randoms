import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';

const NavBar = ({user}) => {
	// set the style
	const style = {
		textAlign: 'right',
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-primary">
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					{/* show logo of company  */}
					<li className="nav-item-active">
						<Link className="nav-link" to="/">
							<img src={Logo} alt="Header Image" width="30" height="24" />
						</Link>
					</li>

					{/* homePage tab */}
					<li className="nav-item-active">
						<Link className="nav-link" to="/">
							<b>Laroma</b> <span className="sr-only"></span>
						</Link>
					</li>

					{/* all products tab  */}
					<li className="nav-item">
						<Link className="nav-link" to="/products">
							<b>All Products</b>
						</Link>
					</li>

					{/* about tab  */}
					<li className="nav-item">
						<Link className="nav-link" to="/about">
							<b>About</b>
						</Link>
					</li>

					{/* signIn tab  */}
					<li className="nav-item">

						{!user.loggedIn ? 
						<Link className="nav-link" to="/signin">
							<b>Sign In</b>
						</Link>
						:
						<Link className="nav-link" to="/signin">
							<b>Log Out: {user.userEmail}</b>
						</Link>
						}
						
					</li>

					{/* cart tab  */}
					<li className="nav-item">
						<Link className="nav-link" to="/cart">
							<b>Cart</b>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default NavBar;
