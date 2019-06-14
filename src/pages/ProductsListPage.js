import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/productsListPage.css';

const Products = ['car','bike','motocycle'];

const ProductsList  = () => {

    const list = Products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))

    return ( 
        <div className="products">
        <h1>Lista produktów:</h1>
        {list}
        </div>

     );
}
 
export default ProductsList;