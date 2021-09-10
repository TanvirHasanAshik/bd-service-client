import React, { useEffect, useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import Sidebar from '../Sidebar/Sidebar';

const BookingRequest = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-booking')
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 text-center pt-5">
                    <h1>Customer Booking Request</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                {
                    book.map(book => <BookingCard book={book}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default BookingRequest;