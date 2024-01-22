import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchHandler} from '../Redux/Action';

function Pagination() {
    let dispatch = useDispatch()
    
    //object for setting skip value of api  
    let [value, setValue] = useState({ first: 0 })
    
    //no of buttons to create according to array length
    let buttons = useSelector((data) => {
        return data.fetchReducer.data;
    })

    let array = useSelector((data) => {
        return data.sortReducer.sortedData;
    })

    //next button 
    function incHandler() {
        let objValue = { ...value, first: value.first + 10 }
        if (value.first === 90) {
            setValue({ first: 90 })
        }
        else {
            setValue(objValue)
        }
    }
    
    //previous button
    function decHandler() {
        let objValue = { ...value, first: value.first - 10 }
        if (value.first === 0) {
            setValue({ first: 0 })
        }
        else {
            setValue(objValue)
        }
    }
    
    //value handler to update value
    function valueHandler(val) {
        let objValue = { ...value, first: val }
        setValue(objValue)
    }
    
    useEffect(() => {
        FetchHandler(dispatch, value)
    }, [value])

    return (
        <div>
            {array.length > 0 &&
                <div className=' flex gap-1 justify-center m-1 '>
                    {
                        value.first > 0 && <button className='btn btn-primary' onClick={decHandler}>Previous</button>
                    }
                    {
                        buttons.map((_,i) => {
                            return <button className='btn btn-primary' key={i} onClick={() => {
                                valueHandler((i) * 10)
                            }}>{i + 1}</button>
                        })
                    }
                    {
                        value.first < 90 && <button className='btn btn-primary' onClick={incHandler}>Next</button>
                    }
                </div>
            }
        </div>
    )
}

export default Pagination