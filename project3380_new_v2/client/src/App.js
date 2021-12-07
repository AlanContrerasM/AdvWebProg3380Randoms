import './App.css';
import NavBar from './components/Navbar';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductsDetails from './components/ProductsDetails';
import Notfound from './components/Notfound';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
	// state for logged in
	const [user, setUser] = useState({loggedIn:false, userEmail: ""});
	const [products, setProducts] = useState(null);

	async function fetchData(){
		try{
			//get products
			const resp = await axios.get("http://localhost:5000/api/v1/products/")
			console.log(resp.data.products);
			setProducts(resp.data.products);

			//check if user is signed in 
			const signed = await axios.get("http://localhost:5000/api/v1/users/signedin", {
				headers: {
				  'Content-Type': 'application/json'
				},
				 withCredentials: true });
			console.log("user already signed in!, nice");
			setUser({loggedIn:true, userEmail: signed.data.email});
			

		}catch(err){
		  console.log(err);
		}
	  }
	
	
	  useEffect(() => {
		fetchData();
	  }, [])

	return (
		<div className="App">
			<NavBar user={user}/>
			<div className="conent">
				{!products ? "loading" : 
					<Switch>
						<Route path="/about" component={About} />
						{/* protected route */}
						<Route path="/cart" >
							{user.loggedIn ? <Cart user={user} products={products} /> : <Redirect to="/signin"/> }
						</Route>
						<Route path="/productsDetails/:id?" >
							<ProductsDetails products={products} user={user}/>
						</Route>
						<Route path="/products" >
							<Products name="ProductName" products={products}/>
						</Route>
						<Route path="/signin" >
							<SignIn setUser={setUser}/>
						</Route>
						<Route path="/signup" component={SignUp}/>
						<Route path="/not-found" component={Notfound}/>
						<Route path="/" exact >
							<Home products={products}/>
						</Route>
						<Redirect from="/contactus" to="/About"/>
						<Redirect to="not-found"/>
					</Switch>
				}
			</div>
			<Footer/>
		</div>
	);
}

export default App;
