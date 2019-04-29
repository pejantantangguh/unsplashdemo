import React from 'react';
import { Link } from "@reach/router";


class Gallery extends React.Component {
    render() {
        const { thumb, description, name, location, id } = this.props;
        return (
            <Link to={`/details/${id}`} className="bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5 min-h-100">
                <div className="tc ">
                    <img src={thumb} alt={description} />
                </div>
                <div className="info">
                    <h1>Name : {name} </h1>
                    <h3>Location : {location} </h3>
                </div>
            </Link>
        )
    }
}

export default Gallery;