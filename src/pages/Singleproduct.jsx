import React from 'react'
import {useParams} from 'react-router-dom'
import productList from '../Components/Data/Product';
export default function Singleproduct() {
    const {id} =useParams();
    const filterProduct=productList.filter((p)=>p.id===+id)[0];
  return (
    <div>
        <img src={`${filterProduct.img}`}/>
        {filterProduct.name}
        {}</div>
  )
}

