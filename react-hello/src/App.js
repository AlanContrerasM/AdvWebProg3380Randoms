import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Products from './components/products';
import Events from './components/events';
import Dashboard from './components/admin/dashboard';
import EventDetails from './components/eventDetails';
import NotFound from './components/notFound';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <Switch> 
        <Route path="/eventdetails/:id" component={EventDetails}/>
        {/* to pass optional multiple params
          access them inside with props.match.params.name props.match.params.course
        */}
        <Route path="/about/:name?/:course?" component={About}/>
        <Route path="/contact">
          <Contact name="Contact prop" />
        </Route>
        {/* if we want to send props too, which include, history, location, match, etc. */}
        <Route path="/events" render={(props)=>{
            return(<Events name="EventName" {...props}/>)
          }}/>
        <Route path="/products" component={Products}/>
        <Route path="/admin" component={Dashboard}/>
        {/* .*/}
        <Route path="/" exact component={Home} />
        <Route path="/notfound" exact component={NotFound} />
        <Redirect from="/contactus" to="/contact"/>
        <Redirect to="not-found"/>

        </Switch>

      </div>
    </div>
  );
}

export default App;
