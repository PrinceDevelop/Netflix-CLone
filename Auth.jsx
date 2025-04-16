import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';  // Removed unused Navigate import
import SignIn from './signIn';
import SignUp from './signUp';
import ResetPassword from './ResetPassword';

const Auth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('signIn');

    // Redirect /auth to /auth/signin by default
    useEffect(() => {
        if (location.pathname === '/auth') {
            navigate('/auth/signin', { replace: true });
        } else if (location.pathname.includes('signin')) {
            setActiveTab('signIn');
        } else if (location.pathname.includes('signup')) {
            setActiveTab('signUp');
        }
    }, [location.pathname, navigate]);

    return (
        <div className="auth-wrapper">
            <div className="form-container">
                <div className="auth-tabs mb-3 text-center">
                    <button
                        className={`tab-btn ${activeTab === 'signIn' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab('signIn');
                            navigate('/auth/signin');
                        }}
                    >
                        Sign In
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'signUp' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab('signUp');
                            navigate('/auth/signup');
                        }}
                    >
                        Sign Up
                    </button>
                </div>

                <Routes>
                    <Route path="signin" element={
                        <SignIn
                            onResetClick={() => navigate('/auth/reset')}
                            onSignUpClick={() => {
                                setActiveTab('signUp');
                                navigate('/auth/signup');
                            }}
                        />
                    } />
                    <Route path="signup" element={
                        <SignUp
                            onSignInClick={() => {
                                setActiveTab('signIn');
                                navigate('/auth/signin');
                            }}
                        />
                    } />
                    <Route path="reset" element={
                        <ResetPassword
                            onBackClick={() => {
                                setActiveTab('signIn');
                                navigate('/auth/signin');
                            }}
                        />
                    } />
                </Routes>
            </div>
        </div>
    );
};

export default Auth;
