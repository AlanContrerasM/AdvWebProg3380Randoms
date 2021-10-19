import './styles.css';
import Header from './componentspart2/header';
import Footer from './componentspart2/footer';
import Note from './componentspart2/note';
import Notes from './notes';

function App() {
  console.log(Notes);
  return (
    <div className="App">
      <Header name="Notes App" />
      
      {Notes.map((note)=>{
        return(<Note key={note.key} note={note}/>);
      })
      }


      
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
