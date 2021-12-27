import React from 'react'

function Rate({rate}) {
    const ratingArr = [1,2,3,4,5]
    return (
        <div className="rate">
            {ratingArr.map((el)=> el<=rate? <i className="fas fa-star"></i>: <i className="far fa-star"></i>)}
        </div>
    )
}

export default Rate;
