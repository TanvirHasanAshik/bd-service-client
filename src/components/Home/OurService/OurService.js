import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Service from '../Service/Service';

const OurService = () => {
    const [serviceData, setServiceData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/getService')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, []);

    const handleService = (id) => {
        history.push(`/serviceDetails/${id}`);
    }
    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Our <span>Service</span></h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                {serviceData.map(service =>
                    <Service  key={service._id} service={service} handleService={handleService} />
                )}
            </div>
        </section>
    );
};

export default OurService;