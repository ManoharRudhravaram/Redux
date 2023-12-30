import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchHandler} from '../Redux/Action';

function Pagination() {
    
    let [value, setValue] = useState({ first: 0 })

    let dispatch = useDispatch()
    
    useEffect(() => {
        FetchHandler(dispatch, value)
    }, [value])

    let buttons = useSelector((data) => {
        return data.fetchReducer.data;
    })

    let array = useSelector((data) => {
        return data.sortReducer.sortedData;
    })

    function incHandler() {
        let objValue = { ...value, first: value.first + 10 }
        if (value.first === 90) {
            setValue({ first: 90 })
        }
        else {
            setValue(objValue)
        }
    }

    function decHandler() {
        let objValue = { ...value, first: value.first - 10 }
        if (value.first === 0) {
            setValue({ first: 0 })
        }
        else {
            setValue(objValue)
        }
    }

    function valueHandler(val) {
        let objValue = { ...value, first: val }
        setValue(objValue)
    }
    
    return (
        <div>
            {array.length > 0 &&
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center", padding: '5px', width: '30%', margin: 'auto', gap: '1px' }}>
                    {
                        value.first > 0 && <button className='btn btn-primary' onClick={decHandler}>Previous</button>
                    }
                    {
                        buttons.map((_, i) => {
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