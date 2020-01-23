import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Footer = () => {
    return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/createRecipe">Teach</Link>
                    </li>
                </ul>
            </div>
    )
}

export default Footer
