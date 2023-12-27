import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchHandler, sortHandler ,filterHandler} from '../Redux/Action';

function Nav() {
  let dispatch = useDispatch();

  let MainArr = useSelector((data) => {
    return data.fetchReducer.data;
  })
  
  let cat=MainArr.map((item)=>{
    return item.category;
  })

  return (
    <>
      <div style={{ height: '15vh', backgroundColor: 'hsl(220, 100%, 70%)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <img src='https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg' alt="x" style={{ borderRadius: '100%', height: '14vh' }} />
        <h4>Friends Stores</h4>
        <input type="text" onChange={(e) => { dispatch(searchHandler(e, MainArr)) }} placeholder='search product' /> 
      </div>
    </>
  )
}

export default Nav