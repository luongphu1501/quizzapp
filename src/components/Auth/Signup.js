import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postSignup } from "../../services/apiServices";
import './Signup.scss'
const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }
    const handleSignup = async (email, username, password) => {
        if (!validateEmail(email)) {
            toast.error("Email is invalid")
            return;
        }
        if (password === "") {
            toast.error("Please fill the password field");
            return;
        }
        let data = await postSignup(email, username, password);
        console.log(data);
        if (data && data.EC === 0) {
            toast.success(data.EM)
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
        navigate('/login')
    }
    return (
        <div className="sign-in-container">
            <div className="title">Sign in a account</div>
            <div className="email-input">
                <label htmlFor="email-signed">Email</label>
                <br />
                <input type={'text'} id="email-signed" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="username-input">
                <label htmlFor="username-signed">Username</label>
                <br />
                <input type={'text'} id="username-signed" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="password-input">
                <label htmlFor="password-signed">Password</label>
                <div className="password-field">
                    <input type={showPassword ? "password" : "text"} id="password-signed"
                        value={password} onChange={(event) => setPassword(event.target.value)}
                    />
                    {showPassword ? <FaEye onClick={() => togglePassword()} /> : <FaEyeSlash onClick={() => togglePassword()} />}
                </div>

            </div>
            <div className="btn-container">
                <button className="btn-signup" onClick={() => { handleSignup(email, username, password) }}>
                    Sign up
                </button>

            </div>
            <div className="footer">
                <span className="back-homepage" onClick={() => navigate('/')}>
                    Back to Home Page
                </span>
                <br />
                <span className="back-login" onClick={() => navigate('/login')}>
                    Back to Login Page
                </span>
            </div>
        </div>
    )
}
export default Signup;