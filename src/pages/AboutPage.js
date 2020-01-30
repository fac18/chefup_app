import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ReactComponent as Diamond1 } from "../icons/diamond-1.svg";
import { ReactComponent as Diamond2 } from "../icons/diamond-2.svg";
import { ReactComponent as Diamond3 } from "../icons/diamond-3.svg";
import "./pages_css/aboutpage.css"


const AboutPage = () => {
    return (
        <div className="bkg" >
            <Header />
            <div className="container">
                <h3 className="aboutus-header">All about us</h3>
                <p className="introductory-paragraph" >Like the smell of what your neighbours are cooking? Why not invite them around to teach you how to cook!<br />Don't know your bake from your broil or your saute from your steam? Learn how to cook authentically with a local chef that shows you what the recipes do not.<br/>Chef Up is a way to level up your cooking skills like never before. Learn new home cooking styles in your own home. Be ready to impress your friends, eat healthier and save money in the long run.</p>
                <h3>How it works</h3>
                <Diamond1 />
                <p className="diamond-paragraph">Student finds a recipe they would like to learn.</p>
                <Diamond2 />
                <p className="diamond-paragraph">Student completes a form to contact local chef on availability.</p>
                <Diamond3 />
                <p className="diamond-paragraph">Chef confirms availability and arranges payment plan. Booking confirmed.</p>
                <h3>General guidelines</h3>
                <ul className="guidelines">
                    <li>As a student, you will invite the local chef into your home.</  li>
                    <li>As a student, you will conduct most, if not all, of the     cooking with the guidance of your chef.</li>
                    <li>As a chef, you will travel to the student's home and teach  them how to cook your recipe.</li>
                    <li>As a chef, you will also purchase all the ingredients   necessary for the recipe. Costs are built into the lesson price.</    li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage

