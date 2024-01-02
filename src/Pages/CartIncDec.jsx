import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../Redux/Action';

function CartIncDec() {
    let dispatch=useDispatch()

    //single data fetching from api
    let singleData = useSelector((data) => {
        return data.fetchReducer.single;
    })
    
    let { stock } = singleData;

    let [count, setCount] = useState(1)

    //to increase cart count value
    function incHandler() {
        stock <= count ? setCount(stock) : setCount(count + 1)
    }

    //to decrease cart count value
    function decHandler() {
        count > 1 ? setCount(count - 1) : setCount(1)
    }

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'start'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '10rem', margin: '2rem' }}>
                <button style={{
                    border: 'none', backgroundColor: 'transparent'
                }} onClick={incHandler}>
                    <FaPlus />
                </button>
                <h4>{count}</h4>
                <button style={{
                    border: 'none', backgroundColor: 'transparent'
                }} onClick={decHandler}>
                    <FaMinus />
                </button>
            </div>
            <div style={{marginLeft:'3rem'}}>
            <Link to='/cart'>
                <button className='btn btn-success' onClick={()=>{dispatch(addToCart(singleData,count))}}>Add to Cart</button>
            </Link>
            </div>
        </div>
    )
}

export default CartIncDec