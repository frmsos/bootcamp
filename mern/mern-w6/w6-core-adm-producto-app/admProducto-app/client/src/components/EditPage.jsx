import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
const EditPage = () => {

    //Variables

    const navigate = useNavigate();
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState([]);

    //Funciones
    const onClickSubmit = (e) => {
        e.preventDefault();
        console.log('onsubmit edit page!!!!', productDetails);
        axios.put(`http://localhost:8000/api/products/update/${id}`, {
            productDetails
        })
        .then(response => console.log('submit edit page successful',response))
        .catch(error => console.log('error on edit page submit', error));
    }
    const onClickDelete = e=> {
        e.preventDefault();
        console.log("onclickdelete", id);
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)     //  app.put("/api/products/delete/:id", productController.deleteProduct);
        .then(response => {
            console.log('delete success', response)
            navigate('/');    
        })
        .catch(error => console.log('error deleting submit', error));
    }


    useEffect( () => {
        axios.get((`http://localhost:8000/api/products/${id}`)) 
        .then(response => {
            setProductDetails(response.data.products);
            console.log(response.data.products);})
            // eslint-disable-next-line
    }, []  );  

    return (
        <div className='detailsPageContainer'>
            <form>
                <h1> Edit Product </h1>
                <div className="mx-auto mb-4">
                    <span className="input-group-text w-75">Product Title</span>
                    <input type="text" className="form-control" value={productDetails.title} placeholder="Insert Product Ttile" aria-label="ProductTitle" aria-describedby="basic-addon1" 
                    onChange={ e =>  setProductDetails({title : e.target.value, price : productDetails.price, description : productDetails.description}) }/>
                </div>
                <div className="mx-auto mb-4">
                    <span className="input-group-text w-75">Price</span>
                    <input type="number" className="form-control" value={productDetails.price} placeholder="Insert Product Price" aria-label="ProductPrice" aria-describedby="basic-addon1"
                    onChange={ e =>  setProductDetails({title : productDetails.title, price : e.target.value, description : productDetails.description}) }/>
                </div>
                <div className="mx-auto">
                    <span className="input-group-text">Product Description</span>
                    <input type="text" className="form-control" value={productDetails.description} placeholder="Insert Product Description" aria-label="ProductDescription" aria-describedby="basic-addon1"
                    onChange={ e =>  setProductDetails({title : productDetails.title, price : productDetails.price, description : e.target.value}) }/>
                </div>
                <div className='buttonContainer'>
                    <button type="button" className="btn btn-success btn-submit" onClick={onClickSubmit}>Submit</button>
                    <button type="button" className="btn btn-error btn-danger" onClick={onClickDelete}>Delete</button>
                    <Link to="/"> 
                        <button className="btn btn-info">Take me home!</button>
                    </Link>
                </div>
            </form>
        </div>
  )
}

export default EditPage