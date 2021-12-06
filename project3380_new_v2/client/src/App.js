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

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="conent">
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/cart" component={Cart} />
					<Route path="/productsDetails/:id?" component={ProductsDetails}/>
					<Route path="/products" render={(props)=><Products name="ProductName" {...props}/>}/>
					<Route path="/signin" component={SignIn}/>
					<Route path="/signup" component={SignUp}/>
					<Route path="/not-found" component={Notfound}/>
					<Route path="/" exact component={Home} />
					<Redirect from="/contactus" to="/About"/>
					<Redirect to="not-found"/>
				</Switch>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
