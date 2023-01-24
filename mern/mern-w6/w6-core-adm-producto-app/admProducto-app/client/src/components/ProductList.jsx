import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const [productsList, setProductList] = useState([]);
    useEffect( () => {
        axios.get('http://localhost:8000/api/products/list')
        .then(response => {
            setProductList(response.data.products);
            //setListOn(true);
            console.log(response.data.products);})
    }, []  );  
    return (
        <div className='bottomPageContainer'>
            <h2>ProductList</h2>
            <div>
                {productsList.map((product, idx)=>{
                    return (
                        <Link to={`/${product._id}`}>
                            <p key={idx}>{product.title}</p>
                        </Link>

                    )
                })}
            </div>



        </div>
    )
}

export default ProductList



