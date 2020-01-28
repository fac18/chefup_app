import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CreateNewLesson from '../components/CreateLesson/CreateNewLesson'

const CreateLesson = () => {
    return (
        <div>
            <Header />
            <CreateNewLesson />
            <Footer />
        </div>
    )
}

export default CreateLesson
