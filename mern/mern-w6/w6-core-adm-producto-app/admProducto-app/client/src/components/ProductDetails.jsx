import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState([]);
    const {id} = useParams();
    useEffect( () => {
        axios.get((`http://localhost:8000/api/products/${id}`))
        .then(response => {
            setProductDetails(response.data.products);
            console.log(response.data.products);})
            // eslint-disable-next-line
    }, []  );  
    return (
        <div className='detailsPageContainer'>
            <h1>Product Details</h1>
            {
                <div>
                    <h3>   {productDetails.title}  </h3>
                    <p> Price: {productDetails.price}  </p>
                    <p> Description: {productDetails.description}  </p>
                </div>
            }
           <Link to="/"> 
                <button className="btn btn-info">Take me home!</button>
           </Link>

           
        </div>
    )
}

export default ProductDetails