import { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices';
import { toast } from 'react-toastify';
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        let res = await postLogin(email, password);
        if (res && +res.EC === 0) {
            toast.success(res.EM);
            navigate('/');
        }
        if (res && +res.EC !== 0) {
            toast.error(res.EM);
        }
    }
    return (
        <div className='login-container'>
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button onClick={() => { navigate('/signup') }}>Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>
                QUIZZ APP
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who are you?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={'email'}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type={'password'}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className='forgot-password'>Forgot password</span>
                <div className='btn-login'>
                    <button onClick={() => handleLogin()}>Login</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}>Go to Homepage</span>
                </div>
            </div>
        </div>
    )
}
export default Login