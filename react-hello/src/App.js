import logo from './logo.svg';
import './styles.css';
import Header from './componentspart1/header';
import Footer from './componentspart1/footer';
import Note from './componentspart1/note';

function App() {
  return (
    <div className="App">
      <Header name="Notes App" />
      <Note/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
