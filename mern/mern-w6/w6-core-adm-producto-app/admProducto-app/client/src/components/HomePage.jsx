import React from 'react'
import ProductList from './ProductList';
import ProductForm from './ProductForm';


export const HomePage = () => {

    return (
            <div>
                <ProductForm /> 
                <ProductList/>
            </div>
    )
}
