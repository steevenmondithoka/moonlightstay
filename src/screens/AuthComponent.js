import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const AuthComponent = () => {
    const [step, setStep] = useState('register'); // Possible values: 'register', 'otp', 'login'
    const [formData, setFormData] = useState({
        username:'',
        email: '',
        password: '',
        confirmPassword: '',
        otp: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/send-otp', {
                email: formData.email,
            });
            if (response.status === 200) {
                setStep('otp'); // Move to OTP input step
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/verify-otp', {
                otp: formData.otp,
            });
            if (response.status === 200) {
                Swal.fire('Otp Verified Sucessfully', '', 'success')
                    window.location.href = '/home'
                
                
                setStep('login'); // Move to login step
            }
        } catch (error) {
            alert('Invalid OTP');
        }
    };

    return (
        <div className="auth-container">
            {step === 'register' && (
                <div className="auth-box">
                    <h2>Register</h2>
                    <form onSubmit={handleRegisterSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Register</button>
                    </form>
                </div>
            )}

            {step === 'otp' && (
                <div className="auth-box">
                    <h2>Enter OTP</h2>
                    <form onSubmit={handleOTPSubmit}>
                        <input
                            type="text"
                            name="otp"
                            placeholder="Enter OTP"
                            value={formData.otp}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Verify OTP</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AuthComponent;
