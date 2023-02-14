import React from 'react'
import Navbar from './Navbar'
import promo1 from '../images/promo1.png';
import promo2 from '../images/promo2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Home = () => {

    return (
        <div>
            <Navbar/>
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div class="carousel-item active">
                <img src={promo1} className="d-block w-50" alt="pizza promo banner"/>
                </div>
                <div className="carousel-item">
                <img src={promo2} className="d-block w-50" alt="pizza promo banner"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        
        </div>
    )
}

export default Home