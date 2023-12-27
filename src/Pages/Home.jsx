import React from 'react'
import Nav from './Nav'
import Dispaly from './Dispaly'
import Pagination from './Pagination'
import Filter from './Filter'

function Home() {

  return (
    <div>
      <div style={{ position: 'sticky', width: '100%', zIndex: '1', top: '0'}}>
        <Nav />
      </div>
      <div style={{ display: 'flex',width:'100%'}}>
        <div style={{ position: 'fixed ',backgroundColor:'hsl(100, 100%, 70%)',width:'12%',zIndex:'1',}}>
          <Filter />
        </div>
        <div style={{ marginLeft:'14rem',marginTop:'1.5rem',width:'100%'}}>
          <Dispaly/>
        </div>
      </div>
    
    </div>
  )
}

export default Home