import React from 'react';

const BookSection = ({ handleBook, serviceData }) => {
    return (
        <section className="container-fluid mb-5">
            <div className="row d-flex justify-content-center bookSection">
                <div className="service-image col-md-5 mt-5 mb-5">
                    <img style={{ width: '90%' }} src={serviceData.image} alt="" />
                </div>
                <div className="col-md-5 mt-5 mb-5">
                    <h2 className="title">Book a <span>{serviceData.title}</span> Service Today</h2>
                    <p style={{ color: 'wheat' }} className="mt-5">{serviceData.description}</p>
                    <button onClick={handleBook} className="btn brand-btn">Book Now</button>
                </div>
            </div>
        </section>
    );
};

export default BookSection;