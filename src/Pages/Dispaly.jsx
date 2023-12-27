import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { ColorRing } from 'react-loader-spinner'
import Pagination from './Pagination'

function Dispaly() {
  
    let array = useSelector((data) => {
        return data.sortReducer.sortedData;
    })

    return (
        <>
            <div>
                {
                    array.length === 0 ? <ColorRing
                        visible={true}
                        height="8"
                        width="8"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    /> :
                        <div className="row" style={{width:'100%'}}>
                            {
                                array.map((item, i) => {
                                    return <Product item={item} key={i} />
                                })
                            }
                        </div>
                }
                <Pagination/>
            </div>
        </>
    )
}

export default Dispaly