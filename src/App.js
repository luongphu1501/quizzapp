import logo from './logo.svg';
import "./App.scss";
import Header from './components/Header/Header';
import { Link, Outlet } from "react-router-dom";
function App() {

  return (
    <div className='container'>
      <div className='header'>
        <Header />
      </div>
      <div className='main-content'>
        <div className='navbar'>

        </div>
        <div className='app-content'>
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default App;
