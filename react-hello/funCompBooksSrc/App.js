import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Books from './components/books';
import Form from './components/form';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Form />
      <Books/>
    </div>
  );
}

export default App;
