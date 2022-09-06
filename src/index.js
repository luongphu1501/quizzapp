import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomeComponent from './components/Home/HomeComponent';
import DashBoard from './components/Admin/Content/DashBoard';
import ManagerUser from './components/Admin/Content/ManagerUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<HomeComponent />} />
        <Route path="/user" element={<User />} />
      </Route >
      <Route path="/admin" element={<Admin />} >
        <Route index element={<DashBoard />} />
        <Route path='manage-user' element={<ManagerUser />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

