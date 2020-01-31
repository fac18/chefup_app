import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './pages_css/aboutpage.css';


const ProfilePage = () => {
    return (
        <div className="bkg">
            <Header />
            <div className="container">
            <p>Name: Renata</p>
            <p>I like lasagna</p>
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage
