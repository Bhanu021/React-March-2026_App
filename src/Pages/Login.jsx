import React, { useState } from "react";
import "../CSS/Login.css";
import { setAuth } from "../Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import PasswordLoad from '../Assets/Password.json'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch()
    const navigate  = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });


    const [loading, setLoading] = useState(false)
    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle button click / form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formData;

        // Basic validation
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        console.log("Login Data:", formData);

        // Dummy API simulation
        if (email === "admin@gmail.com" && password === "123456") {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                dispatch(setAuth(true))
                navigate('/home')
             window.location.reload()

            }, 2000)
        } else {
            setLoading(false)
            alert("Invalid Credentials ❌");
        }
    };
    return (
        <div className="login-container">
            <div className="login-card">

                {loading ?
                    <Lottie style={{ width: 200, height: 200 }} animationData={PasswordLoad} loop={true} />
                    :
                    <>
                        <h2 className="title">Login</h2>

                        <div className="input-group">
                            <label>Email</label>
                            <input value={formData.email} name="email" onChange={handleChange} type="email" placeholder="Enter your email" />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input value={formData.password} name='password' onChange={handleChange} type="password" placeholder="Enter your password" />
                        </div>

                        <button onClick={handleSubmit} className="login-btn">Login</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Login;