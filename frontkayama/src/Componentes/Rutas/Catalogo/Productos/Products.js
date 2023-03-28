import React from 'react';
import ProductDetail from './ProductDetail.js/ProductDetail';
import './Products.css'
let products = [
    {
        name:'Casco Asiana',
        image:'https://www.asiana.com.mx/wp-content/uploads/2022/04/careta-abierta-asiana-azul-3.png',
        price:null,
    },
    {
        name:'Peto Asiana',
        image:'https://www.asiana.com.mx/wp-content/uploads/2022/04/PETO-OFCIAL-ASIANA.png',
        price:null,
    },
    {
        name:'Concha Asiana',
        image:'https://www.asianatusah.shop/wp-content/uploads/2021/04/CONCHA-PARA-HOMBRE-TEXTIL-248.png',
        price:null,
    },
    {
        name:'Espinilleras Asiana',
        image:'https://www.asianatusah.shop/wp-content/uploads/2021/04/ESPINILLERA-CON-EMPEINE-ASIANA-1.png',
        price:null,
    },
    {
        name:'Guantes Asiana',
        image:'https://m.media-amazon.com/images/I/61lVCYYvnTS._AC_SX425_.jpg',
        price:null,
    },
    {
        name:'Karategui',
        image:'https://www.asianatusah.shop/wp-content/uploads/2021/04/KARATEGUI-BLANCO-ESPALDA.png',
        price:null,
    },
]
function Products() {

    return ( <>

        <div className='productsContainer'>
            {
                products.map( (product) => {
                    return (<ProductDetail name={product.name} image={product.image} price={product.price} ></ProductDetail>)
                })
            }
        </div>
    
    
    </> );
}

export default Products;