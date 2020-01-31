import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CreateNewLesson from '../components/CreateLesson/CreateNewLesson'
import './pages_css/aboutpage.css';
import './pages_css/createlesson.css';

const CreateLesson = () => {
    return (
        <div className="bkg">
            <Header />
            <div className="container">
            <h1 className="create-lesson-header">Create your own lesson</h1>
            <CreateNewLesson />
            </div>
            <Footer />
        </div>
    )
}

export default CreateLesson
