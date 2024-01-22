import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {sortHandler, filterHandler } from
    '../Redux/Action/index';

function Filter() {
    let dispatch = useDispatch()
    //updated array to display 
    let UpdatedList = useSelector((data) => {
        return data.sortReducer.sortedData;
    })

    let MainArr = useSelector((data) => {
        return data.fetchReducer.data;
    })

    //category filter to make unique array
    let cat = MainArr.map((item) => {
        return item.category;
    })
    let category = ['all', ...new Set(cat)]

    return (
        <div  className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className=' text-xl'>Sort</h1>
            <select onChange={(e) => { dispatch(sortHandler(e, UpdatedList)) }} className=' rounded-sm'>
                <option value="a-z">sort:A_Z</option>
                <option value="z-a">sort:Z_A</option>
                <option value="h-l">price:L_H</option>
                <option value="l-h">price:H_L</option>
            </select>
            <br />
            <h2 className=' text-xl'>Filter</h2>
            <div className=' flex flex-col'>
                {
                    category.map((e, i) => {
                        return <button value={e} key={i}className=' bg-blue-600 rounded-md m-1 p-1 text-white'  onClick={(e) => { dispatch(filterHandler(e, MainArr)) }}>{e}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Filter