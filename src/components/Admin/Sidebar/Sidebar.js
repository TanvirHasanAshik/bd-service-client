import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faEnvelopeSquare, faHome, faRss, faTachometerAlt, faTools } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    return (
        <section className="row">
            <div className="col-md-3 sidebar pt-5">
                <Link to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link>
                <Link to="/admin/dashboard"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Link>
                <Link to="/admin/addService"><FontAwesomeIcon icon={faTools} /> Add Service</Link>
                <Link to="/admin/bookingRequest"><FontAwesomeIcon icon={faBookOpen} /> Booking Request</Link>
                <Link to="/admin/blog"><FontAwesomeIcon icon={faRss} /> Blog</Link>
                <Link to="/admin/contactMessage"><FontAwesomeIcon icon={faEnvelopeSquare} /> Contact Message</Link>
            </div>
        </section>
    );
};

export default Sidebar;