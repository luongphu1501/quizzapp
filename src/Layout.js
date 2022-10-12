import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomeComponent from './components/Home/HomeComponent';
import DashBoard from './components/Admin/Content/DashBoard';
import ManagerUser from './components/Admin/Content/ManagerUser';
import Login from './components/Auth/Login';
import App from './App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./components/Auth/Signup";
const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomeComponent />} />
                    <Route path="/user" element={<User />} />
                </Route >
                <Route path="/admin" element={<Admin />} >
                    <Route index element={<DashBoard />} />
                    <Route path='manage-user' element={<ManagerUser />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}
export default Layout