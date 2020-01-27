import React from 'react';
import './homePageHeader.css';
import { ReactComponent as HomePageLogo } from '../../icons/logoImageWhite.svg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


const HomePageHeader = () => {
    return (
        <div className='homePageHeader'>
            <nav>
                <ul className='nav'>
                    <li>
                        <Link to="/AboutPage">About Us</Link>
                    </li>
                    <li>
                        <Link to="/LoginPage">Login</Link>
                    </li>
                    <li>
                        <Link to="/signUp">Sign Up</Link>
                    </li>
                </ul>
            </nav>
            <HomePageLogo />
            <p>Find a local chef and level up your cooking skills!</p>
        </div>
    )
}

export default HomePageHeader
