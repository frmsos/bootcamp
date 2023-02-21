import {React, useState} from 'react';
import Navbar from './Navbar';
import GridMenu from './GridMenu';
import promo1 from '../images/promo1.png';
import promo2 from '../images/promo2.png';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Home = () => {
    const [itemCount, setItemCount] = useState(0);
    return (
        <div>
            <Navbar itemCount={itemCount} setItemCount={setItemCount}/>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" id='carouselItems'>
                        <img src={promo1} className="img-fluid" alt="..."/> 
                    </div>
                    <div className="carousel-item" id='carouselItems'>
                    <img src={promo2} className="img-fluid" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <GridMenu itemCount={itemCount} setItemCount={setItemCount}/>


















        
        </div>
    )
}

export default Home