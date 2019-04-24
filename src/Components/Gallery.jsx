import React from 'react';

const Gallery = props => {
    return (
        <div>
            <img src={props.thumb} />
            <h3>{props.name}</h3>
            <h3>{props.location}</h3>
        </div>
    )
}

export default Gallery;