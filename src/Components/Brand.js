import React from 'react'
import './Brand.css';
import productList from './Data/Product';
import { Link } from 'react-router-dom';
const Brand = (props) => {
    return (
        <div>
            <div className="Brands">
                {productList.map((p)=>(
                 <div className="Brand-Item">
                    <Link to={`/product/${p.id}`}>
                 <div className="Brand-Image">
                     <img src={p.img} alt="Image" />
                 </div>
                 </Link>
                 <div className="BrandInfo">
                     <h6 className='BrandTitle'>{p.brand}</h6>
                     <h6 className='Brandsubtitle'>{p.name}</h6>
                     <h6 className='Brandprice'>{p.price}</h6>
                     <button className='Addtocard'>Add to cart</button>
                 </div>
             </div>
                ))}
                
            </div>
        </div>
    )
}

export default Brand
