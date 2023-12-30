import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart, singleFetch } from '../Redux/Action';
import { useDispatch } from 'react-redux';

function Product({ item }) {
    let dispatch=useDispatch()
    let { thumbnail, title, price, id }= item;
    return (
        <>
            <div className="col-md-4" style={{ height: '20rem' }}>
                <div className="card">
                    <div className="card-body d-flex align-items-center justify-content-evenly bg-success">
                        <Link to={`/single/${id}`}>
                            <img src={thumbnail} alt={id} className='img-fluid' style={{ height: '10rem', borderRadius: '15px', width: '280px' }} onClick={()=>{singleFetch(id)}}/>
                        </Link>
                    </div>
                    <div className="card-footer d-flex  justify-content-around bg-secondary text-white align-items-center">
                        <div>
                        <p>{title}</p>
                        <p>${price}</p>
                        </div>
                        <div>
                        <Link to='/cart'>
                        <button className='btn btn-primary' onClick={()=>{dispatch(addToCart(item,1))}}>Add to cart</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product