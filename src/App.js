import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar.js';
import Profile from './components/profile.js'
import './components/css/profilestyle.css'
import Portfolio from './components/portfolio.js';

function App() {
  return (

    <div>
      <Navbar/>
      <Profile/>
      <Portfolio/>
    </div>
  );
}

export default App;
