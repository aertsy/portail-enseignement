import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { Link } from 'react-router-dom';

function App() {
  return (
  <>
    <Menu />
    <h1>Accueil</h1>
    <div className="App">
      
      <p className="texteAccueil">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nam, corrupti ipsa eius unde illo porro. Numquam ducimus laboriosam excepturi.</p>
    </div>
  </>
  );
}

export default App;
