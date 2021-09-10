import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const ServiceBooking = () => {
    const { id } = useParams();
    const [bookService, setBookService] = useState({});
    const [bookingInfo, SetBookingInfo] = useState({});
    bookingInfo.serviceName  = bookService.title;
    bookingInfo.serviceImage = bookService.image;
    console.log(bookingInfo);
    // console.log(bookService);
    useEffect(() => {
        fetch(`http://localhost:5000/bookService/${id}`)
            .then(res => res.json())
            .then(data => setBookService(data))
    }, [id]);

    const handleSubmit = (e) => {
        fetch('http://localhost:5000/booking-service', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookingInfo)
        })
        .then(response => {
            if (response) {
                setInterval(() => { window.location.replace("/home");
            }, 1000)
            }
        })

        e.preventDefault();
    }
    const handleBlur = (e) => {
        const newInfo = { ...bookingInfo };
        newInfo[e.target.name] = e.target.value;
        SetBookingInfo(newInfo);
    }


    return (
        <section>
            <Navbar></Navbar>
            <div className="container-fluid bookingService">
                <div className="row">
                    <div className="col-md-12 mt-5 text-center text-white">
                        <h1 className='text-white'>Book Your <span>{bookService.title} </span>service today</h1>
                    </div>
                </div>
                <form className="text-white" onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Your Name</label>
                                <input onBlur={handleBlur} name="name" type="text" class="form-control" id="exampleInputEmail1" required placeholder="Enter Your Name" />
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Email address</label>
                                <input onBlur={handleBlur} name="email" type="email" class="form-control" id="exampleInputEmail1" required placeholder="Enter Your Email" />
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Phone Number</label>
                                <input onBlur={handleBlur} name="phoneNumber" type="tel" class="form-control" id="exampleInputEmail1" required placeholder="+88015500000" />
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Alternative Phone Number</label>
                                <input onBlur={handleBlur} name="altPhoneNumber" type="tel" class="form-control" id="exampleInputEmail1" placeholder="+88015500000" />
                            </div>
                            <button type="submit" class=" btn brand-btn m-2">Send Your Information</button>
                        </div>

                        <div className="col-md-5">
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Your Budget</label>
                                <input onBlur={handleBlur} name="budget" type="number" class="form-control" id="exampleInputEmail1" required placeholder="3000TK" />
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Ask if you have any questions</label>
                                <input onBlur={handleBlur} name="askQus" type="text" class="form-control" id="exampleInputEmail1" placeholder="Ask me any questions" />
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Share Your Idea</label>
                                <input onBlur={handleBlur} name="shareIdea" type="text" class="form-control" id="exampleInputEmail1" placeholder="Idea Share" />
                            </div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Your Address</label>
                                <input onBlur={handleBlur} name="address" type="text" class="form-control" id="exampleInputEmail1" required placeholder="Enter Your Home Address" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ServiceBooking;