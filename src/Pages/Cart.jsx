import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { CiCircleRemove } from "react-icons/ci";
import { removeHandler } from '../Redux/Action';

function Cart() {
  let dispatch = useDispatch();

  let cart = useSelector((data) => {
    return data.cartReducer.cartData;
  })

  let Total = useSelector((data) => {
    return data.cartReducer.total;
  })

  useEffect(() => {
    dispatch({ type: 'totalPrice' })
    localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart])

  return (
    <>
      {cart.length == 0 && <div className="container">
        <div className="row d-flex justify-content-center align-items-center" style={{ height: "50vh", width: "100%" }}>
          <div className="col">
            <h1>Your Cart is Empty</h1>
            <Link to="/">
              <button className="btn btn-primary">continue shopping</button>
            </Link>
          </div>
        </div>
      </div>}
      {cart.length > 0 && (<div className="container">
        <div className="row d-flex justify-content-evenly">
          <div className="col-md-2">ITEM</div>
          <div className="col-md-2">PRICE</div>
          <div className="col-md-2">QUANTITY</div>
          <div className="col-md-2">Total</div>
          <div className="col-md-2">Remove</div>
          <hr />
        </div>
        {cart.length > 0 &&
          cart.map((item, i) => {
            return (
              <div className="row d-flex justify-content-evenly border" key={i}>
                <div className="col-md-2">
                  <div>
                    <img
                      src={item.thumbnail}
                      alt={Math.random() * 1000}
                      className="img-fluid" style={{height:'8rem',borderRadius:'100%',width:'8rem'}}
                    />
                  </div>
                  <div>{item.title}</div>
                </div>
                <div className="col-md-2">${item.price}</div>
                <div className="col-md-2">{item.count}</div>
                <div className="col-md-2">${item.price * item.count}</div>
                <div className="col-md-2"><button style={{border:'none',backgroundColor:'transparent'}} onClick={()=>{dispatch(removeHandler(item.id))}}><CiCircleRemove style={{color:'red',fontSize:'3rem'}}/></button> </div>
                <hr />
              </div>
            );
          })}
        <div className="container">
          <div className="row d-flex justify-content-between m-5">
            <div className="col-md-3">
              <Link to="/">
                <button className="btn btn-primary">CONTINUE SHOPPING</button>
              </Link>
            </div>
            <div className="col-md-3">Grand Total:
              ${Total}
            </div>
          </div>
        </div>
      </div>)}
    </>
  )
}

export default Cart