import React, {useState} from 'react'
import "../App.css"
import axios from 'axios';



const Main = () => {
  
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const submitHandler = (e) => {
   // e.preventDefault();
    console.log('onsubmit');
    axios.post('http://localhost:8000/api/products/create', {
      title,
      price,
      description
    })
    .then(response => console.log('submit successful',response))
    .catch(error => console.log('error on submit', error));
  }
  

  return (
    <div className='topPageContainer'>
      <div className='mx-auto mb-2 mt-2'>
        <h1>Product Manager</h1>
      </div>
      
      
      <form onSubmit={submitHandler}>
        <div className="mx-auto mb-4">
          <span className="input-group-text w-75">Product Title</span>
          <input type="text" className="form-control" placeholder="Insert Product Ttile" aria-label="ProductTitle" aria-describedby="basic-addon1" onChange={ e=> setTitle(e.target.value)}/>
        </div>
        <div className="mx-auto mb-4">
          <span className="input-group-text w-75">Price</span>
          <input type="number" className="form-control" placeholder="Insert Product Price" aria-label="ProductPrice" aria-describedby="basic-addon1" onChange={ e=> setPrice(e.target.value)}/>
        </div>
        <div className="mx-auto">
          <span className="input-group-text">Product Description</span>
          <input type="text" className="form-control" placeholder="Insert Product Description" aria-label="ProductDescription" aria-describedby="basic-addon1" onChange={ e=> setDescription(e.target.value)}/>
        </div>
        <div className='buttonContainer'>
          <button type="submit" className="btn btn-success btn-submit">Success</button>
        </div>
        
      </form>


    </div>

  )
}

export default Main