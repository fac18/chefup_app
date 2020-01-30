import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BookLessonForm from '../components/BookLessonForm/BookLessonForm';
import './pages_css/aboutpage.css'

const BookLessonPage = () => {
    return (
        <div className="bkg">
            <Header />
            <div className="container">
            <BookLessonForm />
            </div>
            <Footer />
        </div>
    )
}

export default BookLessonPage
