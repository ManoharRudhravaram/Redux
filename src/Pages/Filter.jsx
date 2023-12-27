import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {sortHandler, filterHandler } from
    '../Redux/Action/index';

function Filter() {
    let dispatch = useDispatch()
    let UpdatedList = useSelector((data) => {
        return data.sortReducer.sortedData;
    })

    let MainArr = useSelector((data) => {
        return data.fetchReducer.data;
    })

    let cat = MainArr.map((item) => {
        return item.category;
    })
    let category = ['all', ...new Set(cat)]

    return (
        <div style={{width:'100%',height:'100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',overflowY: 'auto'}}>
            <h1>Sort</h1>
            <select onChange={(e) => { dispatch(sortHandler(e, UpdatedList)) }} style={{borderRadius:'5px'}}>
                <option value="a-z">sort:A_Z</option>
                <option value="z-a">sort:Z_A</option>
                <option value="h-l">price:L_H</option>
                <option value="l-h">price:H_L</option>
            </select>
            <br />
            <h2>Filter</h2>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',gap:'5px'}}>
                {
                    category.map((e, i) => {
                        return <button value={e} key={i}className='btn'  onClick={(e) => { dispatch(filterHandler(e, MainArr)) }}>{e}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Filter