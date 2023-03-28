import React from 'react';
import './ProductDetail.css'
function ProductDetail(props) {
    return ( <>
    
        <div className='productContainer' >
            <div className='productName'>
                {props.name}
            </div>
            <img className='productImage' src={props.image}/>
                
            <div className={props.price ? 'productPrice' : 'productNoPrice'}>
                {props.price || 'Preguntar precio en Dojo'}
            </div>

        </div>
    
    </> );
}

export default ProductDetail;