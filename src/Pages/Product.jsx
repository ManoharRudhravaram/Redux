import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { singleFetch } from '../Redux/Action';

function Product({ item }) {
    let { thumbnail, title, price, id }= item;
    return (
        <>
            <div className="col-md-3" style={{ height: '20rem' }}>
                <div className="card">
                    <div className="card-body d-flex align-items-center justify-content-evenly bg-success">
                        <Link to={`/single/${id}`}>
                            <img src={thumbnail} alt={id} className='img-fluid' style={{ height: '10rem', borderRadius: '15px', width: '280px' }} onClick={()=>{singleFetch(id)}}/>
                        </Link>
                    </div>
                    <div className="card-footer d-flex justify-content-around bg-secondary text-white">
                        <p>{title}</p>
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product