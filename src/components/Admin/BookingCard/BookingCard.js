import React from 'react';

const BookingCard = ({ book }) => {
    console.log(book);
    const { serviceName,
        serviceImage,
        name,
        email,
        phoneNumber,
        altPhoneNumber,
        budget,
        askQus,
        shareIdea
    } = book;
    return (
        <div className='col-md-8'>
            <div className="row d-flex service-card justify-content-center p-5 m-5 mb-0">
                <div className="col-md-4 bookingCard">
                    <img className="img-responsive" src={serviceImage} alt="" />
                    <p className="text-center">{serviceName}</p>
                    <button className="btn brand-btn">DELETE</button>
                </div>
                <div className="col-md-7">
                    <p>Customer Name: <span>{name}</span></p>
                    <p>Email: <span>{email}</span></p>
                    <p>Phone: <span>{phoneNumber}</span></p>
                    <p>Alternative Phone Number: <span>{altPhoneNumber}</span></p>
                    <p>Customer Budget: <span>{budget}</span></p>
                    <p>Question: <span>{askQus}</span></p>
                    <p>Share Idea: <span>{shareIdea}</span></p>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;