import React from 'react';
import bookingImg from '../../../images/book.jpg';
import scheduleImg from '../../../images/schedule.jpg';
import relaxImg from '../../../images/relax.jpg';
const HowWork = () => {
    return (
        <section className="container-fluid ">
            <div className="row d-flex justify-content-center work-container pt-5 text-center" >
                <div className="col-md-3 work-img">
                    <img src={bookingImg} alt="" />
                    <div>
                        <h2>Book</h2>
                        <small>Select the date and time like your professional to show up</small>
                    </div>
                </div>
                <div className="col-md-3 work-img">
                    <img src={scheduleImg} alt="" />
                    <div>
                        <h2>Schedule</h2>
                        <small>Certified Takers comes over and done your task</small>
                    </div>
                </div>
                <div className="col-md-3 work-img">
                    <img src={relaxImg} alt="" />
                    <div>
                        <h2>Relax</h2>
                        <small>your task is completed to satisfaction - guaranteed</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;