import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 text-center pt-5">
                    <h1>Welcome Our Admin</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;