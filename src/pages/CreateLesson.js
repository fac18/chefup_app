import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CreateNewLesson from '../components/CreateLesson/CreateNewLesson'
import './pages_css/aboutpage.css';

const CreateLesson = () => {
    return (
        <div className="bkg">
            <Header />
            <div className="container">
            <CreateNewLesson />
            </div>
            <Footer />
        </div>
    )
}

export default CreateLesson
