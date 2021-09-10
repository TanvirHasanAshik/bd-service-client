import React from 'react';
import CountUp from 'react-countup';

const ServiceProvides = () => {
    return (
        <section className="container-fluid ServiceProvides">
            <div className="row ">
                <div className="col-md-12 mt-5 pt-3 mb-5 pb-3 text-center">
                    <h2>Worldwide largest <span>home service provider</span></h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 text-center">
                    <h2><CountUp end={50000} duration={20} />+</h2>
                    <h4>HAPPY CUSTOMERS</h4>
                </div>
                <div className="col-md-4 text-center">
                <h2><CountUp end={1000} duration={20} />+</h2>
                    <h4>SERVICE PROVIDERS</h4>
                </div>
            </div>
        </section>
    );
};

export default ServiceProvides;