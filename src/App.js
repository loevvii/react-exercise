import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar.js';
import Profile from './components/profile.js'
import './components/css/profilestyle.css'

function App() {
  return (

    <div>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
