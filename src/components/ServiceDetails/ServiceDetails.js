import { faHandPointRight, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AskedQuestions from '../AskedQuestions/AskedQuestions';
import BookSection from '../BookSection/BookSection';
import HowWork from '../Home/HowWork/HowWork';
import OurService from '../Home/OurService/OurService';
import Testimonail from '../Home/Testimonail/Testimonail';
import ServiceProvides from '../ServiceProvides/ServiceProvides';
import Navbar from '../Shared/Navbar/Navbar';
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';

const ServiceDetails = () => {
    const [serviceData, setServiceData] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/bookService/${id}`)
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [id])

    const history = useHistory();
    const handleBook = () =>{
        history.push(`/serviceBooking/${id}`);
    }

    return (
        <section>
            <Navbar></Navbar>
            <div className="container-fluid details-container">
                <div className="row book-header d-flex justify-content-center">
                    <div className="booking-content col-md-5 mt-5 pt-3">
                        <h2 className="title">Book a <span>{serviceData.title}</span> Service Today</h2>
                        <p style={{ color: 'wheat' }} className="mt-5">{serviceData.description}</p>
                        <div className="row d-flex justify-content-center benefit-service">
                            <div className="col-md-6">
                                <p><FontAwesomeIcon icon={faHandPointRight} /> High end cleaning machinery</p>
                                <p><FontAwesomeIcon icon={faHandPointRight} /> High end cleaning machinery</p>
                                <p><FontAwesomeIcon icon={faHandPointRight} /> High end cleaning machinery</p>
                                <p><FontAwesomeIcon icon={faHandPointRight} /> High end cleaning machinery</p>
                            </div>
                            <div className="col-md-6">
                                <p><FontAwesomeIcon icon={faHandPointRight} /> High end cleaning machinery</p>
                                <p><FontAwesomeIcon icon={faHandPointRight} /> High end cleaning machinery</p>
                                <p><FontAwesomeIcon icon={faHandPointRight} /> High end cleaning machinery</p>
                                <p><FontAwesomeIcon icon={faHandPointRight} /> High end cleaning machinery</p>
                            </div>
                        </div>
                        <button onClick={handleBook} className="btn brand-btn">Book Now</button>
                    </div>
                    <div className="service-image col-md-5 mt-5 pt-5">
                        <img style={{ width: '90%' }} src={serviceData.image} alt="" />
                    </div>
                </div>
            </div>
            <h2 className="mt-5 pt-5 text-center">How <span>It</span> Work</h2>
            <HowWork></HowWork>
            <WhatWeOffer serviceData={serviceData}></WhatWeOffer>
            <AskedQuestions></AskedQuestions>
            <ServiceProvides></ServiceProvides>
            <Testimonail></Testimonail>
            <BookSection serviceData={serviceData} handleBook={handleBook}></BookSection>
            <OurService></OurService>
        </section>
    );
};

export default ServiceDetails;