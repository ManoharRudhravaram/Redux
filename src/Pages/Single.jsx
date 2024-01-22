import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Gallary from './Gallary';
import { singleFetch } from '../Redux/Action';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import CartIncDec from './CartIncDec';

function Single() {
  //getting id of single product 
  let { id } = useParams();

  let {single} = useSelector((data) => {
    return data.fetchReducer;
  })

  //destruturing from single data
  let { images, title, description, rating, price, stock, brand, discountPercentage } = single;

  let dispatch = useDispatch();
  
  useEffect(() => {
    singleFetch(dispatch, id)
  }, [])

  return (
    <>
      <div className="container">
        <div className="row  d-flex justify-content-evenly items-center">
          <div className="col-md-5 mt-1">
            <Gallary images={images} />
          </div>
          <div className="col-md-5">
            <h1 className=' text-xl font-serif '>{title}</h1>
            <p className='flex  items-center'><FaStar />{rating}</p>
            <p className='text-xl'>MRP:${price}</p>
            <p className="text-blue-900 text-2xl">deal of the day:${price - ((price * discountPercentage) / 100)}</p>
            <p className="m-2 text-md" >
              {description}
            </p>
            <div className=' w-full'>
              <img src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt='x' className='img-fluid' style={{ height: '150px' }} />
            </div>
            <hr />
            <p>Available: <b> {stock > 0 ? "In Stock" : "Out of Stock"}</b></p>
            <p>Stock: <b>{stock} units</b></p>
            <p>Brand:<b>{brand}</b></p>
            <hr />
            <CartIncDec/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Single