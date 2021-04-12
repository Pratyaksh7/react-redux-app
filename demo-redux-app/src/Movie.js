import React from 'react'

function Movie({ name, price, id}) {
    return (
        <div>
            <h4>Name: {name}</h4>
            <h4>Price: {price}</h4>
        </div>
    )
}

export default Movie
