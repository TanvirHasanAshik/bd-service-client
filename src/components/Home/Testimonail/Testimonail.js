import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.jpg';
const Testimonail = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row text-center">
                <div className="col-md-12">
                    <h2>Testimonials</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center text-center">
                <div className="col-md-8">
                    <Carousel>
                        <div>
                            <div >
                                <img src={img1} alt="" style={{ width: '100px', height: '100px', borderRadius: '50px' }} />
                                <p className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolor architecto molestias cupiditate fuga repudiandae ipsam dicta nihil modi tenetur ex sapiente expedita sed, sunt assumenda quisquam et, illo deserunt.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={img2} alt="" style={{ width: '100px', height: '100px', borderRadius: '50px' }} />
                                <p className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolor architecto molestias cupiditate fuga repudiandae ipsam dicta nihil modi tenetur ex sapiente expedita sed, sunt assumenda quisquam et, illo deserunt.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={img3} alt="" style={{ width: '100px', height: '100px', borderRadius: '50px' }} />
                                <p className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolor architecto molestias cupiditate fuga repudiandae ipsam dicta nihil modi tenetur ex sapiente expedita sed, sunt assumenda quisquam et, illo deserunt.</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Testimonail;