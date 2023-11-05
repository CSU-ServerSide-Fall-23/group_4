import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div class="grayc">
      <div class="container redc">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default App;
