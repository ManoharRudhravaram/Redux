import React, { useState } from 'react'

function Gallary({ images }) {
    let [url, setUrl] = useState(images ? images[0] : null)
    
    //to set image on click
    function imageHandler(data) {
        setUrl(data)
    }

    return (
        <>
            {
                images && <div className="row">
                    <div className="col-md-6">
                        {images ? images?.map((data, i) => {
                            return (
                                <div className="m-3" key={i}>
                                    <img src={data} key={i} alt={i} className="img-fluid" onClick={() => {
                                        imageHandler(data)
                                    }} style={{height:'10rem'}} />
                                </div>
                            )
                        }) : null}
                    </div>
                    <div className="col-md-6">
                        <div style={{ width: "100%", height: "100vh" }} className="d-flex justify-content-center align-items-center">
                            <img
                                src={url}
                                alt='x'
                                className="img-fluid" 
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default Gallary