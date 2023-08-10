import React from 'react'
import Brand from '../Components/Brand'
import './Men.css';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';
const Men = () => {
    return (
        <div>
            <Brand/>
            <div className='pagination' style={{ display: 'block', width: 700, padding: 30 }}>
                    <Pagination>
                    <Pagination.Prev />
                    <Pagination.Ellipsis />
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Next />
                </Pagination>
            </div>


        </div>
    )
}

export default Men