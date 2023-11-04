import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router';


function App() {
  return (
    <div className="App">
      <div class="container">
      <Nav />
      <Outlet />
      </div>
    </div>
  );
}

export default App;
