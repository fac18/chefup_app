import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SignUp from '../components/SignUp/SignUp';
import './pages_css/aboutpage.css';

const SignUpPage = () => {
    return (
        <div className="bkg">
            <Header />
            <div className="container">
            <SignUp />
            </div>
            <Footer />
        </div>
    )
}

export default SignUpPage;
