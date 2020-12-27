import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="g-signin2"  data-theme="dark"></div>
      </header>
    </div>
  );
}

export default App;
