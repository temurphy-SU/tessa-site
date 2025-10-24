import logo from './logo.svg';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <a href="index.html">Home</a>
            <a href="skills.html">St. Lucia</a>
            <a href="contact.html">Geography</a>
            <a href="contact.html">Plantations</a> 
      </header> */}
            {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">St. Lucia</a>
            <a href="#" className="nav-link">Geography</a>
            <a href="#" className="nav-link">Plantations</a>
          </div>
          <button className="cta-button">Get in Touch</button>
        </div>
      </nav>

                    <HomePage />
    </div>
  );
}

export default App;
