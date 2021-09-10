import React from 'react';

const WhatWeOffer = ({ serviceData }) => {
    const { provideImg1, provideImg2, provideImg3, provideImg4 } = serviceData;
    const { serviceType1, serviceType2, serviceType3, serviceType4 } = serviceData;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center mt-5 ">
                    <h2>Service <span>We Provide</span></h2>
                </div>
            </div>
            
            <div className="row d-flex justify-content-center mt-5 ">
                <div className="col-md-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5 ">
                            <img style={{ width: '50%', marginLeft: '100px' }} src={provideImg1} alt="" />
                        </div>
                        <div className="col-md-7">
                            <h2> {serviceType1}</h2>
                            <p>Give your home a sparkling new makeover</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5 ">
                            <img style={{ width: '50%', marginLeft: '100px' }} src={provideImg2} alt="" />
                        </div>
                        <div className="col-md-7">
                            <h2> {serviceType2}</h2>
                            <p>Give your home a sparkling new makeover</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 d-flex justify-content-center mt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5 ">
                            <img style={{ width: '50%', marginLeft: '100px' }} src={provideImg3} alt="" />
                        </div>
                        <div className="col-md-7">
                            <h2> {serviceType3}</h2>
                            <p>Give your home a sparkling new makeover</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 d-flex justify-content-center mt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5 ">
                            <img style={{ width: '50%', marginLeft: '100px' }} src={provideImg4} alt="" />
                        </div>
                        <div className="col-md-7">
                            <h2> {serviceType4}</h2>
                            <p>Give your home a sparkling new makeover</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;