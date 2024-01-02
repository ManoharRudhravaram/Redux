import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchHandler} from '../Redux/Action';
import { ImCart } from "react-icons/im";
import { Link } from 'react-router-dom';

function Nav() {
  //dipatch 
  let dispatch = useDispatch();

  //data to display from reducer
  let MainArr = useSelector((data) => {
    return data.fetchReducer.data;
  })
  
  //no of products in cart
  let CartCount=useSelector((data)=>{
    return data.cartReducer.totalCount;
  })
  
  return (
    <>
      <div style={{ height: '15vh', backgroundColor: 'hsl(220, 100%, 70%)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <img src='https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg' alt="x" style={{ borderRadius: '100%', height: '14vh' }} />
        <h4>Friends Stores</h4>
        <input type="text" onChange={(e) => { dispatch(searchHandler(e, MainArr)) }} placeholder='search product' /> 
        <Link to='/cart' style={{color:'white',fontSize:'larger',position:'relative'}}>
        <ImCart />
        <span className="badge" style={{color:'white',position:'absolute',top:'-20%',left:'50%'}}>{CartCount}</span>
        </Link>
      </div>
    </>
  )
}

export default Nav