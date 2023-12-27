import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Gallary from './Gallary';
import { singleFetch } from '../Redux/Action';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

function Single() {
  let { id } = useParams();

  let data = useSelector((data) => {
    return data.fetchReducer.single;
  })

  let { images, title, description, rating, price, stock, brand, discountPercentage} = data;

  let dispatch = useDispatch();
  useEffect(() => {
    singleFetch(dispatch, id)
  }, [])

  return (
    <>
      <div className="container">
        <div className="row  d-flex justify-content-evenly">
          <div className="col-md-5 mt-1">
            <Gallary images={images}  />
          </div>
          <div className="col-md-5">
            <h1 style={{fontFamily:'fantasy'}}>{title}</h1>
            <p><FaStar/>{rating}</p>
            <p>MRP:${price}</p>
            <p className="text-primary">deal of the day:${price - ((price * discountPercentage) / 100)}</p>
            <p className="m-2" style={{fontFamily:'initial'}}>
              {description}
            </p>
            <div style={{ width: "100%" }}>
              <img src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt='x' className='img-fluid' style={{ height: '150px' }} />
            </div>
            <hr />
            <p>Available: <b> {stock > 0 ? "In Stock" : "Out of Stock"}</b></p>
            <p>Brand:<b>{brand}</b></p>
            <hr />
            <Link to='/'>
              <button className='btn btn-primary'>Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Single