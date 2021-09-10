import React from 'react';
import serviceManImg from '../../../images/serviceMane.png';
const Header = () => {
    return (
        <section className="header-container container-fluid">
            <div className='row d-flex justify-content-center'>
                <div className="provide-service col-md-4 mt-5 pt-5">
                    <h1>We provide <br/> <span style={{color: 'goldenrod'}}>Quality Service</span> </h1>
                    <h4>We work 24 hours in a day</h4><br />
                    <p>BD SERVICES LIMITED is a private company. Its registered address is Chittagong Port Colony Bangladesh</p>
                    <button className="btn brand-btn">Contact Us</button>
                </div>
                <div className="col-md-4 serviceManImg">
                    <img  src={serviceManImg} alt="" />
                </div>
                
            </div>
        </section>

    );
};

export default Header;