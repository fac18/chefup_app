import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BookLessonForm from '../components/BookLessonForm/BookLessonForm'

const BookLessonPage = () => {
    return (
        <div>
            <Header />
            <BookLessonForm />
            <Footer />
        </div>
    )
}

export default BookLessonPage
