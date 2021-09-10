import React from 'react';

const Service = ({service, handleService}) => {
    const {_id, icon, title} = service;
    return (
        <div onClick={() => handleService(_id)} className='col-md-2 text-center service pt-5 mt-5 mb-5'>
            <img src={icon} alt="" />
            <p>{title}</p>
        </div>
    );
};

export default Service;