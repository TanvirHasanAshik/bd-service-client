import React from 'react';
import { Link } from 'react-router-dom';
import bdServiceImg from '../../../images/bd-service.png';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div className='navbar-brand'>
                    <img className='brand-img' src={bdServiceImg} alt="" />
                    <Link className='nav-brand' to="/home">BD SERVICE</Link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link " aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/about">about</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/service">service</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/booking">booking</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/blog">blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/contact">contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/admin/dashboard">dashboard</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;