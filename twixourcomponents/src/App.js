import stemImage from './stem.jpeg';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={stemImage} className="App-logo" alt="logo" />
        
      </header>
      
    </div>
    <h1 className="twixourText">
    At TWIXOUR, innovation thrives.
  </h1>
  <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
  </>
  );
}

export default App;
