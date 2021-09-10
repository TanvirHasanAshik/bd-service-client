import { faChild, faClock, faShieldAlt, faStarHalfAlt, faTrophy, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Trust = () => {
    return (
        <div className="container-fluid trust-container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12 text-center mt-5">
                    <h2>Your Trust <span>and Security</span></h2>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 d-flex mb-5">
                        <div className=" p-2">
                            <FontAwesomeIcon className='icon' icon={faClock} />
                        </div>
                        <div>
                            <h3> SAVES YOU TIME</h3>
                            <span>We helps you live smarter, giving you time to focus on what's most important.</span>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex mb-5">
                        <div className=" p-2">
                            <FontAwesomeIcon className='icon' icon={faShieldAlt} />
                        </div>
                        <div>
                            <h3> For Your Safety</h3>
                            <span>All of our Helpers undergo rigorous identity checks and personal interviews. Your safety is even our concern too.</span>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex mb-5">
                        <div className=" p-2">
                            <FontAwesomeIcon className='icon' icon={faTrophy} />
                        </div>
                        <div>
                            <h3> Best-Rated Professionals</h3>
                            <span>Our experienced taskers perform their tasks with dedication and perfection. We appreciate your reviews about the service.</span>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex mb-5">
                        <div className=" p-2">
                            <FontAwesomeIcon className='icon' icon={faStarHalfAlt} />
                        </div>
                        <div>
                            <h3> We Are Well Equipped</h3>
                            <span>Let us know if you have any specific equirement, otherwise our guys carry their own supplies.</span>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex mb-5">
                        <div className=" p-2">
                            <FontAwesomeIcon className='icon' icon={faChild} />
                        </div>
                        <div>
                            <h3> Always In Touch</h3>
                            <span>Book your service online on one tap, keep a track of your service status and also keep in touch with your Helper.</span>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex mb-5">
                        <div className=" p-2">
                            <FontAwesomeIcon className='icon' icon={faWallet} />
                        </div>
                        <div>
                            <h3> Cash-Free Facility</h3>
                            <span>Pay through secure online mode only after your job is done.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trust;