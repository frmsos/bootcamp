import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = (props) => {
    const [productList, setProductList] = useState([]);
    const [hasDeleted, setHasDeleted] = useState(false);
    const navigate = useNavigate();
    useEffect( () => {
        axios.get('http://localhost:8000/api/products/list')
        .then(response => {
            setProductList(response.data.products);
            console.log('useeffect running');})
    }, [hasDeleted]  );  
    const onClickDelete = (e,id) => {
        e.preventDefault();
        console.log('deleteeee on product list', id)
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)    
        .then(response => {
            console.log('delete success', response);
            setHasDeleted(!hasDeleted);
            navigate('/');    
        })
        .catch(error => console.log('error deleting submit', error));

    }
    return (
        <div className='bottomPageContainer'>
            <h2>ProductList</h2>
            <div className='listItemContainers'>
                {productList.map((product, idx)=>{
                    return (
                        <div  key={idx}>
                            
                            <Link className="link" to={`/${product._id}`}>
                                <h5 key={idx}>{product.title}</h5>
                            </Link>
                            <Link   className="link" to={"/"}    onClick={ (e) => onClickDelete(e, product._id) }>
                                <h5 key={idx}> Delete  </h5>
                            </Link>
                        
                        </div>

                    )
                })}
            </div>



        </div>
    )
}

export default ProductList



