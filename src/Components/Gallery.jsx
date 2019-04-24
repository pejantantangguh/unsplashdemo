import React from 'react';

// const Gallery = props => {
//     return (
//         <div>
//             <img src={props.thumb} />
//             <h3>{props.name}</h3>
//             <h3>{props.location}</h3>
//         </div>
//     )
// }

class Gallery extends React.Component {
    render() {
        const { thumb, description, name, location } = this.props;
        return (
            <div className="image__gallery">
                <div className="image-container">
                    <img src={thumb} alt={description} />
                </div>
                <div className="info">
                    <h1>Photographer Name : {name} </h1>
                    <h3>Photographer location : {location} </h3>
                </div>
            </div>
        )
    }
}

export default Gallery;