import { faCalendar, faSmile, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';
const LikeUs = () => {
    return (
        <div className="container-fluid mt-5 pt-5 mb-5 pb-5">
            <div className="row text-center d-flex justify-content-center">
                <div className="col-md-2 ">
                    <FontAwesomeIcon className="likeIcon" icon={faThumbsUp} />
                    <h2><CountUp end={100} duration={20} />%</h2>
                    <p>Quality</p>
                </div>
                <div className="col-md-2 ">
                    <FontAwesomeIcon className="likeIcon" icon={faUser} />
                    <h2><CountUp end={2500} duration={20} />+</h2>
                    <p>People Work</p>
                </div>
                <div className="col-md-2 ">
                    <FontAwesomeIcon className="likeIcon" icon={faCalendar} />
                    <h2><CountUp end={8} duration={5} /> years</h2>
                    <p>Years Experience</p>
                </div>
                <div className="col-md-2 ">
                    <FontAwesomeIcon className="likeIcon" icon={faSmile} />
                    <h2><CountUp end={1000} duration={20} />+ </h2>
                    <p>Happy Smiles</p>
                </div>
            </div>
        </div>
    );
};

export default LikeUs;